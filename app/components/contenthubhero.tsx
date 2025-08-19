"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import RedIdentityPage from "./ourexp2";

export default function ContentHubHero() {
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
  const lineVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="relative w-full overflow-x-hidden">
      <section className="fixed inset-0 bg-[#eeebe3] overflow-hidden z-0">
        {/* corners */}
        <motion.div
          className="absolute top-6 left-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide z-30"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          A Multicultural Brand Studio
        </motion.div>
        <motion.div
          className="absolute top-6 right-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide text-right z-30"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Powered by 434 Media
        </motion.div>

        {/* ---- SM/MD: newspaper as full background; expertise centered above ---- */}
        <div className="lg:hidden relative h-full w-full">
          {/* background */}
          <Image
            src="/images/newspaper.png"
            alt="Newspaper BG"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* content */}
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 md:px-6 gap-4">
            <motion.div
              className="relative w-full max-w-[min(900px,92vw)] aspect-[16/11]"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/ourexpertice.png"
                alt="Our Expertise"
                fill
                className="object-contain drop-shadow-lg"
                sizes="92vw"
              />
            </motion.div>

            <motion.div className="w-full max-w-[70ch] text-left" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              className="text-red-600 font-inter font-extrabold uppercase tracking-wide
                        text-[clamp(1.2rem,2.8vw,2.6rem)] leading-snug lg:leading-relaxed"
              variants={lineVariants}
            >
              Bilingual Storytelling
            </motion.div>
            <motion.div
              className="text-red-600 font-inter font-extrabold uppercase tracking-wide
                        text-[clamp(1.2rem,2.8vw,2.6rem)] leading-snug lg:leading-relaxed mt-2"
              variants={lineVariants}
            >
              Full-Stack Creative Production
            </motion.div>
            <motion.div
              className="text-red-600 font-inter font-extrabold uppercase tracking-wide
                        text-[clamp(1.2rem,2.8vw,2.6rem)] leading-snug lg:leading-relaxed mt-2"
              variants={lineVariants}
            >
              Brand Integration & Partnership Design
            </motion.div>
          </motion.div>

          </div>
        </div>

        {/* ---- LG+: two columns; right newspaper fills height ---- */}
        <div className="hidden lg:grid grid-cols-2 h-full">
          <div className="relative h-full w-full flex flex-col items-start justify-center gap-6 px-8">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-[min(1080px,52vw)] aspect-[16/11]">
              <Image
                src="/images/ourexpertice.png"
                alt="Our Expertise"
                fill
                priority
                className="object-contain drop-shadow-lg"
                sizes="52vw"
              />
            </div>

            </motion.div>

            <motion.div className="w-full max-w-[90ch] text-left" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div
                className="text-red-600 font-inter font-extrabold uppercase tracking-wide text-[clamp(1rem,2vw,2rem)] leading-relaxed"
                variants={lineVariants}
              >
                Bilingual Storytelling
              </motion.div>
              <motion.div
                className="text-red-600 font-inter font-extrabold uppercase tracking-wide text-[clamp(1rem,2vw,2rem)] leading-relaxed mt-1"
                variants={lineVariants}
              >
                Full-Stack Creative Production
              </motion.div>
              <motion.div
                className="text-red-600 font-inter font-extrabold uppercase tracking-wide text-[clamp(1rem,2vw,2rem)] leading-relaxed mt-1"
                variants={lineVariants}
              >
                Brand Integration & Partnership Design
              </motion.div>
            </motion.div>
          </div>

          <div className="relative">
            <Image
              src="/images/newspaper.png"
              alt="Newspaper"
              fill
              priority
              className="object-cover object-right drop-shadow-lg"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <div className="h-screen" />
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <RedIdentityPage />
        </div>
      </section>
    </div>
  );
}
