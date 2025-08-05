"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutHero() {
  const textLines = [
    "FEMALE-LED",
    "Authentically bicultural",
    "Deeply embedded network",
  ];

  const [displayedText, setDisplayedText] = useState(["", "", ""]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      if (lineIndex < textLines.length) {
        if (charIndex <= textLines[lineIndex].length) {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[lineIndex] = textLines[lineIndex].slice(0, charIndex);
            return newText;
          });
          charIndex++;
          setTimeout(typeNextChar, 80); // typing speed
        } else {
          lineIndex++;
          charIndex = 0;
          setTimeout(typeNextChar, 300); // delay before next line
        }
      }
    };

    typeNextChar();
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* HERO SECTION FIXED IN VIEW */}
      <section
        className="
          fixed
          topy-15
          left-0
          h-screen
          w-full
          bg-[#eeebe3]
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          z-0
          pt-24
        "
      >
        {/* TOP LEFT TEXT */}
        <motion.div
          className="absolute top-6 left-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          A Multicultural Brand Studio
        </motion.div>

        {/* TOP RIGHT TEXT */}
        <motion.div
          className="absolute top-6 right-6 text-red-700 font-inter uppercase text-base md:text-lg tracking-wide text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Powered by 434 Media
        </motion.div>

        {/* MAIN IMAGE with adjustable settings */}
        <motion.div
          className="
            relative
            w-full
            h-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/whywerediff.png"
            alt="Why We're Different"
            fill
            priority
            className="object-contain object-center drop-shadow-lg"
            style={{
              transform: "scale(1.09)", // ✅ Adjust scale
              top: "-50px",          // ✅ Adjust vertical positioning
              left: "0px",           // ✅ Adjust horizontal positioning
            }}
          />
        </motion.div>

        {/* CENTER-LEFT TYPING TEXT */}
        <motion.div
  className="absolute right-[18%] top-[65%] -translate-y-1/2 text-red-600 font-inter text-3xl md:text-5xl font-extrabold leading-relaxed md:leading-[1.4] text-left"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
  style={{
    maxWidth: "40%", // Adjustable width
  }}
>
  {displayedText.map((line, index) => (
    <div key={index}>{line}</div>
  ))}
</motion.div>


        {/* OPTIONAL SECONDARY IMAGE */}
        <motion.div
          className="
            absolute
            right-[400px]
            top-[65%]
            -translate-y-1/2
            w-[300px]
            md:w-[350px]
            lg:w-[400px]
            z-20
          "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          {/* Optional second image */}
        </motion.div>
      </section>

      {/* SPACER */}
      <div className="h-screen"></div>

      {/* OVERLAPPING SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl">
        <div className="relative w-full px-8 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 uppercase">
            About 434 Media
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl">
            At 434 Media, we’re redefining multicultural branding by creating authentic,
            impactful connections that go beyond translation—we build cultural bridges.
          </p>
        </div>
      </section>
    </div>
  );
}
