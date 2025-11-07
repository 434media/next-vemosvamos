"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "../../lib/language-context"

export function CultureDeckHero() {
  const { t } = useLanguage()

  return (
    <div className="relative h-screen w-full flex flex-col">
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

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <motion.div
          className="text-center px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo - Significantly Larger on Mobile */}
          <motion.div
            className="mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/culturedeck.png"
              alt="Culture Deck"
              width={700}
              height={210}
              className="mx-auto h-36 w-auto sm:h-40 md:h-44 lg:h-52 xl:h-60"
              priority
            />
          </motion.div>

          {/* Subtitle - Stable Layout Typography */}
          <div className="h-20 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center px-2">
            <motion.h1
              className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#ca0013] text-center leading-none tracking-tighter text-balance max-w-full"
              style={{
                lineHeight: '1.0',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-line'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {t("culturedeck.subtitle")}
            </motion.h1>
          </div>

          {/* Description - Stable Layout Typography */}
          <div className="h-24 md:h-20 lg:h-24 xl:h-28 flex items-center justify-center px-2 mt-2 md:mt-4">
            <motion.p
              className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#1a1a1a] font-semibold text-center max-w-4xl leading-tight tracking-tight md:tracking-normal"
              style={{
                lineHeight: '1.1',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-line'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {t("culturedeck.description")}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Filter Cards Teaser - Bottom Section */}
      <div className="relative z-20 h-20 md:h-20 flex items-end pb-6 md:pb-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Teaser Text */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm sm:text-base font-semibold text-[#1a1a1a] uppercase tracking-wider">
              Explore Articles Below
            </p>
            <div className="w-12 h-0.5 bg-[#ca0013] mx-auto mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
