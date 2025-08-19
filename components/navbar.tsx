"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { LanguageToggle } from "./language-toggle"

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
          scrolled ? "bg-[#ca0013]/90 backdrop-blur-md" : "bg-[#ca0013]"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[80px] md:h-[76px]">
            <MotionLink
              href="/"
              className="flex items-center h-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/dice1.png"
                  alt="Vemos Vamos Logo"
                  width={80}
                  height={80}
                  className="w-24 h-24 object-contain invert"
                />
              </motion.div>
            </MotionLink>

            <div className="flex items-center">
              <LanguageToggle />

              <motion.button
                className="relative w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-2 overflow-hidden group shrink-0"
                onClick={onOpenMenu}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, -5, 0],
                  transition: {
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.6, ease: "easeInOut" },
                  },
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
                  delay: 0.5,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-white via-[#ffc857] to-white"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-white rounded-full" />
                </motion.div>

                <motion.div
                  className="relative w-full h-full z-10"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 10, -10, 5, 0],
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                >
                  <Image
                    src="/images/logotilt.png"
                    alt="Vemos Vamos Menu"
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                    sizes="48px"
                    priority
                  />
                </motion.div>

                {/* Animated ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50 z-20"
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

                {/* Hover ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white opacity-0 z-20"
                  whileHover={{
                    scale: [1, 1.3, 1.1],
                    opacity: [0, 0.8, 0.4],
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                />

                {/* Subtle pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-[#ffc857]/30 blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                  whileHover={{
                    scale: [1, 1.2, 1.1],
                    opacity: [0.6, 1, 0.8],
                    transition: { duration: 0.4 },
                  }}
                />

                {/* Floating hearts on hover */}
                <motion.div className="absolute inset-0 pointer-events-none" whileHover="hover" initial="initial">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white text-xs"
                      style={{
                        left: `${20 + ((i * 60) % 80)}%`,
                        top: `${20 + ((i * 40) % 60)}%`,
                      }}
                      variants={{
                        initial: {
                          opacity: 0,
                          scale: 0,
                          y: 0,
                          rotate: 0,
                        },
                        hover: {
                          opacity: [0, 1, 0],
                          scale: [0, 1.2, 0],
                          y: [0, -20, -40],
                          rotate: [0, 180, 360],
                          transition: {
                            duration: 1.2,
                            delay: i * 0.1,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Sparkle effects on hover */}
                <motion.div className="absolute inset-0 pointer-events-none" whileHover="hover" initial="initial">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${10 + ((i * 80) % 90)}%`,
                        top: `${10 + ((i * 70) % 80)}%`,
                      }}
                      variants={{
                        initial: {
                          opacity: 0,
                          scale: 0,
                          rotate: 0,
                        },
                        hover: {
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          rotate: [0, 180],
                          transition: {
                            duration: 0.8,
                            delay: i * 0.05,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
