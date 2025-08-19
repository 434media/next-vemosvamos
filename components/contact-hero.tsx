"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ContactHero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen w-full bg-[#eeebe3] pt-24 flex">
        {/* FLEX CONTAINER */}
        <div className="relative w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row h-full max-w-none">
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[60vh] md:w-1/2 md:h-full"
            initial={{ opacity: 0, scale: 0.85, x: -160 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/city.png"
                alt="Cityscape illustration"
                fill
                priority
                className="object-cover object-left drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col justify-start items-end pr-2 md:pr-8 z-10">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="font-inter font-black uppercase leading-[0.8] tracking-tighter text-5xl md:text-7xl lg:text-9xl text-right"
                style={{
                  color: "#ca0013",
                  lineHeight: "0.75",
                  letterSpacing: "-0.05em",
                }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
                }}
                aria-label="Opportunities for partnerships"
              >
                OPPORTUNITIES
                <br />
                FOR
                <br />
                PARTNERSHIPS
              </motion.h1>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute z-20 bottom-24 right-4 md:bottom-8 md:right-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link
            href="#partnerships"
            className="group relative block w-[220px] md:w-[400px] cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-lg"
            aria-label="Go to partnerships section"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-6, -8, -6] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/images/bigv.png"
                alt=""
                width={500}
                height={500}
                className="object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-4 left-25 md:bottom-0 md:left-45 w-[75%]"
                animate={{ y: [0, -15, 0], rotate: [6, 8, 6] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src="/images/littlev.png"
                  alt=""
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
