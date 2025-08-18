"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Animated number utility
type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

function AnimatedNumber({ value, suffix = "", prefix = "" }: AnimatedNumberProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      function animateNumber(currentTime: number) {
        const elapsed = currentTime - startTime;
        if (elapsed < duration) {
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.round(start + (value - start) * progress);
          setDisplay(currentValue);
          requestAnimationFrame(animateNumber);
        } else {
          setDisplay(value);
        }
      }

      requestAnimationFrame(animateNumber);
    }
  }, [isInView, value]);

  return (
      <motion.span
      ref={ref}
      initial={{}}
      animate={controls}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onUpdate={(latest) => {
        const num = typeof latest.num === "number" ? latest.num : Number(latest.num);
        setDisplay(!isNaN(num) ? Math.round(num) : value);
      }}
      className="inline-block text-5xl md:text-6xl font-extrabold text-red-700"
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}

export default function WhyItMattersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#eeebe3] flex flex-col items-center justify-start px-4 py-16 md:py-20 overflow-hidden"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        {/* LEFT COLUMN – Image + Video */}
        <div className="flex flex-col md:w-1/2 items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/whyitmatters.png"
              alt="Why it matters visual"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <video
              src="/images/stacyinterview.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN – Stats */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-12 text-red-700">
          {/* STAT 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              U.S. Latinos hold{" "}
              <AnimatedNumber value={2} prefix="$" suffix=".4  Trillion " /> in consumer
              spending power.
            </p>
            <motion.div
              className="mt-4 h-[4px] bg-red-700 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">
              NielsenIQ 2024
            </p>
          </motion.div>

          {/* STAT 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              <AnimatedNumber value={1} /> in{" "}
              <AnimatedNumber value={5} /> Americans is Latino – the fastest
              growing population in the U.S.
            </p>
            <motion.div
              className="mt-4 h-[4px] bg-red-600 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">
              US Census 2023
            </p>
          </motion.div>

          {/* STAT 3 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight">
              <AnimatedNumber value={55} suffix="%" /> of Gen Z Latinos consume
              bilingual content daily
            </p>
            <motion.div
              className="mt-4 h-[4px] bg-red-700 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
            <p className="mt-2 text-xs uppercase font-bold text-red-700">
              MRI Simmons
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}