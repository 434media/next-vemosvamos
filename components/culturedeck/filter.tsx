"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useState, useRef } from "react"
import Image from "next/image"
import type { CardType } from "../../lib/types/culturedeck"

interface CardTypeInfo {
  type: CardType | "all"
  label: string
  description: string
  icon: string
  image: string
}

interface CultureDeckFilterProps {
  cardTypes: CardTypeInfo[]
  selectedFilter: CardType | "all"
  onFilterChange: (filter: CardType | "all") => void
  filterLabel: string
  clearFiltersLabel: string
}

export function CultureDeckFilter({
  cardTypes,
  selectedFilter,
  onFilterChange,
}: CultureDeckFilterProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const handleFilterChange = (type: CardType | "all") => {
    onFilterChange(type)
  }

  return (
    <div ref={containerRef} className="absolute inset-x-0 top-[75vh] md:top-[80vh] z-30 pointer-events-none">
      <motion.div
        className="w-full h-[15vh] md:h-[20vh]"
        style={{ y, opacity, scale }}
      >
        {/* Deck Layout: Tight card spacing like real playing cards */}
        <div className="relative w-full h-full">
          {/* Desktop Layout Only - Centered Fan Formation */}
          <div className="w-full h-full relative">
            {cardTypes.map((cardType, index) => {
              const totalCards = cardTypes.length
              const middleIndex = (totalCards - 0) / 2
              const offset = index - middleIndex
              // Tighter centering calculation
              const spacingBetweenCards = 7 // 8% spacing between cards
              const cardPosition = 50 + (offset * spacingBetweenCards) // Center at 50% with tight spacing
              const rotation = offset * 8 // 8 degree fan spread
              
              return (
                <motion.button
                  key={`desktop-${cardType.type}`}
                  onClick={() => handleFilterChange(cardType.type)}
                  onHoverStart={() => setHoveredCard(cardType.type)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`absolute pointer-events-auto transition-all duration-300 ${
                    selectedFilter === cardType.type ? "z-20" : "z-10"
                  } ${hoveredCard === cardType.type ? "z-30" : ""}`}
                  style={{
                    left: `${cardPosition}%`,
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotate: rotation + 180
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: selectedFilter === cardType.type ? 1.1 : 1,
                    rotate: rotation
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: selectedFilter === cardType.type ? 1.15 : 1.05,
                    rotate: rotation * 0.5,
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Overlay Card Design with Image Support */}
                  <div className={`
                    w-24 h-32 lg:w-28 lg:h-36
                    bg-white rounded-lg shadow-xl
                    transition-all duration-300 transform-gpu
                    overflow-hidden
                    ${selectedFilter === cardType.type 
                      ? "ring-3 ring-[#ca0013] shadow-2xl shadow-[#ca0013]/30" 
                      : "ring-1 ring-black/20 hover:ring-[#ca0013]/50 hover:shadow-xl"
                    }
                  `}>
                    {/* Card Image or Icon */}
                    <div className="h-full w-full relative">
                      {cardType.image ? (
                        <Image
                          src={cardType.image}
                          alt={cardType.label}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
                          <span className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                            selectedFilter === cardType.type ? "text-[#ca0013]" : "text-black/70"
                          }`}>
                            {cardType.icon}
                          </span>
                        </div>
                      )}
                      
                      {/* Card Overlay */}
                      <div className={`absolute inset-0 transition-colors duration-300 ${
                        selectedFilter === cardType.type 
                          ? "bg-gradient-to-t from-[#ca0013]/90 via-[#ca0013]/20 to-transparent" 
                          : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                      }`} />
                      
                      {/* Card Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <div className={`text-[10px] font-bold uppercase tracking-wider text-center ${
                          selectedFilter === cardType.type ? "text-white" : "text-white"
                        }`}>
                          {cardType.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
