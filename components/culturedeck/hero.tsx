"use client"

import { motion } from "motion/react"
import { useLanguage } from "../../lib/language-context"

export function CultureDeckHero() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="md:text-center mb-16 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-7xl md:text-8xl lg:text-9xl font-black text-[#1a1a1a] mb-6 leading-none tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("culturedeck.title")}
      </motion.h1>

      <motion.p
        className="text-3xl md:text-4xl text-[#ca0013] font-bold mb-8 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("culturedeck.subtitle")}
      </motion.p>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a]/80 leading-relaxed font-medium md:tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {t("culturedeck.description")}
      </motion.p>
    </motion.div>
  )
}
