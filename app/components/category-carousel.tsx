"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { SaladIcon as Dress, ShoppingBag, Shirt, FootprintsIcon as Shoe, Watch } from "lucide-react"

export const categories = [
  {
    name: "Theme",
    icon: Dress,
    color: "#FFD1DC",
    image: "https://picsum.photos/id/1011/600/400",
    subtitle: "Community",
  },
  {
    name: "Theme",
    icon: ShoppingBag,
    color: "#FFDAB9",
    image: "https://picsum.photos/id/1012/600/400",
    subtitle: "Carry Your Self",
  },
  {
    name: "Theme",
    icon: Shirt,
    color: "#E6E6FA",
    image: "https://picsum.photos/id/1013/600/400",
    subtitle: "Express Your Essence",
  },
  {
    name: "Theme",
    icon: Shoe,
    color: "#F0FFF0",
    image: "https://picsum.photos/id/1014/600/400",
    subtitle: "Walk in Confidence",
  },
  {
    name: "Theme",
    icon: Watch,
    color: "#F0F8FF",
    image: "https://picsum.photos/id/1015/600/400",
    subtitle: "Details that Dazzle",
  },
]

interface CategoryCarouselProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function CategoryCarousel({ activeIndex, setActiveIndex }: CategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.offsetWidth / 5)
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" })
    }
  }, [activeIndex])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-8">
      <div ref={carouselRef} className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="flex-none w-1/5 snap-center"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0.5,
              scale: index === activeIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center p-2">
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
                animate={{
                  width: index === activeIndex ? 56 : 48,
                  height: index === activeIndex ? 56 : 48,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleClick(index)}
              >
                <category.icon className={`${index === activeIndex ? "w-7 h-7" : "w-6 h-6"} text-gray-600`} />
              </motion.button>
              <motion.p
                className="mt-2 text-sm text-gray-600 h-5 overflow-hidden"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  y: index === activeIndex ? 0 : 10,
                  height: index === activeIndex ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {category.name}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
