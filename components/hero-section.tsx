"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { useLanguage } from "../lib/language-context"
import { OperatorConsole } from "./operator-console"
import { Ornament } from "./ornament"

const STICKER_EN =
  "https://firebasestorage.googleapis.com/v0/b/groovy-ego-462522-v2.firebasestorage.app/o/vemos-vamos%2Fvv-hero-transparent.png?alt=media"
const STICKER_ES =
  "https://firebasestorage.googleapis.com/v0/b/groovy-ego-462522-v2.firebasestorage.app/o/vemos-vamos%2Fvv-spanish-transparent.png?alt=media"

export default function HeroMasthead() {
  const { t, language } = useLanguage()
  const stickerSrc = language === "es" ? STICKER_ES : STICKER_EN

  // Operator console state — the sticker is the easter-egg trigger.
  const [consoleOpen, setConsoleOpen] = useState(false)
  // null until a real mouse event provides coordinates — prevents the tooltip
  // from flashing at (0, 0) in the navbar area before the first mousemove.
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null)

  // Cmd+K / Ctrl+K from anywhere on the page opens the console.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setConsoleOpen(true)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const openConsole = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setConsoleOpen(true)
    setTooltipPos(null)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY })
  }, [])

  const showTooltip = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY })
  }, [])

  const hideTooltip = useCallback(() => {
    setTooltipPos(null)
  }, [])

  return (
    <section
      aria-label="Vemos Vamos masthead"
      className="relative w-full bg-[#eeebe3] overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Paper texture */}
      <Image
        src="/images/redcrumple.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        priority
        className="pointer-events-none object-cover opacity-[0.18] mix-blend-multiply"
      />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-16 sm:pt-24 pb-6 sm:pb-10">
        {/* Asymmetric spread */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center min-h-0">
          {/* LEFT (mobile first) — typography stack */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow — ornaments hidden on mobile so the text fits one line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-8 md:mb-10 pl-1 md:pl-0"
            >
              <Ornament className="hidden md:inline-block h-2 w-14 text-[#1a2a5c]/70" />
              <span
                className="font-bold uppercase text-[#ca0013]
                           text-[10px] sm:text-xs md:text-sm
                           tracking-[0.16em] sm:tracking-[0.22em]
                           whitespace-nowrap"
              >
                {t("hero.masthead.eyebrow")}
              </span>
              <Ornament className="hidden md:inline-block h-2 w-14 text-[#1a2a5c]/70" flip />
            </motion.div>

            {/* Headline — fluid size that respects viewport height so short laptops don't overflow */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif font-black leading-[0.9] tracking-[-0.025em] text-[#0d1f2d]"
              style={{
                fontSize: "clamp(42px, min(9vw, 13dvh), 132px)",
                fontVariationSettings: '"SOFT" 50',
              }}
            >
              {t("hero.masthead.tagline")}
            </motion.h1>

            {/* Operating triplet — tightened so it stays on one line in both locales */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-3 sm:mt-8 md:mt-10 flex flex-wrap items-center gap-x-2.5 gap-y-1.5"
            >
              <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#1a2a5c] whitespace-nowrap">
                {t("hero.masthead.opSee")}
              </span>
              <span aria-hidden="true" className="text-[#1a2a5c]/40 text-xs">·</span>
              <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#1a2a5c] whitespace-nowrap">
                {t("hero.masthead.opShape")}
              </span>
              <span aria-hidden="true" className="text-[#1a2a5c]/40 text-xs">·</span>
              <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#1a2a5c] whitespace-nowrap">
                {t("hero.masthead.opMove")}
              </span>
            </motion.div>
          </div>

          {/* RIGHT (mobile second) — sticker. Scales to the shorter of viewport-width or viewport-height
              so it fits cleanly within 100dvh on every device. Also the easter-egg trigger: hover, right-click,
              or Cmd/Ctrl+K opens the operator console. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{
              duration: 0.95,
              delay: 0.7,
              type: "spring",
              stiffness: 160,
              damping: 18,
            }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <button
              type="button"
              onContextMenu={openConsole}
              onClick={(e) => e.preventDefault()}
              onMouseEnter={showTooltip}
              onMouseLeave={hideTooltip}
              onMouseMove={handleMouseMove}
              aria-label={t("console.discoveryHint")}
              className="relative aspect-square block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ca0013] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eeebe3] rounded-sm"
              style={{
                width: "min(82vw, 55dvh, 540px)",
                filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.18))",
                cursor: "url(/cursor-bot.svg) 16 16, context-menu",
              }}
            >
              <Image
                src={stickerSrc}
                alt={t("hero.masthead.stampAlt")}
                fill
                priority
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 540px"
                className="object-contain pointer-events-none"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating discovery hint — follows the cursor while hovering the sticker.
          Hidden on touch devices (no mousemove fires). */}
      <AnimatePresence>
        {tooltipPos && !consoleOpen && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none fixed top-0 left-0 z-[60] bg-[#0d1f2d] text-white shadow-[0_6px_16px_rgba(0,0,0,0.32)] px-3 py-1.5"
            style={{
              transform: `translate3d(${tooltipPos.x + 26}px, ${tooltipPos.y + 22}px, 0)`,
            }}
          >
            <span className="block font-mono text-[10px] font-bold tracking-[0.18em] uppercase whitespace-nowrap">
              {t("console.discoveryHint")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Operator console */}
      <AnimatePresence>
        {consoleOpen && <OperatorConsole onClose={() => setConsoleOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
