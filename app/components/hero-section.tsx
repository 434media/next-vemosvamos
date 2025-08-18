"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import WhoWeReach from "./three-pillars";

export default function NewLandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll-driven motion for dice (you can tune ranges as needed)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden">
      {/* === HERO SECTION FIXED IN VIEW === */}
      <section
        className="
          fixed left-0 h-screen w-full bg-[#eeebe3]
          flex flex-col items-center justify-center
          overflow-hidden z-0 pt-26
        "
      >
        {/* === TOP LEFT TEXT === */}
        <motion.div
          className="absolute top-6 left-6 font-inter uppercase text-base md:text-lg tracking-wide text-red-700 text-left"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          A Multicultural Brand Studio
        </motion.div>

        {/* === TOP RIGHT TEXT === */}
        <motion.div
          className="absolute top-6 right-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Powered by 434 Media
        </motion.div>

        {/* === MAIN IMAGE LAYER === */}
<motion.div
  className="relative w-full h-full flex items-center justify-center overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <Image
    src="/images/vemosvamos.png"
    alt="Vemos Vamos"
    fill
    priority
    className="object-contain object-center drop-shadow-lg"
    sizes="100vw"
  />
</motion.div>


        {/* === BICULTURAL IMAGE (center on small; bottom-right on desktop; responsive scale) === */}
        <motion.div
          className={`
            relative mx-auto mt-6 z-20
            w-[clamp(260px,80vw,900px)]               /* small: centered under hero */
            md:absolute md:inset-auto md:right-[9%] md:bottom-[1%] md:mt-0
            md:w-[clamp(320px,36vw,700px)]            /* desktop: anchor BR + scale */
          `}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="relative w-full">
            <Image
              src="/images/bicultural.png"
              alt="Bicultural Visual"
              sizes="(max-width: 768px) 80vw, 36vw"
              width={1600}
              height={1200}
              className="rounded-lg object-contain drop-shadow-xl"
              priority={false}
            />
          </div>
        </motion.div>

        {/* === SCROLL-RESPONSIVE DICE (RIGHT) === */}
        <motion.div
          style={{ y, rotate }}
          className={`
            absolute z-30 pointer-events-none
            right-[2%] top-[20%]
            w-[clamp(96px,12vw,240px)] h-[clamp(96px,12vw,240px)]
            sm:right-[3%] sm:top-[18%]
            md:right-[4%] md:top-[24%]
            lg:right-[5%] lg:top-[26%]
          `}
        >
          <Image
            src="/images/dice1.png"
            alt="Dice Right"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 40vw, 12vw"
          />
        </motion.div>

        {/* === FLICKERING STARS (LEFT, responsive) === */}
        <motion.div
          className={`
            absolute z-30 pointer-events-none animate-sparkle
            left-[2%] bottom-[12%]
            w-[clamp(90px,10vw,220px)] h-[clamp(90px,10vw,220px)]
            sm:left-[3%] sm:bottom-[14%]
            md:left-[4%] md:bottom-[18%]
            lg:left-[6%] lg:bottom-[20%]
          `}
        >
          <Image
            src="/images/stars.png"
            alt="Sparkling Stars"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 35vw, 10vw"
            priority={false}
          />
        </motion.div>
      </section>

      {/* === SPACER to allow scrolling === */}
      <div className="h-screen" />

      {/* === OVERLAPPING SECTION === */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl">
        <div className="relative w-full">
          <WhoWeReach />
        </div>
      </section>
    </div>
  );
}
