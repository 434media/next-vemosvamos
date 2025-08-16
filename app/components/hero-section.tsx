"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"

export default function NewLandingPage() {
  const scrollRef = useRef(null)

  // Get scroll progress and map it to motion values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  const starsY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden">
      {/* === HERO SECTION FIXED IN VIEW === */}
      <section
        className="fixed left-0 h-screen sm:h-screen w-full bg-[#eeebe3] flex flex-col items-center justify-center overflow-hidden z-0 px-4 sm:px-6"
      >
        <div className="absolute top-4 left-0 right-0 flex justify-center sm:hidden px-4 z-10">
          <motion.div
            className="w-[68vw] max-w-[360px]"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/bicultural.png"
              alt="Bicultural Visual"
              width={400}
              height={400}
              className="rounded-lg object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* === MAIN IMAGE === */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center overflow-visible md:pt-16"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/vemosvamos.png"
            alt="Vemos Vamos"
            fill
            priority
            className="object-contain sm:object-cover object-center drop-shadow-lg scale-[1.28] sm:scale-100 md:scale-[0.96] lg:scale-[0.9] xl:scale-[0.85] translate-y-1"
          />

          {/* Mobile dice (moved inside main image container to keep proximity) */}
          <motion.div
            className="absolute top-[24%] right-[clamp(4px,2vw,18px)] z-30 w-[clamp(72px,26vw,112px)] h-[clamp(72px,26vw,112px)] sm:hidden"
            initial={{ opacity: 0, rotate: -28, scale: 0.6, y: -16 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image src="/images/dice1.png" alt="Decorative Dice" fill className="object-contain drop-shadow-lg pointer-events-none select-none" />
          </motion.div>

          <motion.div
            className="absolute right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 bottom-[10%] sm:bottom-[10%] md:bottom-[8%] w-[80px] sm:w-[160px] md:w-[220px] lg:w-[280px] xl:w-[320px] z-20 hidden sm:block"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/bicultural.png"
              alt="Bicultural Visual"
              width={400}
              height={400}
              className="rounded-lg object-contain drop-shadow-xl"
            />
          </motion.div>

    </motion.div>
        {/* === SCROLL-RESPONSIVE DICE IMAGE (RIGHT SIDE) === */}
        <motion.div
          className="absolute right-1 sm:right-2 md:right-[5px] top-[140px] sm:top-[220px] md:top-[250px] z-30 w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] hidden sm:block"
          initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image src="/images/dice1.png" alt="Dice Right" fill className="object-contain drop-shadow-lg" />
        </motion.div>

        {/* === FLICKERING STARS IMAGE (LEFT SIDE) === */}
        <motion.div
          className="absolute left-2 sm:left-8 md:left-12 lg:left-16 top-[310px] sm:top-[380px] md:top-[420px] lg:top-[450px] z-30 w-[110px] h-[130px] sm:w-[140px] sm:h-[170px] md:w-[200px] md:h-[240px] lg:w-[240px] lg:h-[280px] animate-sparkle"
          style={{ y: starsY }}
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image src="/images/stars.png" alt="Sparkling Stars" fill className="object-contain drop-shadow-lg" />
        </motion.div>
      </section>

      {/* === SPACER to allow scrolling === */}
      <div className="h-screen sm:h-screen"></div>
    </div>
  )
}
