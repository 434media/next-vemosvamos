"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
  skills: string[]
  quote: string
  philosophy: string
  workUrl?: string
}

const floatingImages = [
  "/images/deco1.png",
  "/images/VV_Sucker_logo.png",
  "/images/deco3.jpg",
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Stacy Carrizales",
    role: "Creative Director & Content Creator ",
    description:
      "Stacy Carrizales is a bilingual digital creator, marketing strategist, and proud San Antonio native with over seven years of experience in social media and brand storytelling. She began her journey through her Instagram handle @strawberry.stacyy, where her “come with me” videos gained viral attention for their approachable, community-centered style. Her platform evolved into Vemos Vamos, a bilingual media space she founded to help entrepreneurs especially Latine creators turn passion into profit through culturally resonant, accessible content.",
    image: "/images/stacyheadshot.jpg",
    skills: ["Brand Strategy", "Creative Direction", "Visual Design"],
    quote: "Great design isn't just about making things look beautiful—it's about making ideas feel inevitable.",
    philosophy: "Every brand has a unique story waiting to be told through thoughtful design and genuine creativity.",
    workUrl: "https://www.instagram.com/vemos.vamos/",
  },
  {
    id: 2,
    name: "Diana García",
    role: "Graphic Designer & Branding",
    description:
    "Diana García is a bilingual brand strategist, creative director, and Owner of Veintidós Studios (22 Studios). After four years sharpening her skills at a top Denver agency in Denver, she launched 22 Studios to help entrepreneurs build their dream brands—blending authentic storytelling, vibrant design, and community‑driven insights. Since founding her studio, Diana has partnered with everyone from wellness studios to tech startups and nonprofits, crafting eye‑catching identity systems, packaging, and social campaigns that elevate brand visibility, engage communities, and spark meaningful connections.",
    image: "/images/diana.jpeg",
    skills: ["Connecting", "Strategist", "Storytelling"],
    quote: "I am thrilled to join forces with Vemos Vamos to spotlight fellow Latino creators and entrepreneurs.",
    philosophy: "Diana looks forward to sharing her passion for culturally resonant branding, swapping insights with bilingual peers, and inspiring brands to bridge cultures with warmth, playfulness, and expert precision.",
    workUrl: "https://www.dianagrc.com/?fbclid=PAZXh0bgNhZW0CMTEAAacGgpAMQf6lQdkUHc29jT-FqOBJDkmSAQiBF0FM3cHXB2B2jHA-BHGb302HMQ_aem_QOOTCZIdIWIRMVLr6S4FAg",
  },
  {
    id: 3,
    name: "Arely Reyes",
    role: "Graphic Designer & Content Creator",
    description:
    "Arely Reyes, a first-generation student from Galveston, Texas, is a digital marketing major at St. Mary's University. Deeply committed to service, she's active in the Marianist Leadership Program and previously advocated for first-generation students through TRiO. Her graphic design internship at VelocityTX fueled her entrepreneurial interest, aiming for a post-graduate career in graphic design with a focus on bilingual content. A passionate Mariachi performer and former president, Arely values cultural connection and plans to join the Marianist PULSE program after graduation.",
    image: "/images/arely.jpeg",
    skills: ["Graphic Design", "Advocacy", "Cultural Connection"],
    quote: "From advocating for first-generation students to embracing my cultural heritage through Mariachi, my time at St. Mary's has prepared me to make a meaningful impact.",
    philosophy: "Every interaction is an opportunity to create joy and solve problems for real people.",
    workUrl: "https://reyes-portfolio.my.canva.site/portfolio-website",
  },
]

interface TeamCarouselProps {
  language: "en" | "es"
}

export default function TeamCarousel({ language }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, currentIndex])

  const handleTransition = (newIndex: number, transitionDirection: "next" | "prev") => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setDirection(transitionDirection)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Start transition
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(newIndex)

      // End transition after content change
      setTimeout(() => {
        setIsTransitioning(false)
        setDirection(null)
      }, 50)
    }, 300)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length
    handleTransition(newIndex, "prev")
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % teamMembers.length
    handleTransition(newIndex, "next")
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return

    const transitionDirection = index > currentIndex ? "next" : "prev"
    handleTransition(index, transitionDirection)
    setIsAutoPlaying(false)
  }

  const currentPerson = teamMembers[currentIndex]

  return (
    <div
      ref={sectionRef}
      className={`w-full py-16 px-6 bg-gradient-to-br from-[rgba(236, 234, 222, 1)] to-[rgba(134,24,4,0.05)] rounded-2xl border border-[rgba(134,24,4,0.1)] relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative squares */}
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 bg-[rgba(134,24,4,0.05)] rounded-lg transform transition-all duration-1000 ease-out ${
            isVisible ? "rotate-12 scale-100 opacity-100" : "rotate-0 scale-75 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "200ms" : "0ms",
            transform: isHovered ? "rotate(18deg) scale(1.1)" : undefined,
          }}
        />
        <div
          className={`absolute top-1/3 -left-8 w-24 h-24 bg-[rgba(134,24,4,0.08)] rounded-lg transform transition-all duration-1200 ease-out ${
            isVisible ? "rotate-45 scale-100 opacity-100" : "rotate-0 scale-50 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
            transform: isHovered ? "rotate(60deg) scale(1.2)" : undefined,
          }}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-16 h-16 bg-[rgba(134,24,4,0.06)] rounded-lg transform transition-all duration-800 ease-out ${
            isVisible ? "rotate-30 scale-100 opacity-100" : "rotate-0 scale-25 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "600ms" : "0ms",
            transform: isHovered ? "rotate(45deg) scale(1.3)" : undefined,
          }}
        />

{/* Animated Background Images */}
<div className="absolute inset-0 overflow-hidden pointer-events-none ">
  
  <Image
    src="/images/deco1.png"
    alt=""
    width={128}
    height={128}
    className={`absolute top-16 right-40 w-32 h-32 rounded-lg object-cover transition-all duration-1000 ease-out
      ${isVisible ? "rotate-12 scale-100 opacity-100" : "rotate-0 scale-75 opacity-0"}
    `}
    style={{
      transitionDelay: isVisible ? "200ms" : "0ms",
      transform: isHovered ? "rotate(18deg) scale(1.1)" : undefined,
    }}
    priority
    draggable={false}
  />

  <Image
  src="/images/VV_Sucker_logo.png"
  alt=""
  width={150} // Keep the original image's aspect ratio here
  height={150} // Example: assuming the logo is square
  className={`relative top-1/2 left-15 w-24 h-24 rounded-lg object-contain transition-all duration-1200 ease-out
    ${isVisible ? "rotate-45 scale-100 opacity-100" : "rotate-0 scale-50 opacity-0"}
  `}
  style={{
    transitionDelay: isVisible ? "400ms" : "0ms",
    transform: isHovered ? "rotate(60deg) scale(1.2)" : undefined,
  }}
  priority
  draggable={false}
/>
  <Image
    src="/images/deco3.png"
    alt=""
    width={64}
    height={64}
    className={`relative -top-9 left-80 w-16 h-16 rounded-lg object-cover transition-all duration-800 ease-out
      ${isVisible ? "rotate-30 scale-100 opacity-100" : "rotate-0 scale-25 opacity-0"}
    `}
    style={{
      transitionDelay: isVisible ? "600ms" : "0ms",
      transform: isHovered ? "rotate(45deg) scale(1.3)" : undefined,
    }}
    priority
    draggable={false}
  />
</div>
        {/* Small floating squares */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-[rgba(134,24,4,0.1)] rounded transform transition-all duration-1000 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 8}%`,
              transitionDelay: isVisible ? `${800 + i * 100}ms` : "0ms",
              transform: isHovered ? `scale(1.5) rotate(${i * 60}deg)` : undefined,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h1
          className={`text-3xl lg:text-5xl font-light italic text-[rgba(134,24,4,1)] font-pp-editorial transform transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible ? "300ms" : "0ms",
            transform: isTransitioning
              ? `translateY(${direction === "next" ? "-10px" : "10px"}) scale(0.95)`
              : "translateY(0) scale(1)",
            opacity: isTransitioning ? 0.7 : 1,
          }}
        >
          Meet Our Team
        </h1>
        <div className="flex items-center gap-2">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 z-50">
  <Button
    onClick={handlePrevious}
    className="bg-[rgba(134,24,4,0.7)] hover:bg-[rgba(134,24,4,0.9)] text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all"
  >
    <ChevronLeft className="w-8 h-8" />
  </Button>

  <Button
    onClick={handleNext}
    className="bg-[rgba(134,24,4,0.7)] hover:bg-[rgba(134,24,4,0.9)] text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all"
  >
    <ChevronRight className="w-8 h-8" />
  </Button>
</div>


        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className={`relative transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
            }`}
            style={{
              transitionDelay: isVisible ? "500ms" : "0ms",
              transform: isTransitioning
                ? `translateX(${direction === "next" ? "-30px" : "30px"}) scale(0.95)`
                : "translateX(0) scale(1)",
              opacity: isTransitioning ? 0.3 : 1,
            }}
          >
            {/* Image Container with Animated Border */}
            <div className="relative">
              <div
                 className={`
                 relative rounded-xl overflow-hidden shadow-2xl
                 transition-all duration-500 ease-in-out
                 ${
                   isTransitioning
                     ? direction === "next"
                       ? "opacity-0 -translate-x-8"
                       : "opacity-0 translate-x-8"
                     : "opacity-100 translate-x-0"
                 }
               `}
               style={{
                 transform: isHovered ? "scale(1.02) rotate(-0.5deg)" : "scale(1) rotate(0deg)",
               }}
             >
               <Image
                 src={currentPerson.image || "/placeholder.svg"}
                 alt={currentPerson.name}
                 width={500}
                 height={600}
                 className="w-full h-auto object-cover transition-all duration-700 ease-out"
                 style={{
                   filter: isHovered ? "brightness(1.05) contrast(1.1)" : "brightness(1) contrast(1)",
                 }}
                />

                {/* Overlay with animated squares */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded transform transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-45" : "scale-100 rotate-0"
                    }`}
                  />
                  <div
                    className={`absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded transform transition-all duration-700 ${
                      isHovered ? "scale-125 rotate-90" : "scale-100 rotate-0"
                    }`}
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div
                className={`absolute -top-6 -right-6 w-12 h-12 bg-[rgba(134,24,4,0.1)] rounded-lg transform transition-all duration-800 ease-out ${
                  isVisible ? "scale-100 opacity-100 rotate-12" : "scale-0 opacity-0 rotate-0"
                }`}
                style={{
                  transitionDelay: isVisible ? "900ms" : "0ms",
                  transform: isHovered ? "scale(1.1) rotate(25deg)" : undefined,
                }}
              />
              
              <div className="absolute inset-0 overflow-hidden pointer-events-none">

              </div>
              <div
                className={`absolute -bottom-4 -left-4 w-8 h-8 bg-[rgba(134,24,4,0.15)] rounded-full transform transition-all duration-600 ease-out ${
                  isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? "1100ms" : "0ms",
                  transform: isHovered ? "scale(1.3)" : undefined,
                }}
              />
            </div>
          </div>
        

          {/* Content Section */}
          <div
            className={`space-y-6 transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{
              transitionDelay: isVisible ? "600ms" : "0ms",
              transform: isTransitioning
                ? `translateX(${direction === "next" ? "40px" : "-40px"}) translateY(10px)`
                : "translateX(0) translateY(0)",
              opacity: isTransitioning ? 0 : 1,
            }}
          >
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-light italic text-[rgba(134,24,4,1)] font-pp-editorial">
                {currentPerson.name}
              </h3>
              <p className="text-lg text-[rgba(134,24,4,0.8)] font-medium uppercase tracking-wide">
                {currentPerson.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-[rgba(134,24,4,0.8)] leading-relaxed text-base">{currentPerson.description}</p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[rgba(134,24,4,0.3)] pl-6 py-4">
              <p className="text-lg italic text-[rgba(134,24,4,0.9)] font-pp-editorial leading-relaxed">
                "{currentPerson.quote}"
              </p>
            </blockquote>

            {/* Philosophy */}
            <p className="text-sm text-[rgba(134,24,4,0.7)] italic">{currentPerson.philosophy}</p>

            {/* Skills */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-[rgba(134,24,4,1)] uppercase tracking-wide">
                {language === "en" ? "Expertise" : "Experiencia"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentPerson.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[rgba(134,24,4,0.1)] text-[rgba(134,24,4,1)] text-xs rounded-full border border-[rgba(134,24,4,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[rgba(134,24,4,0.15)]"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Check Out My Work Button */}
            {currentPerson.workUrl && (
              <div className="pt-4">
                <Button
                  asChild
                  className="bg-[rgba(134,24,4,1)] hover:bg-[rgba(134,24,4,0.9)] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <a href={currentPerson.workUrl} target="_blank" rel="noopener noreferrer">
                    {language === "en" ? "Check Out My Work" : "Ver Mi Trabajo"}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2 relative z-10">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
              index === currentIndex
                ? "bg-[rgba(134,24,4,1)] w-6 shadow-lg"
                : "bg-[rgba(134,24,4,0.3)] hover:bg-[rgba(134,24,4,0.5)] w-2"
            }`}
            style={{
              transform:
                index === currentIndex && isTransitioning
                  ? "scale(0.8)"
                  : index === currentIndex
                    ? "scale(1.1)"
                    : "scale(1)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[rgba(134,24,4,0.1)] rounded-full mt-4 overflow-hidden relative z-10">
        <div
          className="h-full bg-[rgba(134,24,4,0.4)] rounded-full transition-all duration-300 ease-out"
          style={{
            width: isAutoPlaying && !isHovered ? "100%" : "0%",
            transitionDuration: isAutoPlaying && !isHovered ? "6000ms" : "300ms",
            transitionTimingFunction: isAutoPlaying && !isHovered ? "linear" : "ease-out",
          }}
        />
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-3 relative z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-[rgba(134,24,4,0.6)] hover:text-[rgba(134,24,4,1)] transition-all duration-300 transform hover:scale-105"
        >
          {isAutoPlaying ? "⏸ Pause auto-advance" : "▶ Resume auto-advance"}
        </button>
      </div>
    </div>
  )
}
