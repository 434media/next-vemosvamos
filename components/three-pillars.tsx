"use client"

import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "../lib/language-context"

export default function WhoWeReach() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#ca0013] flex flex-col items-center justify-start text-white overflow-hidden z-30 min-h-[40vh] md:min-h-[65vh] py-8 md:py-16"
      aria-label="Our mission statement"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl flex items-center justify-center px-4 md:px-8 mb-8 md:mb-12"
      >
        <h1 className="font-black text-center leading-[0.8] tracking-tight text-white drop-shadow-2xl">
          {/* Mobile breakpoints */}
          <span className="block md:hidden text-3xl sm:text-4xl">{t("pillars.content")}</span>
          {/* Desktop breakpoints */}
          <span className="hidden md:block text-5xl lg:text-7xl">{t("pillars.content")}</span>
        </h1>
      </motion.div>

      {/* BACKGROUND CITY + GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[50vh] md:h-[40vh] z-0">
        <Image
          src="/images/cityblack.png"
          alt="City skyline background decoration"
          fill
          className="object-cover object-bottom opacity-70 sm:opacity-75"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  )
}
