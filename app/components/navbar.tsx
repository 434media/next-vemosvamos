"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useState, useEffect } from "react"

const MotionLink = motion(Link)

interface NavbarProps {
  onOpenMenu: () => void
}

export function Navbar({ onOpenMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#ECEBE0]/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <MotionLink
              href="/"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#8b0000] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
              <span className="font-semibold text-xl">Vemos Vamos</span>
            </MotionLink>
          </div>
        </nav>
      </motion.header>

      {/* Fixed menu button with introduction animation */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#8b0000] to-[#a50000] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        onClick={onOpenMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{
          opacity: 0,
          scale: 0,
          x: 100,
          y: 100,
          rotate: 180,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 2.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Animated ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            delay: 2.5,
            duration: 1,
            ease: "easeOut",
          }}
        />
      </motion.button>
    </>
  )
}
