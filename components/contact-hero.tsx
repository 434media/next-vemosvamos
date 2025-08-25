"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ContactHero() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] xs:min-h-[88vh] sm:min-h-[90vh] md:min-h-[95vh] lg:min-h-screen xl:min-h-screen w-full bg-[#eeebe3] pt-16 xs:pt-20 sm:pt-24 md:pt-20 lg:pt-24 xl:pt-28">
        <motion.div
          className="absolute top-0 left-0 w-full xs:w-full sm:w-3/5 md:w-2/5 lg:w-2/5 xl:w-2/5 h-full z-0 overflow-visible"
          initial={{ opacity: 0, scale: 0.85, x: -160 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <div className="relative h-full w-full overflow-visible">
            <Image
              src="/images/city.png"
              alt="Cityscape illustration"
              fill
              priority
              className="object-cover object-left-top drop-shadow-2xl"
              sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, 40vw"
            />
          </div>
        </motion.div>

        <div className="relative w-full h-full mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 flex items-center z-10">
          <motion.div
            className="relative w-full max-w-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="font-inter font-black uppercase leading-[0.8] tracking-tighter 
                         text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
                         text-left xs:text-left sm:text-left md:text-right lg:text-right xl:text-right
                         ml-0 xs:ml-0 sm:ml-0 md:ml-auto lg:ml-auto xl:ml-auto
                         max-w-full xs:max-w-full sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                         bg-[#eeebe3]/95 xs:bg-[#eeebe3]/95 sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent
                         px-2 xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0
                         py-1 xs:py-2 sm:py-0 md:py-0 lg:py-0 xl:py-0
                         rounded-lg xs:rounded-lg sm:rounded-none md:rounded-none lg:rounded-none xl:rounded-none"
              style={{
                color: "#ca0013",
                lineHeight: "0.75",
                letterSpacing: "-0.05em",
              }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
              aria-label={`${t("contact.hero.opportunities")} ${t("contact.hero.for")} ${t("contact.hero.partnerships")}`}
            >
              {t("contact.hero.opportunities")}
              <br />
              {t("contact.hero.for")}
              <br />
              {t("contact.hero.partnerships")}
            </motion.h1>
          </motion.div>
        </div>

        <motion.div
          className="absolute z-20 bottom-6 right-3 xs:bottom-8 xs:right-4 sm:bottom-10 sm:right-6 md:bottom-8 md:right-12 lg:bottom-12 lg:right-16 xl:bottom-16 xl:right-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link
            href="#partnerships"
            className="group relative block w-[120px] xs:w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-lg"
            aria-label={t("contact.hero.goToPartnerships")}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-6, -8, -6] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/images/bigv.png"
                alt=""
                width={500}
                height={500}
                className="object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-3 left-16 xs:-bottom-4 xs:left-18 sm:-bottom-4 sm:left-20 md:bottom-0 md:left-22 lg:left-24 xl:left-25 w-[75%]"
                animate={{ y: [0, -15, 0], rotate: [6, 8, 6] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src="/images/littlev.png"
                  alt=""
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
