"use client"

import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function WhoWeReach() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="
        relative 
        w-full 
        bg-[#ca0013]
        flex 
        flex-col 
        items-center 
        justify-between
        py-8 sm:py-12 md:py-16 lg:py-20
        overflow-hidden
        text-white
        min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]
        z-30
      "
    >
      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl flex items-center justify-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16"
      >
        <Image
          src="/images/wecreatewhite.png"
          alt="We Create"
          width={1200}
          height={800}
          priority
          className="rounded-lg object-contain drop-shadow-lg w-full h-auto"
        />
      </motion.div>

      {/* CITY IMAGE AS FULL-WIDTH BACKGROUND AT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-80 md:h-96 z-0">
        <Image
          src="/images/cityblack.png"
          alt="City Skyline"
          fill
          className="object-cover object-bottom opacity-70 sm:opacity-80"
          priority
        />
      </div>
    </section>
  )
}
