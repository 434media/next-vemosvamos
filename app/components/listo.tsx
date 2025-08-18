"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Newsletter } from "./newsletter";

export default function Listo() {
  const [showModal, setShowModal] = useState(false);
  return (
  <section className="relative w-full h-[90vh] md:h-screen bg-[#eee3d2] pt-2 pb-2 md:pt-24 md:pb-0 overflow-hidden flex items-center justify-center aspect-[4/5] md:aspect-auto">
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/buildingvv.png"
          alt="Listo Building Background"
          fill
          priority
          className="object-cover object-left md:object-left"
          style={{ transform: "translateY(30px) scale(1.25)" }}
        />
      </div>

      {/* === FOREGROUND CONTENT === */}
  <div className="relative z-10 w-full h-full">
    {/* Car image for desktop - left side, own parent */}
    <div className="hidden md:block absolute left-0 bottom-0 z-20 w-[70vw] h-auto">
      <Image src="/images/car.png" alt="Car" width={1800} height={600} className="w-full h-auto" />
    </div>
    {/* Car image for mobile - maximized for 4:5 aspect, own parent */}
    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-[100vw] h-auto md:hidden">
      <Image src="/images/car.png" alt="Car" width={900} height={400} className="w-full h-auto" />
    </div>
    {/* Logo and button grouped, centered in section */}
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 relative z-30 md:-mt-16 -mt-24">
      {/* Logo Image - larger and centered at top */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
        className="w-full flex justify-center mt-4"
      >
        <Image
          src="/images/listo.png"
          alt="listo"
          width={700}
          height={500}
          className="object-contain w-[90vw] h-auto max-w-[700px] md:w-[700px] md:h-auto mx-auto"
        />
      </motion.div>
      {/* Button - centered in section */}
      <div className="w-full flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ca0013] text-white font-bold uppercase tracking-wide px-8 py-4 text-lg rounded-full shadow-md mt-2 mx-auto"
          onClick={() => setShowModal(true)}
        >
          Join Our Newsletter
        </motion.button>
      </div>

      {/* Modal for Newsletter */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-lg">
            {/* Pop-out animation */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-[#ca0013] animate-modal-pop">
              <button
                className="absolute top-6 right-6 text-3xl text-[#ca0013] hover:text-[#a80010] bg-white rounded-full border border-[#ca0013] p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#ca0013]"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                style={{ zIndex: 10 }}
              >
                &times;
              </button>
              {/* Vemos Vamos CTA message */}
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-[#ca0013]">Stay Connected with Vemos Vamos</h2>
                <p className="text-base text-[#222] mt-2">Sign up for our newsletter and be the first to see new opportunities, stories, and resources for bicultural families.</p>
              </div>
              <div className="mt-8">
                <div className="[&_*:is(input,button)]:bg-[#f5f5f5] [&_*:is(input,button)]:text-[#ca0013] [&_*:is(input,button)]:border-[#ca0013] [&_*:is(input,button)]:placeholder-[#ca0013]/60 [&_*:is(.bg-white\/10)]:bg-[#f5f5f5] [&_*:is(.text-white)]:text-[#222] [&_*:is(.text-white\/80)]:text-[#ca0013] [&_*:is(.border-white\/20)]:border-[#ca0013]">
                  <Newsletter currentLanguage="en" />
                </div>
              </div>
            </div>
          </div>
          {/* Modal pop-out animation keyframes */}
          <style jsx>{`
            @keyframes modal-pop {
              0% { transform: scale(0.8); opacity: 0; }
              80% { transform: scale(1.05); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-modal-pop {
              animation: modal-pop 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            }
          `}</style>
        </div>
      )}
    </div>
  </div>
    </section>
  );
}
