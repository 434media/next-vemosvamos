"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

interface NewsletterProps {
  currentLanguage?: "en" | "es"
}

export function Newsletter({ currentLanguage }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { t, language } = useLanguage()
  const activeLanguage = currentLanguage || language

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("[v0] Form submit triggered")
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      console.log("[v0] Making API request to /api/newsletter")
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const responseData = await response.json()
      console.log("[v0] API response:", responseData)

      if (response.ok) {
        setEmail("")
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error(responseData.error || "Newsletter subscription failed")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setError(
        `${t("newsletter.errorPrefix")} ${error instanceof Error ? error.message : String(error)}. Please try again.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: "4/5", height: "500px" }}>
        <div className="relative w-full" style={{ height: "40%" }}>
          <Image
            src="https://storage.googleapis.com/groovy-ego-462522-v2.firebasestorage.app/vemos-vamos/about-hero.png"
            alt="VEMOS VAMOS Newsletter"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 flex flex-col bg-gradient-to-br from-[#EE2D24] to-[#C41E3A]" style={{ height: "60%" }}>
          <div className="text-center mb-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-white mb-2">{t("newsletter.title")}</h3>
            <p className="text-white/90 text-sm">{t("newsletter.description")}</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="subscribe-form"
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("newsletter.emailPlaceholder")}
                      className="w-full px-4 py-3 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 text-sm backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => {
                      console.log("[v0] Button clicked")
                    }}
                    className="w-full px-6 py-3 bg-white text-[#EE2D24] rounded-lg hover:bg-white/90 transition-all duration-200 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#EE2D24] text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative z-10"
                  >
                    {isSubmitting ? t("newsletter.subscribing") : t("newsletter.subscribe")}
                  </button>
                  {error && <p className="text-white/90 text-xs text-center mt-2">{error}</p>}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/20 text-white px-4 py-3 rounded-lg border border-white/30 backdrop-blur-sm text-center"
                >
                  <p className="text-sm">{t("newsletter.successMessage")}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
