"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LanguageToggle } from "./language-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#eeebe3]/85 backdrop-blur-md border-b border-[#0d1f2d]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark — Fraunces serif. Plain home link. */}
          <Link
            href="/"
            aria-label="Vemos Vamos home"
            className="group inline-flex items-center"
          >
            <span
              className="font-serif font-black text-[#0d1f2d] hover:text-[#ca0013]
                         text-xl sm:text-2xl md:text-[26px]
                         leading-none tracking-[-0.02em]
                         transition-colors duration-200"
              style={{ fontVariationSettings: '"SOFT" 50' }}
            >
              Vemos Vamos
            </span>
          </Link>

          {/* Language toggle */}
          <div className="flex items-center shrink-0">
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
