"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "../../lib/language-context"

export function CultureDeckHero() {
  const { t } = useLanguage()

  return (
    <div className="relative h-[75vh] sm:h-[80vh] md:h-screen w-full flex flex-col">
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
        {/* Enhanced overlay for better text contrast - accessibility focused */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/40 md:bg-white/20" />
        {/* Additional text area shadows for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      </div>

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-4 sm:py-6 md:py-8">
        <motion.div
          className="text-center px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo - Larger on Mobile for Better Impact */}
          <motion.div
            className="mb-3 sm:mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Logo_Black.svg"
              alt="Culture Deck"
              width={800}
              height={240}
              className="mx-auto h-32 w-auto sm:h-36 md:h-40 lg:h-48 xl:h-56 drop-shadow-sm"
              priority
            />
          </motion.div>

          {/* Subtitle - Enhanced Contrast and Readability */}
          <div className="h-16 sm:h-18 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center px-2">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center leading-tight tracking-tight text-balance max-w-full"
              style={{
                color: '#ca0013',
                textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(255, 255, 255, 0.4)',
                lineHeight: '1.1',
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

          {/* Description - Enhanced Contrast and Readability */}
          <div className="h-20 sm:h-22 md:h-18 lg:h-22 xl:h-26 flex items-center justify-center px-2 mt-1 sm:mt-2 md:mt-3">
            <motion.p
              className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center max-w-4xl leading-tight tracking-tight"
              style={{
                color: '#1a1a1a',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(255, 255, 255, 0.6)',
                lineHeight: '1.2',
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

      {/* Filter Cards Teaser - Optimized for Mobile Visibility */}
      <div className="relative z-20 h-16 sm:h-18 md:h-20 flex items-center justify-center pb-3 sm:pb-4 md:pb-6">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Teaser Text - Enhanced Visibility */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div 
              className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50"
            >
              <p 
                className="text-xs sm:text-sm md:text-base font-black text-[#1a1a1a] uppercase tracking-wider"
                style={{
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                }}
              >
                {t("culturedeck.exploreBelow") || "Explore Articles Below"}
              </p>
            </div>
            <div className="w-8 h-0.5 bg-[#ca0013] mx-auto mt-2 shadow-sm"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
