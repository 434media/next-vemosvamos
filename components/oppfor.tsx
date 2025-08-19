"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export default function Partnerships() {
  const { t } = useLanguage()

  const offerings = [
    {
      titleKey: "partnerships.brandedContent.title",
      descriptionKey: "partnerships.brandedContent.description",
      align: "left" as const,
      delay: 0,
    },
    {
      titleKey: "partnerships.communityActivations.title",
      descriptionKey: "partnerships.communityActivations.description",
      align: "left" as const,
      delay: 0.2,
    },
    {
      titleKey: "partnerships.bilingualBrand.title",
      descriptionKey: "partnerships.bilingualBrand.description",
      align: "right" as const,
      delay: 0.4,
    },
    {
      titleKey: "partnerships.culturalInsights.title",
      descriptionKey: "partnerships.culturalInsights.description",
      align: "right" as const,
      delay: 0.6,
    },
  ]

  return (
    <section id="partnerships" className="w-full bg-[#ca0013] py-14 md:py-24 px-4 md:px-10 relative overflow-visible">
      {/* === FLOWER IMAGE - TRANSITION ELEMENT === */}
      {/* Desktop: top left, extending out */}
      <motion.div
        className="hidden md:block absolute -top-48 right-4 z-20 pointer-events-none"
        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/flower.png"
          alt=""
          width={600}
          height={600}
          className="object-cover opacity-90"
          priority
        />
      </motion.div>

      {/* Mobile: top left, extending out */}
      <motion.div
        className="md:hidden absolute -top-20 -right-24 z-20 pointer-events-none"
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/flower.png"
          alt=""
          width={300}
          height={300}
          className="object-cover opacity-90"
          priority
        />
      </motion.div>

      {/* SECTION HEADER */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <motion.h2
          className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase font-inter tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t("partnerships.title")}
        </motion.h2>
        <motion.div
          className="mx-auto h-1 bg-white w-16 md:w-32 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "auto", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* === TWO COLUMN LAYOUT === */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 w-full z-10 max-w-7xl mx-auto">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 text-left">
          {offerings
            .filter((item) => item.align === "left")
            .map((item) => (
              <motion.article
                key={item.titleKey}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase font-inter tracking-tight leading-tight mb-3">
                  {t(item.titleKey)}
                </h3>

                <motion.div
                  className="h-0.5 bg-white mt-2 w-full rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 font-medium uppercase max-w-md leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
              </motion.article>
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 text-right">
          {offerings
            .filter((item) => item.align === "right")
            .map((item) => (
              <motion.article
                key={item.titleKey}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase font-inter tracking-tight leading-tight mb-3">
                  {t(item.titleKey)}
                </h3>

                <motion.div
                  className="h-0.5 bg-white mt-2 ml-auto w-full rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay + 0.1,
                    ease: "easeOut",
                  }}
                />

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 font-medium uppercase max-w-md ml-auto leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  )
}
