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
  const [isMobileTooltipOpen, setIsMobileTooltipOpen] = useState(false)
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)
  const [touchStarted, setTouchStarted] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Touch/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0)
      
      if (isMobileDevice !== isMobile) {
        console.log('Mobile detection changed:', isMobileDevice)
        setIsMobile(isMobileDevice)
      }
    }
    
    // Initial check
    checkMobile()
    
    // Add event listeners
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [isMobile])

  // Loteria card images array
  const loteriaCards = [
    {
      id: 'el-corazon',
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Flavor.png',
      alt: 'El Corazón - Heart Card'
    },
    {
      id: 'la-estrella', 
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Insight.png',
      alt: 'La Estrella - Star Card'
    },
    {
      id: 'el-sol',
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Movimiento.png', 
      alt: 'El Sol - Sun Card'
    },
    {
      id: 'la-luna',
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Podcast.png',
      alt: 'La Luna - Moon Card'
    },
    {
      id: 'el-mundo',
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Takeaway.png',
      alt: 'El Mundo - World Card'
    },
    {
      id: 'la-vida',
      src: 'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Tendencia.png',
      alt: 'La Vida - Life Card'
    }
  ]

  useEffect(() => {
    if ((isTooltipVisible || isMobileTooltipOpen) && tooltipRef.current) {
      setHeight(tooltipRef.current.scrollHeight)
    }
  }, [isTooltipVisible, isMobileTooltipOpen])

  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!tooltipRef.current || !containerRef.current)
      return { x: mouseX + 12, y: mouseY + 12 }

    const tooltip = tooltipRef.current
    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const tooltipWidth = 450 // Updated to match actual tooltip width
    const tooltipHeight = tooltip.scrollHeight

    const absoluteX = containerRect.left + mouseX
    const absoluteY = containerRect.top + mouseY

    let finalX = mouseX + 12
    let finalY = mouseY + 12

    // Check if tooltip goes beyond right edge
    if (absoluteX + 12 + tooltipWidth > viewportWidth) {
      finalX = mouseX - tooltipWidth - 12
    }

    // Check if tooltip goes beyond left edge
    if (absoluteX + finalX < 0) {
      finalX = -containerRect.left + 12
    }

    // Check if tooltip goes beyond bottom edge
    if (absoluteY + 12 + tooltipHeight > viewportHeight) {
      finalY = mouseY - tooltipHeight - 12
    }

    // Check if tooltip goes beyond top edge
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
    if (!containerRef.current) return
    
    // Calculate mouse position relative to the main container, not the individual card
    const containerRect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - containerRect.left
    const mouseY = e.clientY - containerRect.top
    updateMousePosition(mouseX, mouseY)
  }

  const handleMouseLeave = () => {
    setIsTooltipVisible(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTooltipVisible || !containerRef.current) return
    
    // Calculate mouse position relative to the main container, not the individual card
    const containerRect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - containerRect.left
    const mouseY = e.clientY - containerRect.top
    updateMousePosition(mouseX, mouseY)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStarted(true)
    console.log('Touch started, isMobile:', isMobile)
    
    if (isMobile) {
      // Set touch position
      const touch = e.touches[0]
      if (touch) {
        setMouse({ x: touch.clientX, y: touch.clientY })
      }
    }
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('Touch ended, touchStarted:', touchStarted, 'isMobile:', isMobile)
    
    if (touchStarted && isMobile) {
      e.preventDefault() // Prevent click from firing
      e.stopPropagation()
      
      // Toggle tooltip using mobile state
      setIsMobileTooltipOpen(prev => !prev)
      console.log('Tooltip toggled via touch')
    }
    
    // Reset touch state after a short delay
    setTimeout(() => setTouchStarted(false), 100)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Click event, touchStarted:', touchStarted, 'isMobile:', isMobile)
    
    // Only handle click if it's not from a touch event and not on mobile
    if (!touchStarted && !isMobile) {
      setIsTooltipVisible(prev => !prev)
      setMouse({ x: e.clientX, y: e.clientY })
      console.log('Tooltip toggled via click')
    }
  }

  useEffect(() => {
    if (isTooltipVisible && tooltipRef.current) {
      const newPosition = calculatePosition(mouse.x, mouse.y)
      setPosition(newPosition)
    }
  }, [isTooltipVisible, height, mouse.x, mouse.y])

  // Handle mobile tooltip close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMobileTooltipOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsMobileTooltipOpen(false)
      }
    }

    if (isMobileTooltipOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileTooltipOpen])

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

      {/* Main Content - Star Wars Crawl Style Layout */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start py-4 sm:py-6 md:py-8 pt-16 sm:pt-20 md:pt-24 min-h-screen">
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Culture Deck Logo at Top - The "Death Star" */}
          <motion.div
            className="mb-6 sm:mb-8 z-20 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Logo_Black.svg"
                alt="Culture Deck Logo"
                width={200}
                height={80}
                className="w-48 md:w-80 h-auto object-contain relative z-10"
                priority
                quality={90}
              />
            </div>
          </motion.div>

          {/* Star Wars Crawl - Cards Feed Into Logo */}
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl sm:max-w-5xl md:max-w-6xl overflow-hidden -mt-16 md:-mt-20"
            style={{ 
              height: 'min(80vh, 650px)',
              perspective: '1200px',
              perspectiveOrigin: 'center top',
              ...(isMobile && {
                WebkitTransform: 'translateZ(0)',
                WebkitPerspective: '1200px',
                WebkitBackfaceVisibility: 'hidden'
              })
            }}
          >
            {/* 3D Container with enhanced tilt */}
            <div
              key={`animation-container-${isMobile ? 'mobile' : 'desktop'}`}
              className="relative w-full h-full"
              style={{
                transform: 'rotateX(35deg) translateZ(0)',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              {/* Column 1 - Scrolls UP toward logo */}
              <motion.div
                className="absolute left-0 w-1/3 h-full flex flex-col overflow-hidden px-1"
                style={{ 
                  top: 0,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: "-100%" }}
                  animate={{
                    y: ["-100%", "-200%"]
                  }}
                  transition={{
                    duration: isMobile ? 30 : 20, // Slower: 30s mobile, 20s desktop
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0
                  }}
                  style={{
                    height: isMobile ? "700%" : "500%", // Even taller for mobile
                    gap: isMobile ? "0.75rem" : "1.5rem", // Tighter spacing
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  {[...Array(isMobile ? 16 : 8)].map((_, setIndex) => 
                    loteriaCards.slice(0, 2).map((card, cardIndex) => (
                      <motion.div
                        key={`col1-${setIndex}-${card.id}`}
                        className="relative cursor-pointer group flex-shrink-0 w-full max-w-[200px]"
                        style={{ 
                          aspectRatio: '4/5', // Exact 4:5 aspect ratio
                          transform: 'rotateX(-35deg) translateZ(20px)', // Counter the container rotation
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onClick={handleClick}
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: 5,
                          translateZ: 40,
                          transition: { duration: 0.3 },
                          zIndex: 30
                        }}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0,
                          ease: "easeOut" 
                        }}
                      >
                        {/* Card with no excess borders/shadows */}
                        <div className="relative w-full h-full rounded-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                          <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            className="object-cover"
                            priority={true}
                            quality={95}
                            sizes="(max-width: 640px) 25vw, 20vw"
                          />
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </motion.div>

              {/* Column 2 - Scrolls DOWN away from logo */}
              <motion.div
                className="absolute left-1/3 w-1/3 h-full flex flex-col overflow-hidden px-1"
                style={{ 
                  top: 0,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: "-100%" }}
                  animate={{
                    y: ["-100%", "0%"]
                  }}
                  transition={{
                    duration: isMobile ? 30 : 20, // Slower: 30s mobile, 20s desktop
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0
                  }}
                  style={{
                    height: isMobile ? "700%" : "500%", // Even taller for mobile
                    gap: isMobile ? "0.75rem" : "1.5rem", // Tighter spacing
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)' // Normal direction, opposite range
                  }}
                >
                  {[...Array(isMobile ? 16 : 8)].map((_, setIndex) => 
                    loteriaCards.slice(2, 4).map((card, cardIndex) => (
                      <motion.div
                        key={`col2-${setIndex}-${card.id}`}
                        className="relative cursor-pointer group flex-shrink-0 w-full max-w-[200px]"
                        style={{ 
                          aspectRatio: '4/5', // Exact 4:5 aspect ratio
                          transform: 'rotateX(-35deg) translateZ(20px)', // Counter the container rotation
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onClick={handleClick}
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: -5,
                          translateZ: 40,
                          transition: { duration: 0.3 },
                          zIndex: 30
                        }}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0,
                          ease: "easeOut" 
                        }}
                      >
                        {/* Card with no excess borders/shadows */}
                        <div className="relative w-full h-full rounded-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                          <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            className="object-cover"
                            priority={true}
                            quality={95}
                            sizes="(max-width: 640px) 25vw, 20vw"
                          />
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </motion.div>

              {/* Column 3 - Scrolls UP toward logo */}
              <motion.div
                className="absolute right-0 w-1/3 h-full flex flex-col overflow-hidden px-1"
                style={{ 
                  top: 0,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: "-100%" }}
                  animate={{
                    y: ["-100%", "-200%"]
                  }}
                  transition={{
                    duration: isMobile ? 30 : 20, // Slower: 30s mobile, 20s desktop
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0
                  }}
                  style={{
                    height: isMobile ? "700%" : "500%", // Even taller for mobile
                    gap: isMobile ? "0.75rem" : "1.5rem", // Tighter spacing
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  {[...Array(isMobile ? 16 : 8)].map((_, setIndex) => 
                    loteriaCards.slice(4, 6).map((card, cardIndex) => (
                      <motion.div
                        key={`col3-${setIndex}-${card.id}`}
                        className="relative cursor-pointer group flex-shrink-0 w-full max-w-[200px]"
                        style={{ 
                          aspectRatio: '4/5', // Exact 4:5 aspect ratio
                          transform: 'rotateX(-35deg) translateZ(20px)', // Counter the container rotation
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onClick={handleClick}
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: -5,
                          translateZ: 40,
                          transition: { duration: 0.3 },
                          zIndex: 30
                        }}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0,
                          ease: "easeOut" 
                        }}
                      >
                        {/* Card with no excess borders/shadows */}
                        <div className="relative w-full h-full rounded-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                          <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            className="object-cover"
                            priority={true}
                            quality={95}
                            sizes="(max-width: 640px) 25vw, 20vw"
                          />
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop Hover Tooltip */}
            <AnimatePresence>
              {isTooltipVisible && !window.matchMedia("(hover: none)").matches && (
                <motion.div
                  key="desktop-tooltip"
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

          {/* Mobile Centered Tooltip */}
          <AnimatePresence>
            {isMobileTooltipOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 z-40"
                  onClick={() => setIsMobileTooltipOpen(false)}
                />
                
                {/* Centered Tooltip */}
                <motion.div
                  key="mobile-tooltip"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-hidden rounded-xl border border-white/20 shadow-xl mx-4"
                  style={{
                    width: 'min(90vw, 400px)',
                    maxWidth: '400px',
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
                  
                  <div className="p-6 text-center relative z-10">
                    <h1
                      className="text-2xl font-black leading-[1.2] tracking-tight mb-4 relative z-20"
                      style={{
                        color: '#ca0013',
                        letterSpacing: '-0.02em',
                        textShadow: '0 2px 4px rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {t("culturedeck.subtitle")}
                    </h1>
                    
                    <p 
                      className="text-base leading-relaxed font-medium relative z-20 mb-4"
                      style={{
                        color: '#1a1a1a',
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {t("culturedeck.description")}
                    </p>

                    <button
                      onClick={() => setIsMobileTooltipOpen(false)}
                      className="px-4 py-2 bg-[#ca0013] text-white rounded-lg font-medium text-sm hover:bg-[#b00012] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

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
              {isMobile ? 'Tap any card to reveal details' : 'Tap image to reveal details'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
