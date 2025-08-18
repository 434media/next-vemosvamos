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

  const scrollToWhyItMatters = () => {
    const element = document.getElementById("why-it-matters")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden">
      <section
        className="relative w-full bg-[#eeebe3] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 h-screen -mt-24 md:mt-0"
        role="banner"
        aria-label="Hero section"
      >
        {/* === MAIN IMAGE === */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center overflow-visible md:pt-24 md:mb-0"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/vemosvamos.png"
            alt="Vemos Vamos brand logo and visual identity"
            fill
            priority
            className="md:mt-10 object-contain sm:object-cover object-center drop-shadow-lg scale-[1.38] sm:scale-100 md:scale-[0.96] lg:scale-[0.9] xl:scale-[0.85] -translate-y-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
          />
          <motion.div
            className="absolute right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 bottom-[10%] sm:bottom-[10%] md:bottom-[4%] z-20 hidden sm:block"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-right relative">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 font-serif leading-tight drop-shadow-lg cursor-pointer transition-colors duration-300 hover:text-[#ca0013] relative group"
                onClick={scrollToWhyItMatters}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && scrollToWhyItMatters()}
                aria-label="Navigate to Why It Matters section"
              >
                Bicultural Media for
                <br />a New Generation
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ca0013] to-transparent opacity-60 shadow-[0_0_8px_rgba(202,0,19,0.6)] group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(202,0,19,0.8)] transition-all duration-300"></div>
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* === MOBILE CONTENT === */}
        <div className="absolute bottom-32 left-0 right-0 flex flex-col items-center md:hidden px-4 z-10 space-y-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl font-bold text-gray-900 font-serif leading-tight drop-shadow-sm">
              Bicultural Media for
              <br />a New Generation
            </h2>
          </motion.div>

          <div className="relative flex items-center justify-center w-full">
            {/* Star on the left */}
            <motion.div
              className="absolute left-0 bottom-0 z-30"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/stars.png"
                alt="Decorative sparkling stars"
                width={80}
                height={80}
                className="object-contain"
                sizes="80px"
              />
            </motion.div>

            {/* Button in the center */}
            <motion.button
              onClick={scrollToWhyItMatters}
              className="bg-[#ca0013] text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#a00010] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-offset-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label="Navigate to Why It Matters section"
            >
              <span>Why It Matters</span>
            </motion.button>

            {/* Dice on the right */}
            <motion.div
              className="absolute right-0 bottom-0 z-30 w-[80px] h-[80px]"
              initial={{ opacity: 0, rotate: -28, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.15, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/dice1.png"
                alt="Decorative dice element"
                fill
                className="object-contain drop-shadow-lg pointer-events-none select-none"
                sizes="80px"
              />
            </motion.div>
          </div>
        </div>

        {/* === SCROLL-RESPONSIVE DICE IMAGE (RIGHT SIDE) === */}
        <motion.div
          className="absolute right-1 sm:right-2 md:right-[5px] top-[140px] sm:top-[220px] md:top-[250px] z-30 w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] hidden sm:block"
          initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/dice1.png"
            alt="Decorative dice element"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(min-width: 1024px) 260px, (min-width: 768px) 180px, 80px"
          />
        </motion.div>

        {/* === FLICKERING STARS IMAGE (LEFT SIDE - DESKTOP ONLY) === */}
        <motion.div
          className="absolute left-2 sm:left-8 md:left-12 lg:left-16 top-[310px] sm:top-[380px] md:top-[420px] lg:top-[450px] z-30 w-[110px] h-[130px] sm:w-[140px] sm:h-[170px] md:w-[200px] md:h-[240px] lg:w-[240px] lg:h-[280px] animate-sparkle hidden sm:block"
          style={{ y: starsY }}
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/stars.png"
            alt="Decorative sparkling stars"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, (min-width: 640px) 140px, 110px"
          />
        </motion.div>
      </section>
    </div>
  )
}
