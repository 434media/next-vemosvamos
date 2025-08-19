"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react" // Added Lucide React X icon import
import { Newsletter } from "./newsletter"

export default function Listo() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      className="relative w-full min-h-screen bg-[#eee3d2] overflow-hidden"
      role="banner"
      aria-label="Listo newsletter signup section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/buildingvv.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-screen">
          <div className="absolute top-8 right-8 z-30">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/listo.png"
                alt="Listo logo"
                width={600}
                height={400}
                className="object-contain w-[900px] h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30"
                onClick={() => setShowModal(true)}
                aria-label="Open newsletter signup"
              >
                Join Our Newsletter
              </motion.button>
            </div>
          </div>

          {/* Car image for desktop */}
          <div className="absolute left-0 bottom-0 z-20 w-[70vw] h-auto">
            <Image
              src="/images/car.png"
              alt="Vintage car decoration"
              width={1800}
              height={600}
              className="w-full h-auto"
              sizes="70vw"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col w-full min-h-screen relative">
          <div className="flex justify-center pt-8 px-4 z-30 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <Image
                src="/images/listo.png"
                alt="Listo logo"
                width={700}
                height={500}
                className="object-contain w-[95vw] h-auto max-w-[400px] drop-shadow-2xl"
                priority
              />

              <div className="absolute -bottom-16 right-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30"
                  onClick={() => setShowModal(true)}
                  aria-label="Open newsletter signup"
                >
                  Join Newsletter
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Car image for mobile */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-full">
            <Image
              src="/images/car.png"
              alt="Vintage car decoration"
              width={900}
              height={400}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false)
            }
          }}
        >
          <motion.div
            className="relative w-full max-w-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-[#eee3d2] rounded-2xl shadow-2xl p-6 md:p-8 border-4 border-[#ca0013] relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ca0013] to-transparent"></div>
              </div>

              <button
                className="absolute top-1 right-1 md:top-2 md:right-2 text-[#ca0013] hover:text-[#a80010] bg-white rounded-full border-2 border-[#ca0013] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30 transition-all duration-200 z-20"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowModal(false)
                }}
                aria-label="Close newsletter signup"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="relative z-10 pt-4 md:pt-6">
                <motion.div
                  className="text-center mb-6 md:mb-8 p-4 md:p-6 bg-[#ca0013]/10 rounded-xl border border-[#ca0013]/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-[#ca0013] text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-relaxed">
                    Stay connected with bi-cultural resources and partnership opportunities
                  </p>
                </motion.div>

                {/* Newsletter Form */}
                <motion.div
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="[&_*:is(input)]:bg-white [&_*:is(input)]:text-[#ca0013] [&_*:is(input)]:border-[#ca0013] [&_*:is(input)]:placeholder-[#ca0013]/60 [&_*:is(input)]:focus:ring-[#ca0013] [&_*:is(button)]:bg-[#ca0013] [&_*:is(button)]:text-[#eee3d2] [&_*:is(button)]:border-[#ca0013] [&_*:is(button)]:hover:bg-[#a80010] [&_*:is(.bg-white\/10)]:bg-white [&_*:is(.text-white)]:text-[#ca0013] [&_*:is(.text-white\/80)]:text-[#ca0013]/80 [&_*:is(.border-white\/20)]:border-[#ca0013]/20">
                    <Newsletter currentLanguage="en" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
