"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)

  const text1InView = useInView(text1Ref, { once: false, margin: "-10%" })
  const text2InView = useInView(text2Ref, { once: false, margin: "-10%" })
  const text3InView = useInView(text3Ref, { once: false, margin: "-10%" })

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <section className="relative w-full h-[60vh] md:h-screen -mb-16 md:mb-0 mt-16 bg-[#eeebe3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/whywerediff.png"
            alt="Why We're Different"
            fill
            priority
            className="object-contain md:object-cover object-center"
          />
        </div>

        <div className="hidden md:block absolute bottom-16 right-8 lg:right-12 z-10 max-w-md lg:max-w-lg">
          <div className="space-y-3 lg:space-y-4 text-right">
            <motion.div
              ref={text1Ref}
              className="text-red-600 font-inter"
              initial={{ x: 50, opacity: 0 }}
              animate={text1InView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-3xl lg:text-5xl font-black uppercase leading-none tracking-tight drop-shadow-lg">
                FEMALE-LED
              </div>
            </motion.div>

            <motion.div
              ref={text2Ref}
              className="text-red-600 font-inter"
              initial={{ x: 50, opacity: 0 }}
              animate={text2InView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="text-xl lg:text-3xl font-bold uppercase leading-tight tracking-wide drop-shadow-md">
                Authentically bicultural
              </div>
            </motion.div>

            <motion.div
              ref={text3Ref}
              className="text-red-600 font-inter"
              initial={{ x: 50, opacity: 0 }}
              animate={text3InView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="text-xl lg:text-3xl font-bold uppercase leading-tight tracking-wide drop-shadow-md">
                Deeply embedded network
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />
      </section>
    </div>
  )
}
