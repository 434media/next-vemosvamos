"use client"
import Image from "next/image"
import { motion } from "motion/react"
import { useLanguage } from "../lib/language-context"

export default function RedIdentityPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* 🔴 RED BLOCK */}
      <section
        id="red-block"
        className="w-full bg-[#ca0013] relative overflow-hidden min-h-[28vh] xs:min-h-[25vh] sm:min-h-[32vh] md:min-h-[65vh] flex items-center py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8"
        role="region"
        aria-labelledby="red-block-heading"
      >
        {/* Text Block - Made full width with minimal padding */}
        <div className="w-full relative z-20 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
          <motion.h1
            id="red-block-heading"
            className="relative text-white text-left text-2xl xs:text-2xl sm:text-3xl md:text-[clamp(2rem,4.5vw+0.5rem,4.5rem)] font-black uppercase tracking-tighter leading-[0.95] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {t("partnershipStatement")}
          </motion.h1>
        </div>
      </section>

      {/* 🟤 CREAM BLOCK */}
      <section
        id="cream-block"
        className="w-full bg-[#eeebe3] relative overflow-hidden min-h-[90vh] xs:min-h-[95vh] sm:min-h-screen md:min-h-[105vh] lg:min-h-[110vh] xl:min-h-[120vh]"
        role="region"
        aria-labelledby="cream-block-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-16">
          <motion.div
            className="relative w-full mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
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
                fontSize: "clamp(2.5rem, 6vw + 0.5rem, 8rem)",
              }}
            >
              <span className="block">{t("activeProductions").replace("\n", " ")}</span>
            </h1>
          </motion.div>

          {/* LOWER CONTENT AREA */}
          <div className="relative w-full flex-1 xs:-mb-16 md:mb-0">
            <div className="relative md:grid md:grid-cols-12 lg:grid-cols-12 md:gap-6 lg:gap-8 xl:gap-12">
              {/* TEXT COLUMN */}
              <div className="relative z-20 md:col-span-7 lg:col-span-7 xl:col-span-7 space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16 pr-0 md:pr-4 lg:pr-6 xl:pr-8">
                {/* SERIES 1 */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-4 md:space-y-5">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-xl xs:text-2xl sm:text-[clamp(1.5rem,3.2vw,2.8rem)] md:text-[clamp(1.8rem,3.5vw,3.2rem)] lg:text-[clamp(2rem,3.8vw,3.5rem)] xl:text-[clamp(2.2rem,4vw,4rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {t("series1Title")}
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-sm xs:text-base sm:text-[clamp(1rem,1rem+0.3vw,1.25rem)] md:text-[clamp(1.1rem,1.1rem+0.3vw,1.4rem)] lg:text-[clamp(1.2rem,1.2rem+0.3vw,1.5rem)] xl:text-[clamp(1.3rem,1.3rem+0.3vw,1.6rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    {t("series1Description")}
                  </motion.p>
                </div>

                {/* SERIES 2 */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-4 md:space-y-5">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-xl xs:text-2xl sm:text-[clamp(1.5rem,3.2vw,2.8rem)] md:text-[clamp(1.8rem,3.5vw,3.2rem)] lg:text-[clamp(2rem,3.8vw,3.5rem)] xl:text-[clamp(2.2rem,4vw,4rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {t("series2Title")}
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-sm xs:text-base sm:text-[clamp(1rem,1rem+0.3vw,1.25rem)] md:text-[clamp(1.1rem,1.1rem+0.3vw,1.4rem)] lg:text-[clamp(1.2rem,1.2rem+0.3vw,1.5rem)] xl:text-[clamp(1.3rem,1.3rem+0.3vw,1.6rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    {t("series2Description")}
                  </motion.p>
                </div>

                {/* SERIES 3 */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-4 md:space-y-5">
                  <motion.h2
                    className="text-red-700 font-black uppercase tracking-tight leading-[1.05] text-xl xs:text-2xl sm:text-[clamp(1.5rem,3.2vw,2.8rem)] md:text-[clamp(1.8rem,3.5vw,3.2rem)] lg:text-[clamp(2rem,3.8vw,3.5rem)] xl:text-[clamp(2.2rem,4vw,4rem)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {t("series3Title")}
                  </motion.h2>
                  <motion.div
                    className="h-1 bg-red-700 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  <motion.p
                    className="text-red-800 font-semibold leading-relaxed text-sm xs:text-base sm:text-[clamp(1rem,1rem+0.3vw,1.25rem)] md:text-[clamp(1.1rem,1.1rem+0.3vw,1.4rem)] lg:text-[clamp(1.2rem,1.2rem+0.3vw,1.5rem)] xl:text-[clamp(1.3rem,1.3rem+0.3vw,1.6rem)] max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    {t("series3Description")}
                  </motion.p>
                </div>
              </div>

              {/* DESKTOP MEDIA COLUMN */}
              <motion.div
                className="hidden md:block md:col-span-5 lg:col-span-5 xl:col-span-5 relative"
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              >
                <div className="absolute inset-0">
                  <video
                    src="https://ampd-asset.s3.us-east-2.amazonaws.com/vemos-vamos/Pitch+Deck.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    aria-label="Content creation video showcase"
                  />
                  <motion.div
                    className="absolute -bottom-12 xs:-bottom-14 sm:-bottom-16 md:top-75 w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full"
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
                      sizes="(max-width: 768px) 0px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* MOBILE MEDIA STACK */}
            <div className="md:hidden mt-6 xs:mt-7 sm:mt-8 space-y-0 pb-0">
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
                className="relative mx-auto w-[min(85%,400px)] xs:w-[min(88%,420px)] sm:w-[min(90%,450px)] aspect-square -mt-56 xs:-mt-52 sm:-mt-60"
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
                  sizes="(max-width: 768px) 90vw, 0px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
