"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "IMG" ||
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "SPAN" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main heart cursor with color radiation */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Radiating color layers */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 28C16 28 3 20 3 11C3 8.5 4 6 6.5 5C9 4 11.5 5 13 7C14 8.5 15 10 16 10C17 10 18 8.5 19 7C20.5 5 23 4 25.5 5C28 6 29 8.5 29 11C29 20 16 28 16 28Z"
              fill="#ff0066"
              fillOpacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.3, 0.7],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 28C16 28 3 20 3 11C3 8.5 4 6 6.5 5C9 4 11.5 5 13 7C14 8.5 15 10 16 10C17 10 18 8.5 19 7C20.5 5 23 4 25.5 5C28 6 29 8.5 29 11C29 20 16 28 16 28Z"
              fill="#00ffff"
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.1, 0.5],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 28C16 28 3 20 3 11C3 8.5 4 6 6.5 5C9 4 11.5 5 13 7C14 8.5 15 10 16 10C17 10 18 8.5 19 7C20.5 5 23 4 25.5 5C28 6 29 8.5 29 11C29 20 16 28 16 28Z"
              fill="#ffff00"
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Main heart with inversion effect */}
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            mixBlendMode: isHovering ? "difference" : "normal",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 28C16 28 3 20 3 11C3 8.5 4 6 6.5 5C9 4 11.5 5 13 7C14 8.5 15 10 16 10C17 10 18 8.5 19 7C20.5 5 23 4 25.5 5C28 6 29 8.5 29 11C29 20 16 28 16 28Z"
              fill="#ca0013"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  )
}
