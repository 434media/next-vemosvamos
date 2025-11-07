"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "../../lib/language-context"

export function CultureDeckHero() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Images - Full Viewport Coverage */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/desktop-shapes.png"
          alt=""
          fill
          className="hidden md:block object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Mobile Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-shapes.png"
          alt=""
          fill
          className="block md:hidden object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/15" />
      </div>

      {/* Content - Mobile First Maximized */}
      <motion.div
        className="relative z-10 text-center px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-6xl mx-auto py-6 sm:py-12 md:py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo - Mobile Optimized */}
        <motion.div
          className="mb-3 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/culturedeck.png"
            alt="Culture Deck"
            width={600}
            height={180}
            className="mx-auto h-28 w-auto sm:h-32 md:h-40 lg:h-48 xl:h-56"
            priority
          />
        </motion.div>

        {/* Subtitle as H1 - Desktop Single Line Optimized */}
        <motion.h1
          className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-[#ca0013] mb-2 sm:mb-4 md:mb-6 leading-tight tracking-tight w-full mx-auto"
          style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {t("culturedeck.subtitle")}
        </motion.h1>

        {/* Description - Mobile Maximized */}
        <motion.p
          className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1a1a1a] leading-tight sm:leading-snug md:leading-normal font-medium max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {t("culturedeck.description")}
        </motion.p>
      </motion.div>
    </div>
  )
}
