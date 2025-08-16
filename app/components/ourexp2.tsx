"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function RedIdentityPage() {
  return (
    <>
      {/* 🔴 RED BLOCK */}
      <div className="w-full bg-[#ca0013] relative overflow-hidden min-h-[420px] md:min-h-screen flex items-center">
        {/* Overlay Hand Image (absolute so text can span full width) */}
        {/* Desktop Hand */}
        <motion.div
          className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[3vw] z-10 pointer-events-none select-none"
          style={{ width: 'clamp(320px,32vw,620px)', aspectRatio: '1/1' }}
          initial={{ opacity: 0, scale: 0.55, rotate: -12, x: 160 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.4, ease: [0.25,0.46,0.45,0.94], delay: 0.25, scale: { type: 'spring', stiffness: 120, damping: 22 } }}
          whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.5 } }}
        >
          <Image src="/images/hand.png" alt="Hand Illustration" fill className="object-contain drop-shadow-2xl" priority />
        </motion.div>
        {/* Mobile Hand (smaller, subtle behind text) */}
        <motion.div
          className="md:hidden absolute -bottom-12 right-0 z-10 opacity-85 pointer-events-none select-none"
          style={{ width: 'min(50vw,240px)', aspectRatio: '1/1' }}
          initial={{ opacity: 0, scale: 0.65, rotate: -10, y: 40, x: 40 }}
          whileInView={{ opacity: 0.9, scale: 1, rotate: 0, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.25,0.46,0.45,0.94], delay: 0.15 }}
        >
          <Image src="/images/hand.png" alt="Hand Illustration" fill className="object-contain drop-shadow-xl" priority />
        </motion.div>

        {/* Text Block */}
        <div className="w-full relative z-20 px-4 md:px-[5vw] py-14 md:py-24">
          {/* Optional gradient to improve legibility where image overlaps */}
          <div className="pointer-events-none absolute inset-0 md:bg-gradient-to-r from-[#ca0013] via-[#ca0013]/70 to-[#ca0013]/0" aria-hidden="true" />
          <motion.h2
            className="relative text-white font-inter font-black uppercase tracking-tight leading-[1.05] text-center md:text-center text-[clamp(2rem,4vw+1rem,6rem)] w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          >
            We partner with brands to define and express their identity in ways that foster genuine connections with Latinx audiences visually, verbally, and culturally.
          </motion.h2>
        </div>
      </div>

      {/* 🟤 CREAM BLOCK RESTRUCTURED */}
      <section className="w-full bg-[#eeebe3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          {/* MAIN IMAGE FULL-WIDTH (still aligned left) */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="relative w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[7/3]">
                <Image src="/images/active.png" alt="Active Illustration" fill className="object-contain object-left" priority />
              </div>
            </div>
          </motion.div>

          {/* LOWER CONTENT AREA (desktop two-column) */}
          <div className="relative w-full">
            <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
              {/* TEXT COLUMN */}
              <div className="relative z-20 lg:col-span-7 xl:col-span-7 space-y-12 pr-4 xl:pr-8">
                {/* SERIES 1 */}
                <div className="space-y-5">
                  <motion.h3
                    className="text-red-700 font-inter uppercase font-extrabold tracking-tight leading-[1.05] text-[clamp(2rem,3.8vw,3.6rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    Series 1: Stay Local, Look Deeper
                  </motion.h3>
                  <motion.div
                    className="h-1 bg-red-700 w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1.05rem,1.1rem+0.4vw,1.5rem)] max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                  >
                    Weekly 1–2 min "Come With Me" videos designed to build trust through local insight + community presence.
                  </motion.p>
                </div>
                {/* SERIES 2 */}
                <div className="space-y-5">
                  <motion.h3
                    className="text-red-700 font-inter uppercase font-extrabold tracking-tight leading-[1.05] text-[clamp(2rem,3.8vw,3.6rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    Series 2: Creator Tips W/Vemos Vamos
                  </motion.h3>
                  <motion.div
                    className="h-1 bg-red-700 w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1.05rem,1.1rem+0.4vw,1.5rem)] max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                  >
                    Weekly monologues + carousels on marketing + entrepreneurship insights.
                  </motion.p>
                </div>
                {/* SERIES 3 */}
                <div className="space-y-5">
                  <motion.h3
                    className="text-red-700 font-inter uppercase font-extrabold tracking-tight leading-[1.05] text-[clamp(2rem,3.8vw,3.6rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    Series 3: Vamos A Experimentar
                  </motion.h3>
                  <motion.div
                    className="h-1 bg-red-700 w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1.05rem,1.1rem+0.4vw,1.5rem)] max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                  >
                    A bi-weekly series with creators for rapid innovation and real-time cultural relevance.
                  </motion.p>
                </div>
              </div>

              {/* DESKTOP MEDIA COLUMN */}
              <motion.div
                className="hidden lg:block lg:col-span-5 xl:col-span-5 relative -ml-32 xl:-ml-48"
                initial={{ opacity: 0, x: 120, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, ease: [0.25,0.46,0.45,0.94], delay: 0.25 }}
              >
                <div className="absolute inset-0">
                  <video
                    src="/images/content.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-left rounded-none"
                  />
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#eeebe3] via-[#eeebe3]/70 to-transparent" />
                  <motion.div
                    className="absolute -bottom-20 left-60 xl:left-72 w-80 h-80 xl:w-96 xl:h-96"
                    initial={{ opacity: 0, y: 60, rotate: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.45 }}
                  >
                    <Image src="/images/micro.png" alt="Microphone Illustration" fill className="object-contain drop-shadow-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* MOBILE MEDIA STACK */}
            <div className="lg:hidden mt-10">
              <motion.div
                className="w-full relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <video
                  src="/images/content.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                className="relative mx-auto w-[min(90%,520px)] aspect-video"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              >
                <Image src="/images/micro.png" alt="Microphone Illustration" fill className="object-cover drop-shadow-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
