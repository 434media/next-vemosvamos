"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { useLanguage } from "../lib/language-context"
import { FEEDS, OPERATOR, SKILLS, type Locale } from "../lib/operator"

interface OperatorConsoleProps {
  onClose: () => void
}

export function OperatorConsole({ onClose }: OperatorConsoleProps) {
  const { t, language } = useLanguage()
  const locale = language as Locale
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  // Focus management.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    return () => {
      previouslyFocused.current?.focus?.()
    }
  }, [])

  // Body scroll lock.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  // Esc to close + focus trap on Tab.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose],
  )

  const operatorName = locale === "es" ? OPERATOR.nameEs : OPERATOR.nameEn
  const operatorAlt = locale === "es" ? OPERATOR.nameEn : OPERATOR.nameEs

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={handleBackdrop}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-8"
    >
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="op-console-title"
        initial={{ opacity: 0, y: 16, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.99 }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#eeebe3] text-[#0d1f2d] shadow-[0_24px_60px_rgba(0,0,0,0.32)] overflow-hidden flex flex-col"
      >
        {/* Paper texture */}
        <Image
          src="/images/redcrumple.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="pointer-events-none object-cover opacity-[0.12] mix-blend-multiply"
        />

        {/* HEADER */}
        <header className="relative z-10 flex items-start justify-between gap-4 px-6 sm:px-9 pt-6 pb-5 border-b border-[#0d1f2d]/10">
          <div className="min-w-0">
            <p
              id="op-console-title"
              className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#1a2a5c] truncate"
            >
              {t("console.maskhead")}
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[#0d1f2d]/50">
              {t("console.version")}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t("console.closeLabel")}
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-sm
                       text-[#0d1f2d]/70 hover:text-[#ca0013] hover:bg-[#0d1f2d]/5
                       transition-colors duration-150
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ca0013] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eeebe3]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-5 h-5"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </header>

        {/* SCROLL BODY */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-9 py-6 space-y-10 sm:space-y-12">
          {/* INTRO */}
          <p className="font-mono text-[12px] sm:text-[13px] text-[#0d1f2d]/80 flex items-start gap-2">
            <span aria-hidden="true" className="text-[#ca0013] leading-none">▸</span>
            <span>{t("console.intro")}</span>
          </p>

          {/* SECTION 1 — The Operator */}
          <section aria-labelledby="op-section-operator">
            <SectionLabel id="op-section-operator" text={t("console.section.operator")} />
            <div className="mt-4">
              <h2
                className="font-serif font-black text-[#0d1f2d] leading-[0.95] tracking-[-0.02em]
                           text-3xl sm:text-4xl md:text-5xl"
                style={{ fontVariationSettings: '"SOFT" 50' }}
              >
                {operatorName}
              </h2>
              <p
                className="mt-1 font-serif text-[#0d1f2d]/55 leading-[1.05] tracking-[-0.01em]
                           text-xl sm:text-2xl"
                style={{ fontVariationSettings: '"SOFT" 50' }}
              >
                {operatorAlt}
              </p>
              <p className="mt-5 text-sm sm:text-base text-[#0d1f2d]/80 leading-relaxed max-w-2xl">
                {t("console.operatorPurpose")}
              </p>
            </div>
          </section>

          {/* SECTION 2 — Skills */}
          <section aria-labelledby="op-section-skills">
            <SectionLabel id="op-section-skills" text={t("console.section.skills")} />
            <ol className="mt-5 space-y-5">
              {SKILLS.map((skill) => (
                <li key={skill.number} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5">
                  <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#ca0013] pt-1">
                    {skill.number}
                  </div>
                  <div>
                    <p
                      className="font-serif font-black text-[#0d1f2d] leading-[1.05] tracking-[-0.015em]
                                 text-lg sm:text-xl md:text-2xl"
                      style={{ fontVariationSettings: '"SOFT" 50' }}
                    >
                      {locale === "es" ? skill.nameEs : skill.nameEn}
                    </p>
                    <p className="mt-1.5 text-[13px] sm:text-sm text-[#0d1f2d]/75 leading-relaxed">
                      {skill.description[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* SECTION 3 — Feeds (the scheduled loops) */}
          <section aria-labelledby="op-section-feeds">
            <SectionLabel id="op-section-feeds" text={t("console.section.feeds")} />
            <ul className="mt-5 space-y-3">
              {FEEDS.map((feed, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 text-[13px] sm:text-sm items-baseline border-b border-[#0d1f2d]/8 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono font-bold tracking-[0.2em] uppercase text-[11px] sm:text-[12px] text-[#1a2a5c]">
                    {feed.cadence[locale]}
                  </span>
                  <span className="text-[#0d1f2d]/85 leading-relaxed">{feed.source[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 4 — Human in the loop */}
          <section aria-labelledby="op-section-loop">
            <SectionLabel id="op-section-loop" text={t("console.section.loop")} />
            <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-[#0d1f2d]/80">
              <LoopLine text={t("console.humanLoopLine1")} />
              <LoopLine text={t("console.humanLoopLine2")} />
              <LoopLine text={t("console.humanLoopLine3")} />
            </ul>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-[#0d1f2d]/10 px-6 sm:px-9 py-4">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0d1f2d]/45 text-right">
            {t("console.hint")}
          </p>
          <p className="mt-3 pt-3 border-t border-[#0d1f2d]/10 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#1a2a5c]/70 text-center">
            {t("console.outro")}
          </p>
        </footer>
      </motion.div>
    </motion.div>
  )
}

function SectionLabel({ id, text }: { id: string; text: string }) {
  return (
    <h3
      id={id}
      className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#1a2a5c] flex items-center gap-2"
    >
      <span aria-hidden="true" className="block h-px w-6 bg-[#1a2a5c]/40" />
      {text}
      <span aria-hidden="true" className="block h-px flex-1 bg-[#1a2a5c]/15" />
    </h3>
  )
}

function LoopLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed">
      <span aria-hidden="true" className="text-[#ca0013] mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#ca0013] shrink-0" />
      <span>{text}</span>
    </li>
  )
}
