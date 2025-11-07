"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const isDevelopment = process.env.NODE_ENV === "development"

export default function ConnectForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    city: "",
    state: "",
    country: "",
    message: "",
  })
  const [consentChecked, setConsentChecked] = useState(false)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const [turnstileWidget, setTurnstileWidget] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const formRef = useRef<HTMLDivElement>(null)
  const formInView = useInView(formRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!isDevelopment && !window.turnstile) {
      const script = document.createElement("script")
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.turnstile && turnstileRef.current && !turnstileWidget) {
          const widgetId = window.turnstile.render(turnstileRef.current, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
            callback: (token: string) => {
              console.log("[v0] Turnstile token received:", token)
            },
          })
          setTurnstileWidget(widgetId)
        }
      }

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [turnstileWidget])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      let turnstileResponse = undefined

      if (!isDevelopment) {
        if (!window.turnstile || !turnstileWidget) {
          throw new Error("Turnstile is not initialized")
        }

        turnstileResponse = window.turnstile.getResponse(turnstileWidget)
        if (!turnstileResponse) {
          throw new Error(t("connect.form.errorTurnstile"))
        }
      }

      const response = await fetch("/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(turnstileResponse && { "cf-turnstile-response": turnstileResponse }),
        },
        body: JSON.stringify(formData),
      })

      const responseData = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          company: "",
          city: "",
          state: "",
          country: "",
          message: "",
        })
        setConsentChecked(false)
        if (!isDevelopment && turnstileWidget && window.turnstile) {
          window.turnstile.reset(turnstileWidget)
        }
      } else {
        setSubmitStatus("error")
        setErrorMessage(responseData.error || t("connect.form.errorGeneral"))
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : t("connect.form.errorGeneral"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-6">
      {/* Background Images - Full Viewport Coverage */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/desktop-mouth.png"
          alt=""
          fill
          className="hidden md:block object-cover"
          quality={90}
          sizes="100vw"
          priority
        />
        {/* Mobile Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-mouth.png"
          alt=""
          fill
          className="block md:hidden object-cover"
          quality={90}
          sizes="100vw"
          priority
        />
      </div>

      {/* Form Section - Centered and viewport optimized */}
      <motion.div
        ref={formRef}
        className="relative z-10 w-full max-w-2xl mx-auto px-4 py-6 md:py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full bg-[#ca0013]/90 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-white mb-2 sm:mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            suppressHydrationWarning
          >
            {t("connect.form.title")}
          </motion.h1>

            <motion.p
              className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              suppressHydrationWarning
            >
              {t("connect.form.subtitle")}
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-2 sm:space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("connect.form.fullName")}
                    required
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("connect.form.email")}
                    required
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder={t("connect.form.phone")}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("connect.form.company")}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: City & State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={t("connect.form.city")}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder={t("connect.form.state")}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Country */}
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder={t("connect.form.country")}
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("connect.form.message")}
                  required
                  rows={2}
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors resize-none"
                />
              </div>

              {!isDevelopment && (
                <div className="flex justify-start">
                  <div ref={turnstileRef} data-size="normal" className="w-full" />
                </div>
              )}

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 md:gap-3 py-1 md:py-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 md:h-5 md:w-5 rounded border-2 border-white bg-transparent checked:bg-white checked:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ca0013] cursor-pointer appearance-none relative
                    after:content-[''] after:absolute after:left-[3px] md:after:left-[5px] after:top-[0px] md:after:top-[1px] after:w-[5px] md:after:w-[6px] after:h-[8px] md:after:h-[10px] after:border-[#ca0013] after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 after:transition-opacity"
                />
                <label
                  htmlFor="consent"
                  className="text-white text-xs md:text-sm leading-relaxed cursor-pointer"
                  suppressHydrationWarning
                >
                  {t("connect.form.consent")}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !consentChecked}
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#ca0013] font-bold uppercase text-base md:text-lg rounded-full hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                whileHover={{ scale: consentChecked && !isSubmitting ? 1.05 : 1 }}
                whileTap={{ scale: consentChecked && !isSubmitting ? 0.95 : 1 }}
              >
                {isSubmitting ? t("connect.form.sending") : t("connect.form.send")}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white bg-white/20 px-4 py-3 rounded-lg"
                >
                  {t("connect.form.success")}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white bg-black/20 px-4 py-3 rounded-lg"
                >
                  {errorMessage}
                </motion.div>
              )}
            </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
