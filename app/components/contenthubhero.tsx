"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function ContentHubHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
  <div className="relative w-full overflow-visible md:overflow-hidden">
      {/* HERO SECTION */}
  <section className="relative md:h-screen w-full bg-[#eeebe3] overflow-visible pt-24 md:pt-28 flex">
        {/* FLEX CONTAINER */}
        <div className="relative w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row h-full max-w-none">
    {/* LEFT CONTENT (Image + Text) */}
    <div className="w-full flex flex-col md:flex-1">
    <div className="w-full flex items-start md:items-center justify-start gap-4 md:gap-8 relative">
      {/* Left Main Image */}
      <motion.div
        className="relative flex-1 flex items-center justify-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
    <div className="relative w-full max-w-[680px] md:max-w-[720px]">
          <Image
            src="/images/ourexpertice.png"
            alt="Our Expertise"
            width={900}
            height={700}
            priority
      className="object-contain w-full h-auto max-h-[38vh] sm:max-h-[44vh] md:max-h-[60vh] drop-shadow-lg"
          />
        </div>
      </motion.div>
    </div>
    {/* TEXT BELOW MAIN IMAGE */}
  <div className="relative z-10 w-full pb-2 md:pb-6">
      {/* Text full width */}
      <motion.div
        className="relative z-10 text-red-600 font-inter font-extrabold uppercase space-y-2 text-left w-full mt-4 md:mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">Bilingual Storytelling</motion.div>
        <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">Full‑Stack Creative Production</motion.div>
        <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">Brand Integration & Partnership Design</motion.div>

  {/* (removed inline mobile plane; new plane added at section level) */}
      </motion.div>
    </div>
    </div>
    {/* FULL-HEIGHT NEWSPAPER (Desktop) */}
    <motion.div
      className="hidden md:block absolute inset-y-0 right-0 w-[50vw] max-w-[1200px] min-w-[560px] -ml-[8vw]"
      initial={{ opacity: 0, scale: 0.85, x: 160 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.25,0.46,0.45,0.94], delay: 0.2 }}
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/newspaper.png"
          alt="Illustrated Newspaper"
          fill
          priority
          className="object-cover drop-shadow-2xl"
        />
      </div>
    </motion.div>
        </div>
        {/* PLANE (WOW ENTRANCE + FLOAT LOOP) - Desktop only */}
        <motion.div
          className="pointer-events-none hidden md:block absolute top-1/2 left-1/2 z-30 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56"
          initial="initial"
          whileInView="flyIn"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            // Smooth arc: enter from high right, gentle deceleration, no visible rebound
            initial: { opacity: 0, x: '46vw', y: '-42vh', scale: 0.34, rotate: -34 },
            flyIn: {
              opacity: [0, 1, 1],
              x: ['46vw', '12vw', '16vw'],
              y: ['-42vh', '6vh', '2vh'],
              rotate: [-34, -16, -12],
              scale: [0.34, 1.05, 1],
              transition: {
                duration: 2.35,
                ease: [0.22, 0.61, 0.36, 1], // smooth power ease out
                times: [0, 0.72, 1],
                delay: 0.08,
              },
            },
          }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        >
          {/* Entrance glow trail (fades quickly) */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0.5, scale: 0.2, filter: 'blur(8px)' }}
            animate={{ opacity: 0, scale: 1.6, filter: 'blur(22px)' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.08 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-red-600/30 via-red-400/10 to-transparent" />
          </motion.div>
          {/* Continuous gentle float after arrival */}
          <motion.div
            className="absolute inset-0"
            initial={{}}
            animate={{
              y: [0, -7, 4, -4, 0],
              rotate: [-12, -13.5, -11.5, -12.8, -12],
              scale: [1, 1.008, 1, 1.012, 1],
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 2.35 }}
          >
            <Image
              src="/images/plane.png"
              alt="Flying Plane"
              fill
              className="object-cover drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] will-change-transform"
              priority
            />
          </motion.div>
          {/* Subtle trail using pseudo blur element */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-tr from-red-600/10 via-red-400/5 to-transparent blur-2xl animate-pulse" />
          </div>
        </motion.div>
        {/* MOBILE PLANE (section-level)
            Issue: Plane was not visible because its initial x offset placed it fully outside the viewport, preventing whileInView trigger.
            Fix: Start within viewport (smaller x/y offsets) and use animate instead of whileInView so it always runs on mount. */}
        <motion.div
          className="md:hidden pointer-events-none absolute bottom-6 right-4 w-20 h-20 sm:w-24 sm:h-24 z-30"
          initial={{ opacity: 0, x: 40, y: 24, scale: 0.55, rotate: -28 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -12 }}
          transition={{ duration: 1.4, ease: [0.16,0.84,0.44,1], delay: 0.15 }}
        >
          <motion.div
            animate={{ y: [0,-5,3,-4,0], rotate: [-12,-14,-11,-13,-12] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            className="absolute inset-0"
          >
            <Image src="/images/plane.png" alt="Flying Plane" fill className="object-contain drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
