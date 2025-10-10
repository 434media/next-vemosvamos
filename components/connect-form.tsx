"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "motion/react"
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
    <section className="relative w-full min-h-screen bg-[#eeebe3] pt-16 md:pt-20">
      <div className="relative w-full min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-[40vh] md:h-auto md:min-h-screen"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/about-hero.png"
            alt="Connect with Vemos Vamos"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          ref={formRef}
          className="relative w-full md:w-1/2 bg-[#ca0013] flex items-center justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full max-w-xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              suppressHydrationWarning
            >
              {t("connect.form.title")}
            </motion.h1>

            <motion.p
              className="text-white text-base md:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              suppressHydrationWarning
            >
              {t("connect.form.subtitle")}
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("connect.form.fullName")}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
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
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder={t("connect.form.phone")}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("connect.form.company")}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: City & State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={t("connect.form.city")}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder={t("connect.form.state")}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
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
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors"
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
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white/90 transition-colors resize-none"
                />
              </div>

              {!isDevelopment && (
                <div className="flex justify-start">
                  <div ref={turnstileRef} data-size="normal" className="w-full" />
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-white text-[#ca0013] font-bold uppercase text-lg rounded-full hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
      </div>
    </section>
  )
}
