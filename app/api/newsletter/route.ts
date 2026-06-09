import { NextResponse } from "next/server"
import { Resend } from "resend"
import { checkBotId } from "botid/server"
import { db } from "@/lib/services/firebase"
import { buildWelcomeEmail } from "@/lib/emails/welcome"

const FROM_ADDRESS = "Vemos Vamos <hello@send.434media.com>"
const REPLY_TO = "hello@434media.com"

export async function POST(request: Request) {
  try {
    const verification = await checkBotId()
    if (verification.isBot) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const body = await request.json()
    const email = typeof body?.email === "string" ? body.email.trim() : ""

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
    }

    // Write to Firestore first. If this fails, no email goes out.
    await db.collection("newsletter_signups").add({
      email,
      source: "VemosVamos",
      createdAt: new Date().toISOString(),
    })

    // Fire the welcome email. Don't fail the subscription if Resend errors —
    // the user is already in the database; the worst case is a missed welcome.
    sendWelcomeEmail(email).catch((err) => {
      console.error("Welcome email failed:", err)
    })

    return NextResponse.json({ message: "Newsletter subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json(
      { error: "An error occurred while subscribing to the newsletter" },
      { status: 500 },
    )
  }
}

async function sendWelcomeEmail(to: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — skipping welcome email")
    return
  }

  const resend = new Resend(apiKey)
  const { subject, html, text } = buildWelcomeEmail()

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: REPLY_TO,
    subject,
    html,
    text,
    headers: {
      "X-Entity-Ref-ID": `welcome-${Date.now()}`,
    },
    tags: [
      { name: "category", value: "newsletter" },
      { name: "type", value: "welcome" },
    ],
  })

  if (error) {
    throw new Error(`Resend error: ${error.message || JSON.stringify(error)}`)
  }
}
