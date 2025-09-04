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

      <div className="lg:hidden absolute bottom-0 left-0 z-20 w-[70%] h-[60%] xs:w-[75%] xs:h-[65%] sm:w-[70%] sm:h-[60%] md:w-[65%] md:h-[60%] lg:w-[70%] lg:h-[65%] xl:w-[75%] xl:h-[70%]">
        <Image
          src="/images/car.png"
          alt="Vintage car"
          fill
          className="object-contain object-bottom-left drop-shadow-lg"
          sizes="(max-width: 768px) 75vw, 70vw"
        />
      </div>

      <div className="relative z-10 w-full min-h-full flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full relative md:-mt-16">
          <div className="absolute top-4 md:top-8 left-170 -translate-x-1/2 z-30">
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
                className="object-contain w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto drop-shadow-2xl scale-55"
                priority
              />
            </motion.div>

            <div className="flex justify-center md:-mt-10 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-6 py-3 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
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
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ca0013] to-transparent"></div>
              </div>

              <button
                className="absolute top-8 -right-2 md:top-2 md:right-20 text-[#ca0013] hover:text-[#a80010] bg-white rounded-full border-2 border-[#ca0013] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#ca0013]/30 transition-all duration-200 z-20"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowModal(false)
                }}
                aria-label={t("listo.closeNewsletterSignup")}
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

                {/* Newsletter Form */}
                <motion.div
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Newsletter currentLanguage={language} />
                </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
