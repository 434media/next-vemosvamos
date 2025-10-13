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
    <div ref={containerRef} className="relative w-full overflow-hidden mt-16 xs:mt-20 sm:mt-24 md:mt-0">
      <section className="relative w-full h-[85vh] xs:h-[90vh] sm:h-[92vh] md:h-screen lg:h-screen bg-[#eeebe3] flex flex-col md:flex-row overflow-hidden">
        <div className="absolute md:relative w-full md:w-1/2 h-full order-2 md:order-1">
          <Image
            src="/images/about-hero.png"
            alt="Why We're Different - About Us"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
            className="object-cover object-center md:object-left"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-start items-end md:items-start px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 order-1 md:order-2 z-10">
          <motion.h1
            ref={h1Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={h1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-1 xs:mt-2 sm:mt-2 md:mt-24 lg:mt-32 xl:mt-40 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.9] xs:leading-[0.95] sm:leading-[1.0] tracking-tighter text-[#ca0013] text-right md:text-left mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 drop-shadow-lg md:drop-shadow-none"
            style={{ color: "#ca0013" }}
          >
            {(() => {
              const words = t("about.title").split(" ")
              const firstLine = words.slice(0, 2).join(" ")
              const secondLine = words.slice(2).join(" ")

              return (
                <>
                  {firstLine}
                  {secondLine && <br />}
                  {secondLine}
                </>
              )
            })()}
          </motion.h1>

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="md:-mt-6 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 text-right md:text-left text-[#ca0013] font-inter max-w-xs xs:max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl bg-white/90 md:bg-transparent p-3 xs:p-4 sm:p-5 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
          >
            <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-black uppercase leading-tight tracking-tight">
              {t("about.femaleLed")}
            </div>
            <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-black uppercase leading-tight tracking-tight">
              {t("about.bicultural")}
            </div>
            <div className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-black uppercase leading-tight tracking-tight">
              {t("about.network")}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
