"use client"

import { motion, useInView } from "motion/react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "../lib/language-context"

type AnimatedNumberProps = {
  value: number
  suffix?: string
  prefix?: string
}

function AnimatedNumber({ value, suffix = "", prefix = "" }: AnimatedNumberProps) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  useEffect(() => {
    if (isInView) {
      const start = 0
      const duration = 2000 // Increased duration for smoother animation
      const startTime = performance.now()

      function easeOutCubic(t: number): number {
        return 1 - Math.pow(1 - t, 3)
      }

      function animateNumber(currentTime: number) {
        const elapsed = currentTime - startTime
        if (elapsed < duration) {
          const progress = Math.min(elapsed / duration, 1)
          const easedProgress = easeOutCubic(progress)
          const currentValue = Math.round(start + (value - start) * easedProgress)
          setDisplay(currentValue)
          requestAnimationFrame(animateNumber)
        } else {
          setDisplay(value)
        }
      }

      requestAnimationFrame(animateNumber)
    }
  }, [isInView, value])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom bezier curve for smoother entrance
        delay: 0.1,
      }}
      className="inline-block text-3xl md:text-5xl lg:text-6xl font-extrabold text-red-700"
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  )
}

export default function WhyItMattersSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="why-it-matters"
      className="relative w-full bg-[#eeebe3] flex flex-col items-center justify-start px-4 py-20 md:py-24 min-h-screen"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* LEFT COLUMN – Header Text + Video */}
        <div className="flex flex-col md:w-1/2 items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-[#ca0013] drop-shadow-sm">
              {t("matters.titleFull")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            <video
              src="/images/stacyinterview.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN – Stats */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-8 xs:gap-y-10 md:gap-y-12 text-red-700">
          {/* STAT 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <p className="xs:px-2 text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              {t("stats.spending")} <AnimatedNumber value={2} prefix="$" suffix=".4  Trillion " />{" "}
              {t("stats.spendingText")}
            </p>
            <motion.div
              className="mt-4 h-[8px] md:h-[4px] bg-red-700 origin-left w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ transformOrigin: "left" }}
              onAnimationStart={() => console.log("[v0] Stat 1 underline animation started")}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">{t("stats.spendingSource")}</p>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "20%" }}
          >
            <p className="xs:px-2 text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              <AnimatedNumber value={1} /> {t("stats.population")} <AnimatedNumber value={5} />{" "}
              {t("stats.populationText")}
            </p>
            <motion.div
              className="mt-4 h-[8px] md:h-[4px] bg-red-600 origin-left w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ transformOrigin: "left" }}
              onAnimationStart={() => console.log("Stat 2 underline animation started")}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">{t("stats.populationSource")}</p>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <p className="xs:px-2 text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              <AnimatedNumber value={55} suffix="%" /> {t("stats.content")}
            </p>
            <motion.div
              className="mt-4 h-[8px] md:h-[4px] bg-red-700 origin-left w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ transformOrigin: "left" }}
              onAnimationStart={() => console.log("[v0] Stat 3 underline animation started")}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">{t("stats.contentSource")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
