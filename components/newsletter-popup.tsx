"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "../lib/language-context"
import { LanguageToggle } from "./language-toggle"

interface NewsletterPopupProps {
  showModal: boolean
  onClose: () => void
}

export default function NewsletterPopup({ showModal, onClose }: NewsletterPopupProps) {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  const validateEmail = (email: string): boolean => {
    return emailPattern.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset previous states
    setError(null)

    // Validate email
    if (!email.trim()) {
      setError(t("newsletter.errorEmpty"))
      inputRef.current?.focus()
      return
    }

    if (!validateEmail(email)) {
      setError(t("newsletter.errorInvalid"))
      inputRef.current?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const responseData = await response.json()

      if (response.ok) {
        setEmail("")
        setIsSuccess(true)
        formRef.current?.reset()

        // Reset success state and close modal after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 3000)
      } else {
        throw new Error(responseData.error || "Newsletter subscription failed")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setError(t("newsletter.errorGeneral"))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!showModal) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#eeebe3] border-4 border-[#ca0013] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-[#ca0013] border-2 border-white text-white hover:bg-white hover:text-[#ca0013] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-offset-2 focus:ring-offset-[#eeebe3] rounded-lg"
            aria-label="Close newsletter signup"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Language Toggle */}
          <div className="absolute top-4 left-4 z-20">
            <LanguageToggle />
          </div>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ca0013]/20 z-10" />
              <Image
                src="https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/about-hero.png"
                alt="Vemos Vamos Community"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side - Newsletter Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden group bg-[#eeebe3]">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-[#ca0013] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8 mt-16 md:mt-0">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                  >
                    <h2 className="text-4xl font-black text-[#ca0013] group-hover:text-white tracking-wider uppercase transition-colors duration-500 font-serif">
                      {t("newsletter.title")}
                    </h2>
                  </motion.div>

                  {/* Value Proposition */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xl md:text-lg text-gray-800 group-hover:text-white leading-relaxed font-semibold tracking-wide transition-colors duration-500">
                      {t("newsletter.description")}
                    </p>
                  </motion.div>
                </div>

                {/* Form */}
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      ref={formRef}
                      key="subscribe-form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      aria-label="Newsletter subscription form"
                    >
                      <div className="relative">
                        <label htmlFor="newsletter-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="newsletter-email"
                          ref={inputRef}
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("newsletter.placeholder")}
                          className="w-full px-6 py-4 border-2 border-[#ca0013] bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-[#ca0013] transition-all duration-500 text-lg font-semibold tracking-wide group-hover:border-white group-hover:text-white group-hover:placeholder-white/70 rounded-lg"
                          aria-describedby={error ? "newsletter-error" : undefined}
                          disabled={isSubmitting}
                          autoComplete="email"
                        />
                      </div>

                      <div className="relative overflow-hidden group/button">
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-500 ease-out" />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full bg-[#ca0013] border-2 border-[#ca0013] text-white py-4 px-8 font-black text-xl tracking-wider uppercase transition-colors duration-500 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-offset-2 focus:ring-offset-[#eeebe3] active:scale-[0.98] transform group-hover:border-white group-hover:bg-transparent group-hover:text-white group-hover/button:text-[#ca0013] rounded-lg"
                          aria-label="Subscribe to newsletter"
                        >
                          <motion.div
                            animate={isSubmitting ? { scale: [1, 1.02, 1] } : { scale: 1 }}
                            transition={isSubmitting ? { duration: 1.5, repeat: Number.POSITIVE_INFINITY } : {}}
                            className="flex items-center justify-center"
                          >
                            {isSubmitting ? t("newsletter.submitting") : t("newsletter.subscribe")}
                          </motion.div>
                        </button>
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          id="newsletter-error"
                          className="text-red-600 text-sm text-center font-bold bg-red-100 border border-red-400 p-3 tracking-wide"
                          role="alert"
                        >
                          {error}
                        </motion.div>
                      )}
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-6"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-transparent border-2 border-[#ca0013] flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:border-white transition-all duration-500">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", damping: 20, stiffness: 300 }}
                          >
                            <CheckIcon className="h-8 w-8 text-[#ca0013] group-hover:text-[#ca0013] transition-colors duration-500" />
                          </motion.div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-black text-[#ca0013] group-hover:text-white mb-3 tracking-wider uppercase transition-colors duration-500">
                          {t("newsletter.success")}
                        </h3>
                        <p className="text-gray-800 group-hover:text-white text-base leading-relaxed font-semibold tracking-wide transition-colors duration-500">
                          {t("newsletter.successMessage")}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
