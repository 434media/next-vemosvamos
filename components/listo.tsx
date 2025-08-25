"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { Newsletter } from "./newsletter"
import { useLanguage } from "@/lib/language-context"

export default function Listo() {
  const [showModal, setShowModal] = useState(false)
  const { t, language } = useLanguage()

  return (
    <section
      className="relative w-full min-h-[60vh] xs:min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-screen xl:min-h-[90vh] bg-[#eee3d2] overflow-hidden"
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

      <div className="relative z-10 w-full min-h-full flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full relative md:-mt-16">
          <div className="absolute top-4 md:top-6 lg:top-8 xl:top-8 left-170 -translate-x-1/2 z-30">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/listo.png"
                alt="Listo logo"
                width={400}
                height={300}
                className="object-contain w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto drop-shadow-2xl scale-65"
                priority
              />
            </motion.div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-6 md:px-7 lg:px-8 xl:px-10 py-3 md:py-3.5 lg:py-4 xl:py-5 text-base md:text-lg lg:text-xl xl:text-2xl rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30"
                onClick={() => setShowModal(true)}
                aria-label={t("listo.openNewsletterSignup")}
              >
                {t("listo.joinNewsletter")}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col w-full min-h-full relative">
          <div className="flex justify-center pt-6 xs:pt-8 sm:pt-10 px-3 xs:px-4 sm:px-6 z-30 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative xs:-mt-12"
            >
              <Image
                src="/images/listo.png"
                alt="Listo logo"
                width={500}
                height={350}
                className="object-contain w-[60vw] xs:w-[65vw] sm:w-[70vw] h-auto max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] drop-shadow-2xl scale-60"
                priority
              />

              <div className="absolute -bottom-12 xs:-bottom-8 sm:-bottom-16 xs:right-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3.5 text-sm xs:text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30"
                  onClick={() => setShowModal(true)}
                  aria-label={t("listo.openNewsletterSignup")}
                >
                  {t("listo.joinNewsletterMobile")}
                </motion.button>
              </div>
            </motion.div>
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
                aria-label={t("listo.closeNewsletterSignup")}
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
                    {t("listo.stayConnected")}
                  </p>
                </motion.div>

                {/* Newsletter Form */}
                <motion.div
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="[&_*:is(input)]:bg-white [&_*:is(input)]:text-[#ca0013] [&_*:is(input)]:border-[#ca0013] [&_*:is(input)]:placeholder-[#ca0013]/60 [&_*:is(button)]:bg-[#ca0013] [&_*:is(button)]:text-[#eee3d2] [&_*:is(button)]:border-[#ca0013] [&_*:is(button)]:hover:bg-[#a80010] [&_*:is(.bg-white\/10)]:bg-white [&_*:is(.text-white)]:text-[#ca0013] [&_*:is(.text-white\/80)]:text-[#ca0013]/80 [&_*:is(.border-white\/20)]:border-[#ca0013]/20">
                    <Newsletter currentLanguage={language} />
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
