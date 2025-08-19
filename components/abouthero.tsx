"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
import { useLanguage } from "../lib/language-context"

export default function AboutHero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const textInView = useInView(textRef, { once: true, margin: "-10%" })
  const h1InView = useInView(h1Ref, { once: true, margin: "-10%" })

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden mt-24 md:mt-0">
      <section className="relative w-full h-[95vh] md:h-screen md:mb-0 bg-[#eeebe3] flex flex-col md:flex-row overflow-hidden">
        <div className="absolute md:relative w-full md:w-1/2 h-full order-2 md:order-1 mt-16 md:mt-0">
          <Image
            src="/images/about-hero.png"
            alt="Why We're Different - About Us"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center md:object-left"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-start items-end md:items-start px-4 md:px-8 py-4 md:py-0 order-1 md:order-2 z-10">
          <motion.h1
            ref={h1Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={h1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:mt-32 text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.8] tracking-tigter text-[#ca0013] text-right md:text-left mb-4 md:mb-12 drop-shadow-lg md:drop-shadow-none"
            style={{ color: "#ca0013" }}
          >
            {t("about.title")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word}
                  {index < t("about.title").split(" ").length - 1 && <br />}
                </span>
              ))}
          </motion.h1>

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="space-y-2 md:space-y-3 lg:space-y-4 text-right md:text-left text-[#ca0013] font-inter max-w-xs md:max-w-md lg:max-w-lg bg-white/80 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
          >
            <div className="text-xl md:text-2xl lg:text-4xl font-black uppercase leading-tight tracking-tight">
              {t("about.femaleLed")}
            </div>
            <div className="text-base md:text-lg lg:text-2xl font-bold uppercase leading-tight tracking-wide">
              {t("about.bicultural")}
            </div>
            <div className="text-base md:text-lg lg:text-2xl font-bold uppercase leading-tight tracking-wide">
              {t("about.network")}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
