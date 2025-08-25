"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "../lib/language-context"

export default function NewLandingPage() {
  const { t } = useLanguage()
  const scrollRef = useRef(null)

  // Get scroll progress and map it to motion values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  const scrollToWhyItMatters = () => {
    const element = document.getElementById("why-it-matters")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden xs:-mt-10 md:mt-1.5">
      <section
        className="relative w-full bg-[#eeebe3] flex flex-col items-center justify-center overflow-hidden 
                   px-4 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                   h-screen min-h-[100vh] -mt-10 md:mt-16"
        role="banner"
        aria-label="Hero section"
      >
        {/* Desktop Hero Background */}
        <div className="absolute inset-0 hidden md:block lg:block xl:block">
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/hero-desktop"
            alt="Hero background for desktop"
            fill
            priority
            className="object-cover w-full h-full scale-99"
            sizes="(max-width: 767px) 0vw, 100vw"
          />
        </div>

        <div className="absolute inset-0 xs:block sm:block md:hidden">
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/hero-mobile"
            alt="Hero background for mobile"
            fill
            priority
            className="object-contain w-full h-full xs:scale-110"
            sizes="(max-width: 767px) 100vw, 0vw"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          {/* Desktop Content */}
          <motion.div
            className="absolute right-2 xs:right-4 sm:right-6 md:right-8 lg:right-12 xl:right-10 
                       bottom-[10%] xs:bottom-[12%] sm:bottom-[10%] md:bottom-[8%] lg:bottom-[6%] xl:bottom-[12%] 
                       z-20 hidden sm:hidden md:block"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-right relative">
              <h2
                className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl md:max-w-lg
                           md:mr-6 lg:mr-8 xl:mr-12 
                           md:leading-[0.8] lg:leading-[0.75] xl:leading-[0.7] 
                           md:tracking-tighter lg:tracking-tighter xl:tracking-tighter 
                           font-black text-gray-900 font-serif leading-tight drop-shadow-lg 
                           cursor-pointer transition-colors duration-300 hover:text-[#ca0013] relative group"
                onClick={scrollToWhyItMatters}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && scrollToWhyItMatters()}
                aria-label="Navigate to Why It Matters section"
              >
                {t("hero.title")}
                <div className="absolute -bottom-2 md:left-16 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ca0013] to-transparent opacity-60 shadow-[0_0_8px_rgba(202,0,19,0.6)] group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(202,0,19,0.8)] transition-all duration-300"></div>
              </h2>
            </div>
          </motion.div>

          <div className="absolute inset-0 flex flex-col md:hidden z-10">
            {/* Mobile Button - Centered */}
            <div className="flex-1 flex items-center justify-center px-4 xs:px-6 sm:px-8 xs:mt-16">
              <motion.button
                onClick={scrollToWhyItMatters}
                className="bg-[#ca0013] text-white px-6 xs:px-7 sm:px-8 py-3 xs:py-4 sm:py-4 
                           rounded-lg font-semibold text-lg xs:text-xl sm:text-xl 
                           shadow-lg hover:bg-[#a00010] transition-colors duration-300 
                           focus:outline-none focus:ring-2 focus:ring-[#ca0013] focus:ring-offset-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                aria-label="Navigate to Why It Matters section"
              >
                <span>{t("matters.title")}</span>
              </motion.button>
            </div>

            {/* Mobile Marquee - Below image */}
            <motion.div
              className="absolute xs:bottom-10 left-0 right-0 bg-gradient-to-r from-[#ca0013] via-rose-600 to-[#ca0013] 
                         py-4 xs:py-5 sm:py-6 overflow-hidden shadow-lg border-t-4 border-white/20 w-screen -ml-4 xs:-ml-4 sm:-ml-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: [0, -2000] }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span
                      key={index}
                      className="text-white font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif 
                                 drop-shadow-2xl mx-8 tracking-wide text-shadow-lg
                                 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8),_0_0_20px_rgba(255,255,255,0.3)]"
                      style={{
                        textShadow:
                          "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)",
                      }}
                    >
                      {t("hero.title")}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
