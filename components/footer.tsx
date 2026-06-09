"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { useLanguage } from "../lib/language-context"

// Brand glyphs as inline SVG paths. Each fills via currentColor so they inherit
// the link's text color (white/65 → red on hover). 24×24 viewBox, single path each.
const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/vemos.vamos/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/vemosvamos",
    path: "M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/vemosvamos/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
]

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(t("footer.newsletter.errorEmail"))
      return
    }

    setStatus("submitting")
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || t("footer.newsletter.errorGeneral"))
      }
      setEmail("")
      setStatus("success")
    } catch (err) {
      setError(err instanceof Error ? err.message : t("footer.newsletter.errorGeneral"))
      setStatus("idle")
    }
  }

  return (
    <footer className="relative z-10 w-full bg-[#0d1f2d] text-white overflow-hidden">
      {/* Soft red glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(202,0,19,0.18) 0%, rgba(202,0,19,0) 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* REGION 1 — Close */}
        <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl"
          >
            <p
              className="font-serif font-black text-white leading-[0.95] tracking-[-0.02em]
                         text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]"
              style={{ fontVariationSettings: '"SOFT" 50' }}
            >
              {t("footer.close.en")}
            </p>
            <p
              className="mt-3 font-serif font-medium text-white/55 leading-[1.0] tracking-[-0.015em]
                         text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px]"
              style={{ fontVariationSettings: '"SOFT" 60' }}
            >
              {t("footer.close.es")}
            </p>
          </motion.div>
        </div>

        {/* REGION 2 — Newsletter */}
        <div className="border-t border-white/10 py-10 sm:py-12">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="md:col-span-4 lg:col-span-4">
              <p className="text-[12px] sm:text-sm font-bold tracking-[0.22em] uppercase text-[#ff3848]">
                {t("footer.newsletter.heading")}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/55">
                {t("footer.newsletter.subhead")}
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-7 md:col-start-5">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-base sm:text-lg text-white/90"
                  >
                    {t("footer.newsletter.success")}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-2"
                    noValidate
                  >
                    <label htmlFor="footer-newsletter-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("footer.newsletter.placeholder")}
                      className="flex-1 px-1 py-2.5 bg-transparent
                                 text-white placeholder-white/40
                                 text-base sm:text-lg
                                 border-b border-white/30
                                 focus:outline-none focus:border-white
                                 transition-colors duration-200"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center
                                 bg-[#ca0013] hover:bg-[#a00010] text-white
                                 font-bold uppercase tracking-[0.18em] text-xs sm:text-sm
                                 px-6 py-3
                                 transition-colors duration-200
                                 disabled:opacity-60 disabled:cursor-not-allowed
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ca0013] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1f2d]"
                    >
                      {status === "submitting"
                        ? t("footer.newsletter.submitting")
                        : t("footer.newsletter.button")}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {error && (
                <p className="mt-3 text-xs text-[#ff3848]" role="alert">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* REGION 3 — Colophon */}
        <div className="border-t border-white/10 py-6 sm:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="text-[11px] sm:text-xs text-white/55 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
            <span>© {new Date().getFullYear()} Vemos Vamos.</span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <span>{t("footer.parent")}</span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link
              href="https://434media.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff3848] transition-colors hover:underline"
            >
              434media.com
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white/40">
              {t("footer.followLabel")}
            </span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-white/65 hover:text-[#ff3848] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
