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
        relative w-full bg-[#ca0013]
        flex flex-col items-center justify-center
        text-white overflow-hidden z-30
        min-h-[55vh] md:min-h-[90vh] lg:min-h-screen
        py-10 md:py-16 lg:py-20
      "
    >
      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-7xl flex items-center justify-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-10 lg:mb-12"
      >
        <Image
          src="/images/wecreatewhite.png"
          alt="We Create"
          width={1400}
          height={900}
          priority
          className="object-contain drop-shadow-lg w-full h-auto max-h-[50vh] sm:max-h-[52vh] md:max-h-[55vh] lg:max-h-[58vh] xl:max-h-[60vh]"
        />
      </motion.div>

      {/* BACKGROUND CITY + GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[50vh] sm:h-[42vh] md:h-[36vh] lg:h-[34vh] xl:h-[33vh] z-0">
        <Image
          src="/images/cityblack.png"
          alt="City Skyline"
          fill
          className="object-cover object-bottom opacity-70 sm:opacity-75"
          priority
        />
      </div>
    </section>
  )
}
