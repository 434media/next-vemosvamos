import { NextResponse } from "next/server"
import { checkBotId } from "botid/server"
import { db } from "@/lib/services/firebase"

export async function POST(request: Request) {
  try {
    // BotID verification
    const verification = await checkBotId()
    if (verification.isBot) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const { fullName, email, phoneNumber, company, city, state, country, message } = await request.json()

    // Save to Firestore
    await db.collection("contact_submissions").add({
      fullName,
      email,
      phone: phoneNumber,
      company,
      city,
      state,
      country,
      message,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "An error occurred while submitting the form" }, { status: 500 })
  }
}
