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
      <section className="relative w-full h-[100vh] md:h-screen -mt-24 md:mt-10 bg-[#eeebe3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/whywerediff.png"
            alt="Why We're Different"
            fill
            priority
            className="object-contain md:object-cover object-center scale-[1.00] sm:scale-[1.06] md:scale-100"
          />
        </div>

  {/* Desktop Text */}
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

        {/* Mobile Text Overlay */}
        <div className="md:hidden absolute bottom-20 left-0 right-0 px-5 z-20">
          <div className="space-y-3 text-center">
            <motion.div
              className="text-red-600 font-inter"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="text-3xl font-black uppercase leading-none tracking-tight drop-shadow-md">
                FEMALE-LED
              </div>
            </motion.div>
            <motion.div
              className="text-red-600 font-inter"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            >
              <div className="text-lg font-bold uppercase leading-tight tracking-wide drop-shadow-md">
                Authentically bicultural
              </div>
            </motion.div>
            <motion.div
              className="text-red-600 font-inter"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <div className="text-lg font-bold uppercase leading-tight tracking-wide drop-shadow-md">
                Deeply embedded network
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  )
}
