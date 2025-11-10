"use client"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useLanguage } from "../../lib/language-context"
import type { CardType } from "../../lib/types/culturedeck"

interface CardTypeInfo {
  type: CardType | "all"
  label: string
  description: string
  icon: string
  image: string
}

interface CultureDeckHeroProps {
  cardTypes?: CardTypeInfo[]
  selectedFilter?: CardType | "all"
  onFilterChange?: (filter: CardType | "all") => void
}

export function CultureDeckHero({ cardTypes, selectedFilter, onFilterChange }: CultureDeckHeroProps) {
  const { t } = useLanguage()
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isTooltipVisible && tooltipRef.current) {
      setHeight(tooltipRef.current.scrollHeight)
    }
  }, [isTooltipVisible])

  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!tooltipRef.current || !containerRef.current)
      return { x: mouseX + 12, y: mouseY + 12 }

    const tooltip = tooltipRef.current
    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const tooltipWidth = 280
    const tooltipHeight = tooltip.scrollHeight

    const absoluteX = containerRect.left + mouseX
    const absoluteY = containerRect.top + mouseY

    let finalX = mouseX + 12
    let finalY = mouseY + 12

    if (absoluteX + 12 + tooltipWidth > viewportWidth) {
      finalX = mouseX - tooltipWidth - 12
    }

    if (absoluteX + finalX < 0) {
      finalX = -containerRect.left + 12
    }

    if (absoluteY + 12 + tooltipHeight > viewportHeight) {
      finalY = mouseY - tooltipHeight - 12
    }

    if (absoluteY + finalY < 0) {
      finalY = -containerRect.top + 12
    }

    return { x: finalX, y: finalY }
  }

  const updateMousePosition = (mouseX: number, mouseY: number) => {
    setMouse({ x: mouseX, y: mouseY })
    const newPosition = calculatePosition(mouseX, mouseY)
    setPosition(newPosition)
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(true)
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    updateMousePosition(mouseX, mouseY)
  }

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 })
    setPosition({ x: 0, y: 0 })
    setIsTooltipVisible(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTooltipVisible) return
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    updateMousePosition(mouseX, mouseY)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = touch.clientX - rect.left
    const mouseY = touch.clientY - rect.top
    updateMousePosition(mouseX, mouseY)
    setIsTooltipVisible(true)
  }

  const handleTouchEnd = () => {
    // Keep tooltip open longer on mobile for better UX
    setTimeout(() => {
      setIsTooltipVisible(false)
      setMouse({ x: 0, y: 0 })
      setPosition({ x: 0, y: 0 })
    }, 4000) // Increased from 2000ms to 4000ms
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) {
      e.preventDefault()
      if (isTooltipVisible) {
        setIsTooltipVisible(false)
        setMouse({ x: 0, y: 0 })
        setPosition({ x: 0, y: 0 })
      } else {
        const rect = e.currentTarget.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        updateMousePosition(mouseX, mouseY)
        setIsTooltipVisible(true)
        // Auto-hide after longer duration on mobile
        setTimeout(() => {
          setIsTooltipVisible(false)
          setMouse({ x: 0, y: 0 })
          setPosition({ x: 0, y: 0 })
        }, 5000)
      }
    }
  }

  useEffect(() => {
    if (isTooltipVisible && tooltipRef.current) {
      const newPosition = calculatePosition(mouse.x, mouse.y)
      setPosition(newPosition)
    }
  }, [isTooltipVisible, height, mouse.x, mouse.y])

  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* Background Images - Full Viewport Coverage */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/desktop-shapes-black.png"
          alt=""
          fill
          className="hidden md:block object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Mobile Background */}
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-shapes-black.png"
          alt=""
          fill
          className="block md:hidden object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Enhanced overlay for mobile only */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/40 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent md:hidden" />
      </div>

      {/* Main Content - Viewport-Optimized Design */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 pt-20 sm:pt-24 md:pt-28 min-h-screen">
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center h-full justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Interactive Mood Board - Larger Size */}
          <div
            ref={containerRef}
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl aspect-[4/5] mx-auto cursor-pointer"
            style={{ maxHeight: 'min(75vh, 700px)' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={handleClick}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.2 }
              }}
            >
              <Image
                src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-The+Culture+Deck+-+Mood+Board.png"
                alt="Culture Deck Mood Board"
                fill
                className="object-contain rounded-lg transition-shadow duration-500 hover:shadow-lg"
                priority
                quality={95}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 75vw, (max-width: 1024px) 60vw, 50vw"
              />
            </motion.div>

            {/* Tooltip - Contains Title and Description */}
            <AnimatePresence>
              {isTooltipVisible && (
                <motion.div
                  key={String(isTooltipVisible)}
                  initial={{ height: 0, opacity: 0, scale: 0.9 }}
                  animate={{ height, opacity: 1, scale: 1 }}
                  exit={{ height: 0, opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="pointer-events-none absolute z-50 overflow-hidden rounded-xl border border-white/20 shadow-xl"
                  style={{
                    top: position.y,
                    left: position.x,
                    width: 'min(95%, 450px)',
                    maxWidth: '450px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  {/* Culture Deck Logo Background */}
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: 'url(https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/culture-deck-logo-large.png)',
                      backgroundSize: '80%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  <div
                    ref={tooltipRef}
                    className="p-6 text-center relative z-10"
                  >
                    <h1
                      className="text-xl sm:text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-4 relative z-20"
                      style={{
                        color: '#ca0013',
                        letterSpacing: '-0.02em',
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {t("culturedeck.subtitle")}
                    </h1>
                    
                    <p 
                      className="text-sm sm:text-base leading-relaxed font-medium relative z-20"
                      style={{
                        color: '#1a1a1a',
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {t("culturedeck.description")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interaction Hint */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-xs sm:text-sm text-[#1a1a1a]/50 font-medium tracking-wide hidden sm:block">
              Hover image to reveal details
            </p>
            <p className="text-xs sm:text-sm text-[#1a1a1a]/50 font-medium tracking-wide block sm:hidden">
              Tap image to reveal details
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
