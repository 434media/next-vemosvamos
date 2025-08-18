"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OurTeam from "./ourteam";

export default function AboutHero() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="fixed inset-0 bg-[#eeebe3] overflow-hidden z-0">
        {/* Corner labels (stay absolute) */}
        <motion.div
          className="absolute top-4 left-4 md:top-6 md:left-6 text-red-700 font-inter uppercase text-sm md:text-lg tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          A Multicultural Brand Studio
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 md:top-6 md:right-6 text-red-700 font-inter uppercase text-sm md:text-lg tracking-wide text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Powered by 434 Media
        </motion.div>

        {/* FLEX COLUMN LAYOUT */}
        <div className="relative h-full w-full flex flex-col items-center justify-center px-4 pt-20 md:pt-24 gap-6 md:gap-8">
          {/* Headline */}
          <motion.h1
            className="
              text-red-700 font-inter font-extrabold uppercase leading-none text-center
              tracking-[-0.06em]
              w-full
              text-[clamp(2rem,12vw,20rem)]
            "
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            WHY WE’RE DIFFERENT
          </motion.h1>

          {/* Three-line block: centered on sm/md; shifts left on lg+ */}
          <motion.div
            className="
              text-red-600 font-inter font-extrabold uppercase
              tracking-wide leading-snug md:leading-relaxed
              text-center lg:text-left
              text-[clamp(1rem,3.2vw,2rem)]
              max-w-[36ch]
              self-center
              lg:self-start lg:ml-[35%]
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div>Female-Led</div>
            <div>Authentically Bicultural</div>
            <div>Deeply Embedded Network</div>
          </motion.div>
        </div>

        {/* Corner images (scale with clamp, stay pinned) */}
        {/* LADYTHINK — Bottom Left */}
<motion.div
  className="
    absolute z-10 pointer-events-none
    left-[2%] bottom-[3%]
    w-[clamp(260px,50vw,600px)]     /* ⬆️ bigger on mobile (min 260, 50vw) */
    md:w-[clamp(280px,38vw,640px)]  /* ⬇️ slightly smaller cap on md */
    lg:w-[clamp(240px,30vw,560px)]  /* ⬇️ even smaller on large screens */
  "
  initial={{ opacity: 0, scale: 0.97 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
>
  <Image
    src="/images/ladythink.png"
    alt="Thinking Lady"
    width={1600}
    height={1600}
    className="object-contain w-full h-auto drop-shadow-lg"
    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 38vw, 30vw"
  />
</motion.div>


{/* WRESTLECAT — Bottom Right */}
<motion.div
  className="
    absolute z-10 pointer-events-none
    right-[-9%] bottom-[0%]
    w-[clamp(240px,40vw,820px)]          /* cat scaled up a lot more */
    md:w-[clamp(320px,46vw,880px)]
    lg:w-[clamp(280px,38vw,820px)]
  "
  initial={{ opacity: 0, scale: 0.97 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.85, ease: 'easeOut', delay: 0.55 }}
>
  <Image
    src="/images/wrestlecat.png"
    alt="Wrestle Cat"
    width={1700}
    height={1700}
    className="object-contain w-full h-auto drop-shadow-lg"
    sizes="(max-width: 768px) 65vw, (max-width: 1024px) 46vw, 38vw"
  />
</motion.div>



      </section>

      {/* SPACER */}
      <div className="h-screen" />

      {/* TEAM SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <OurTeam />
        </div>
      </section>
    </div>
  );
}
