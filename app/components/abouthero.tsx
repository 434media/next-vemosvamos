"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, margin: "-10%" })

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <section className="relative w-full h-screen -mb-52 -mt-40 md:mt-10 md:mb-0 bg-[#eeebe3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/whywerediff.png"
            alt="Why We're Different"
            fill
            priority
            className="object-contain object-center scale-[1.01] md:scale-100"
          />
        </div>

        {/* Desktop Text (all appear together) */}
        <div className="hidden md:block absolute bottom-16 right-8 lg:right-12 z-10 max-w-md lg:max-w-lg">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 60 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-3 lg:space-y-4 text-right text-red-600 font-inter"
          >
            <div className="text-3xl lg:text-5xl font-black uppercase leading-none tracking-tight drop-shadow-lg">
              FEMALE-LED
            </div>
            <div className="text-xl lg:text-3xl font-bold uppercase leading-tight tracking-wide drop-shadow-md">
              Authentically bicultural
            </div>
            <div className="text-xl lg:text-3xl font-bold uppercase leading-tight tracking-wide drop-shadow-md">
              Deeply embedded network
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
