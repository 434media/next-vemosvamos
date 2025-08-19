"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RedIdentityPage() {
  return (
    <>
      {/* RED BLOCK with responsive background hand */}
      <div
        className="
          relative w-full
          flex items-center justify-center
          px-6 md:px-10
          bg-[#ca0013]
          bg-[url('/images/hand.png')]
          bg-no-repeat
          bg-right bg-cover           /* fill on small/med */
          xl:bg-contain xl:bg-right   /* show more hand on large/XL */
          "
        style={{ minHeight: "50vh" }}
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-[#ca0013]/20 to-[#ca0013]/60" />
        <motion.p
          className="
            relative z-10
            text-white font-extrabold font-inter uppercase
            text-2xl md:text-4xl lg:text-5xl
            text-center leading-snug
            max-w-[900px] px-2
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          We partner with brands to define and express their identity in ways that
          foster genuine connections with Latinx audiences visually, verbally, and culturally.
        </motion.p>
      </div>

      {/* 🟤 CREAM BLOCK WITH IMAGE AND TEXT */}
      <div
  className="w-full bg-[#eeebe3] flex items-start justify-between px-8 relative"
  style={{
    paddingTop: "4rem",
    paddingBottom: "7rem",
    overflow: "hidden", // Prevents overflow from scaled elements
  }}
>

        {/* LEFT SIDE - ACTIVE IMAGE */}
        <div className="flex flex-col items-start">
          <div
            className="relative"
            style={{
              width: "150px",
              height: "150px",
              transform: "scale(6) translateX(70px) translateY(5px)",
            }}
          >
            <Image
              src="/images/active.png"
              alt="Active Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* === SERIES TEXT BLOCKS === */}
          <div
            className="pl-6 flex flex-col gap-10 uppercase"
            style={{
                transform: "translateX(30px) translateY(100px)", // ⬅️ Push text block down
            }}
            >            {/* === SERIES 1 === */}
            <div>
              <motion.h3
                className="text-red-700 text-3xl md:text-4xl font-extrabold font-inter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Series 1: Stay Local, Look Deeper
              </motion.h3>

              <motion.div
                className="mt-2 h-[3px] bg-red-700"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />

              <motion.p
                className="text-red-800 text-lg md:text-xl mt-4 max-w-md font-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Weekly 1–2 min “Come With Me” videos designed to build trust through local insight + community presence.
              </motion.p>
            </div>

            {/* === SERIES 2 === */}
            <div>
              <motion.h3
                className="text-red-700 text-3xl md:text-4xl font-extrabold font-inter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Series 2: Creator Tips W/Vemos Vamos
              </motion.h3>

              <motion.div
                className="mt-2 h-[3px] bg-red-700"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />

              <motion.p
                className="text-red-800 text-lg md:text-xl mt-4 max-w-md font-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Weekly monologues + carousels on marketing + entrepreneurship insights.
              </motion.p>
            </div>

            {/* === SERIES 3 === */}
            <div>
              <motion.h3
                className="text-red-700 text-3xl md:text-4xl font-extrabold font-inter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Series 3: Vamos A Experimentar
              </motion.h3>

              <motion.div
                className="mt-2 h-[3px] bg-red-700"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />

              <motion.p
                className="text-red-800 text-lg md:text-xl mt-4 max-w-md font-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                A bi-weekly series with creators for rapid innovation and real-time cultural relevance.
              </motion.p>

             {/* RIGHT SIDE - IMAGE AND VIDEO */}
<div className="relative w-full h-full">
  {/* 🎥 VIDEO BLOCK - BACKGROUND */}
  <div
    className="absolute"
    style={{
      width: "320px",
      height: "180px",
      transform: "scale(2.5) translateX(450px) translateY(-200px)",
      zIndex: 0, // back
    }}
  >
    <video
      src="/images/content.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-contain rounded-lg"
    />
  </div>

  {/* IMAGE BLOCK - FOREGROUND */}
  <div
    className="absolute"
    style={{
      width: "200px",
      height: "200px",
      transform: "scale(5) translateX(220px) translateY(-71px)",
      zIndex: 10, // front
    }}
  >
    <Image
      src="/images/micro.png"
      alt="Visual"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>


            </div>
          </div>
        </div>
      </div>


    </>
  );
}
