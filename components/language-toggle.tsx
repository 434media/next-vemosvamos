"use client"

import { motion, AnimatePresence } from "motion/react"
import { useLanguage } from "../lib/language-context"
import { useState } from "react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const [isSpinning, setIsSpinning] = useState(false)

  const handleToggle = () => {
    setIsSpinning(true)
    toggleLanguage()
    setTimeout(() => setIsSpinning(false), 800)
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-visible group flex-shrink-0"
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: 180,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{
          opacity: 1,
          rotate: isSpinning ? [0, 360] : 0,
          scale: 1,
        }}
        transition={{
          delay: 0.6,
          duration: isSpinning ? 0.8 : 0.6,
          ease: isSpinning ? "easeInOut" : "easeOut",
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, 15, -15, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      >
        <img
          src={
            language === "en"
              ? "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/chat-bubble"
              : "https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/boxing-glove"
          }
          alt=""
          className={`w-full h-auto object-contain transition-all duration-500 ${
            language === "en" ? "drop-shadow-sm scale-125 -ml-1" : "drop-shadow-sm scale-200"
          }`}
          style={{
            filter:
              language === "en"
                ? "drop-shadow(0 1px 2px rgba(60, 59, 110, 0.3))"
                : "drop-shadow(0 1px 2px rgba(0, 104, 71, 0.3))",
          }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center text-white shadow-md ${
            language === "en"
              ? "bg-gradient-to-br from-[#B22234] to-[#3C3B6E]" // USA gradient
              : "bg-gradient-to-br from-[#006847] to-[#CE1126]" // Mexico gradient
          }`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        >
          {language === "en" ? "EN" : "ES"}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className={`absolute inset-0 rounded-full blur-md ${
          language === "en"
            ? "bg-gradient-to-r from-[#B22234]/30 to-[#3C3B6E]/30"
            : "bg-gradient-to-r from-[#006847]/30 to-[#CE1126]/30"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: [1, 1.3, 1.1],
          opacity: [0.8, 1, 0.9],
          transition: { duration: 0.3 },
        }}
      />

      <AnimatePresence>
        {isSpinning && (
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${
              language === "en"
                ? "border-[#3C3B6E]" // USA blue
                : "border-[#CE1126]" // Mexico red
            }`}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.8, opacity: 0 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          language === "en"
            ? "bg-[#3C3B6E]" // USA blue
            : "bg-[#006847]" // Mexico green
        }`}
        initial={{ y: 5, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {language === "en" ? "Español" : "English"}
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent ${
            language === "en"
              ? "border-t-[#3C3B6E]" // USA blue
              : "border-t-[#006847]" // Mexico green
          }`}
        />
      </motion.div>
    </motion.button>
  )
}
