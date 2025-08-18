"use client"
import Image from "next/image"
import { motion } from "motion/react"

export default function RedIdentityPage() {
  return (
    <>
      {/* 🔴 RED BLOCK */}
      <section
        id="red-block"
        className="w-full bg-[#ca0013] relative overflow-hidden md:min-h-[70vh] flex items-center py-4 md:py-6"
        role="region"
        aria-labelledby="red-block-heading"
      >
        {/* Text Block - Made full width with minimal padding */}
        <div className="w-full relative z-20 px-4 md:px-6">
          <motion.h1
            id="red-block-heading"
            className="relative text-white font-black uppercase tracking-tighter md:tracking-tight leading-[0.95] text-left md:text-center text-[clamp(1.75rem,4.5vw+0.5rem,4.5rem)] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            We partner with brands to define and express their identity in ways that foster genuine connections with
            Latinx audiences visually, verbally, and culturally.
          </motion.h1>
        </div>
      </section>

      {/* 🟤 CREAM BLOCK */}
      <section
        id="cream-block"
        className="w-full bg-[#eeebe3] relative overflow-visible min-h-screen"
        role="region"
        aria-labelledby="cream-block-heading"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <motion.div
            className="relative w-full mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              id="cream-block-heading"
              className="font-black uppercase tracking-tighter leading-[0.85] text-left"
              style={{
                color: "#ca0013",
                fontSize: "clamp(3rem, 8vw + 1rem, 12rem)",
              }}
            >
              ACTIVE
              <br />
              PRODUCTIONS
            </h1>
          </motion.div>

          {/* LOWER CONTENT AREA */}
          <div className="relative w-full">
            <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
              {/* TEXT COLUMN */}
              <div className="relative z-20 lg:col-span-7 xl:col-span-7 space-y-8 md:space-y-12 pr-4 xl:pr-8">
                {/* SERIES 1 */}
                <div className="space-y-4">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-[clamp(1.5rem,3.2vw,2.8rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Series 1: Stay Local, Look Deeper
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-24"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1rem,1rem+0.3vw,1.25rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    Weekly 1–2 min "Come With Me" videos designed to build trust through local insight + community
                    presence.
                  </motion.p>
                </div>

                {/* SERIES 2 */}
                <div className="space-y-4">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-[clamp(1.5rem,3.2vw,2.8rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Series 2: Creator Tips W/Vemos Vamos
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-24"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1rem,1rem+0.3vw,1.25rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    Weekly monologues + carousels on marketing + entrepreneurship insights.
                  </motion.p>
                </div>

                {/* SERIES 3 */}
                <div className="space-y-4">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-[clamp(1.5rem,3.2vw,2.8rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Series 3: Vamos A Experimentar
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-24"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-[clamp(1rem,1rem+0.3vw,1.25rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    A bi-weekly series with creators for rapid innovation and real-time cultural relevance.
                  </motion.p>
                </div>
              </div>

              {/* DESKTOP MEDIA COLUMN */}
              <motion.div
                className="hidden lg:block lg:col-span-5 xl:col-span-5 relative -ml-24 xl:-ml-32"
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              >
                <div className="absolute inset-0">
                  <video
                    src="/images/content.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-left rounded-lg"
                    aria-label="Content creation video showcase"
                  />
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#eeebe3] via-[#eeebe3]/60 to-transparent" />
                  <motion.div
                    className="absolute -bottom-16 left-48 xl:left-56 w-64 h-64 xl:w-80 xl:h-80"
                    initial={{ opacity: 0, y: 40, rotate: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  >
                    <Image
                      src="/images/micro.png"
                      alt="Microphone illustration"
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 1024px) 0px, (max-width: 1280px) 256px, 320px"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* MOBILE MEDIA STACK */}
            <div className="lg:hidden mt-8 space-y-0 pb-0">
              <motion.div
                className="w-full relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <video
                  src="/images/content.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover aspect-[4/3]"
                  aria-label="Content creation video showcase"
                />
              </motion.div>
              <motion.div
                className="relative mx-auto w-[min(90%,450px)] aspect-square -mt-32"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <Image
                  src="/images/micro.png"
                  alt="Microphone illustration"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 1024px) 90vw, 0px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
