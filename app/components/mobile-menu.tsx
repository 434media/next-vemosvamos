"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"
import { Newsletter } from "./newsletter"

interface MobileMenuProps {
  onClose: () => void
}

interface Heart {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hearts, setHearts] = useState<Heart[]>([])

  // Language content
  const content = {
    letsConnect: "Let's Connect",
    followUs: "FOLLOW US",
    getInTouch: "GET IN TOUCH",
    contactDescription: "We'd love to hear from you. Fill out the form below and we'll get back to you soon.",
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generate floating hearts
  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = []
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 25 + 12,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 15,
          opacity: Math.random() * 0.25 + 0.08,
        })
      }
      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  const socialLinks = [
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      url: "https://www.instagram.com/vemos.vamos/",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      url: "https://www.linkedin.com/company/vemosvamos/",
      color: "#0077B5",
    },
    {
      name: "Facebook",
      icon: "ri-facebook-fill",
      url: "https://www.facebook.com/vemosvamos",
      color: "#1877F2",
    },
  ]

  return (
    <motion.div
      className="fixed inset-0 flex flex-col overflow-hidden z-[60]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      style={{
        background: `
          radial-gradient(circle at 20% 20%, #8b000060 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #ffc85760 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #2a9d8f60 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, #26465360 0%, transparent 50%)
        `,
        backgroundColor: "#1A1A1A",
        backgroundSize: "300% 300%",
      }}
    >
      {/* Animated background gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        animate={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 0, 0, 0.4) 0%, rgba(26, 26, 26, 0) 40%),
            radial-gradient(circle at ${100 - mousePosition.x / 10}% ${100 - mousePosition.y / 10}%, rgba(255, 200, 87, 0.3) 0%, rgba(26, 26, 26, 0) 50%)
          `,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[#8b0000]"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(heart.id) * 50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              delay: heart.delay,
              duration: heart.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              delay: Math.random() * 3,
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Header with Logo and Close Button - Fixed */}
      <motion.div
        className="flex justify-between items-center p-4 md:p-6 flex-shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/" onClick={onClose} className="text-white hover:text-white/80 transition-colors">
          <span className="sr-only">Vemos Vamos</span>
          <motion.svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-10 md:h-10"
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        </Link>
        <motion.button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-close-line text-2xl md:text-3xl" />
        </motion.button>
      </motion.div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
        <div className="min-h-full flex items-start justify-center px-4 py-4">
          <div className="w-full max-w-md mx-auto space-y-8 md:space-y-10">
            {/* Newsletter Section */}
            <motion.div
              className="text-center space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 0, 0, 0.5)",
                      "0 0 20px rgba(139, 0, 0, 0.8)",
                      "0 0 10px rgba(139, 0, 0, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {content.getInTouch}
                </motion.h2>
                <motion.p
                  className="text-white/80 text-base md:text-lg leading-relaxed px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {content.contactDescription}
                </motion.p>
              </motion.div>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#8b0000] via-[#ffc857] to-[#2a9d8f] rounded-lg blur opacity-30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
                  <Newsletter currentLanguage="en" />
                </div>
              </motion.div>
            </motion.div>

            {/* Visual separator */}
            <motion.div
              className="flex items-center justify-center py-2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-3/4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              className="text-center space-y-4 md:space-y-6 pb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(42, 157, 143, 0.5)",
                    "0 0 20px rgba(42, 157, 143, 0.8)",
                    "0 0 10px rgba(42, 157, 143, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                {content.followUs}
              </motion.h2>

              <div className="flex justify-center space-x-6 md:space-x-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-white/80 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.1 }}
                  >
                    <motion.div
                      className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                      whileHover={{
                        backgroundColor: link.color,
                        borderColor: link.color,
                        boxShadow: `0 0 30px ${link.color}80`,
                        transition: { duration: 0.3 },
                      }}
                      animate={{
                        boxShadow: [`0 0 0px ${link.color}00`, `0 0 15px ${link.color}40`, `0 0 0px ${link.color}00`],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <i className={`${link.icon} text-xl md:text-2xl`}></i>

                      {/* Floating hearts around social icons */}
                      <motion.div
                        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-[#8b0000] text-xs"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3,
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                    <span className="text-xs md:text-sm font-medium mt-2 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements - Fixed position */}
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#8b0000]/20 to-[#ffc857]/20 blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-[#2a9d8f]/20 to-[#264653]/20 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.div>
  )
}
