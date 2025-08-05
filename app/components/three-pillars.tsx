"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function WhoWeReach() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative 
        w-full 
        bg-[#ca0013]      /* Dark red background */
        flex 
        flex-col 
        items-center 
        justify-between
        py-10 
        overflow-hidden
        text-white
      "
    >
      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl flex items-center justify-center px-6"
      >
        <Image
          src="/images/wecreatewhite.png"
          alt="We Create"
          width={1200}
          height={800}
          priority
          className="rounded-lg object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* CITY IMAGE AS FULL-WIDTH BACKGROUND AT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 lg:h-80 z-0">
        <Image
          src="/images/cityblack.png"
          alt="City Skyline"
          fill
          className="object-cover object-bottom opacity-80"
          priority
        />
      </div>
    </section>
  );
}
