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
      className="relative w-full bg-[#ca0013] flex flex-col items-center justify-start text-white overflow-hidden z-30 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20"
      aria-label="Our mission statement"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
      >
        <h1 className="font-black text-center leading-[0.8] tracking-tight text-white drop-shadow-2xl">
          {/* Mobile: xs, sm */}
          <span className="block md:hidden text-3xl sm:text-5xl">{t("pillars.content")}</span>
          {/* Tablet/Laptop: md, lg */}
          <span className="hidden md:block lg:hidden text-6xl">{t("pillars.content")}</span>
          {/* Desktop/TV: xl */}
          <span className="hidden lg:block text-7xl xl:text-8xl">{t("pillars.content")}</span>
        </h1>
      </motion.div>

      {/* BACKGROUND CITY + GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[60vh] sm:h-[65vh] md:h-[50vh] lg:h-[45vh] xl:h-[40vh] z-0">
        <Image
          src="/images/cityblack.png"
          alt="City skyline background decoration"
          fill
          className="object-cover object-bottom opacity-70 sm:opacity-75 md:opacity-80"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  )
}
