"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function ContentHubHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative w-full overflow-hidden pt-10 md:pt-0">
      {/* HERO SECTION */}
      <section className="relative h-[82vh] md:h-screen w-full bg-[#eeebe3] pt-32 md:pt-16 flex">
        {/* FLEX CONTAINER */}
        <div className="relative w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row h-full max-w-none">
          {/* LEFT CONTENT (Text) */}
          <div className="w-full md:w-1/2 flex flex-col relative z-10 h-full -mt-12 md:mt-0">
            <div className="w-full flex items-start md:items-center justify-start gap-4 md:gap-6 relative h-full">
              <motion.div
                className="relative flex-1 flex items-start md:items-center justify-start h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-[600px] md:max-w-full h-full flex flex-col justify-start md:justify-center">
                  <motion.h1
                    className="font-inter font-black uppercase leading-[0.8] tracking-tighter text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem]"
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
                  >
                    OUR
                    <br />
                    EXPERTISE
                    <br />
                    INCLUDES
                  </motion.h1>

                  <div className="relative z-10 w-full mt-8 md:mt-6 space-y-4 md:space-y-2">
                    <motion.div
                      className="relative z-10 text-red-600 font-inter font-extrabold uppercase space-y-4 md:space-y-2 text-left w-full"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.h2
                        variants={lineVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-base md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight font-black relative inline-block"
                      >
                        <span className="relative z-10 py-2 text-lg">Bilingual Storytelling</span>
                      </motion.h2>
                      <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
                        <Link
                          href="/content-hub#cream-block"
                          className="group inline-flex items-center gap-2 text-base md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight transition-all duration-300 hover:text-[#ca0013] hover:translate-x-1 bg-white/90 md:bg-transparent px-4 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none border border-gray-200/30 md:border-none backdrop-blur-sm md:backdrop-blur-none"
                        >
                          <span className="touch-manipulation">
                            <span className="block md:inline">Brand Integration &</span>{" "}
                            <span className="inline-flex items-center gap-1">
                              <span>Partnership Design</span>
                              <svg
                                className="inline-flex w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                      <motion.div variants={lineVariants} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
                        <Link
                          href="/content-hub#red-block"
                          className="group inline-flex items-center gap-2 text-base md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight transition-all duration-300 text-white md:text-red-600 hover:text-[#ca0013] hover:translate-x-1 bg-[#ca0013]/90 md:bg-transparent px-4 py-3 md:px-0 md:py-0 rounded-lg md:rounded-none border border-gray-200/30 md:border-none backdrop-blur-sm md:backdrop-blur-none"
                        >
                          <span className="touch-manipulation">
                            <span className="block md:inline">Full‑Stack Creative</span>{" "}
                            <span className="inline-flex items-center gap-1">
                              <span>Production</span>
                              <svg
                                className="inline-flex w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* PAPERLADY IMAGE - Visible on all screens, fits mobile height */}
          <motion.div
            className="absolute bottom-0 right-0 w-full h-[80vh] md:w-full md:h-full"
            initial={{ opacity: 0, scale: 0.85, x: 160 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/crumple.jpg"
                alt="Illustrated Newspaper"
                fill
                priority
                className="object-cover object-center drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
