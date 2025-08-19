"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Language content
  const content = {
    letsConnect: "Let's Connect",
    followUs: "FOLLOW US",
    getInTouch: "VEMOS VAMOS NEWSLETTER",
    contactDescription: "Fill out the form below and we'll get back to you soon.",
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      playVideo()
    }

    const handlePlaying = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleError = (e: Event) => {
      console.error("Video error:", e)
      setIsVideoError(true)
      setIsVideoLoaded(false)
    }

    const playVideo = () => {
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Auto-play was prevented:", error)
            setIsPlaying(false)
          })
      }
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("playing", handlePlaying)
    video.addEventListener("pause", handlePause)
    video.addEventListener("error", handleError)

    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("error", handleError)
    }
  }, [isMobile])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play failed:", err))
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const retryVideo = () => {
    setIsVideoError(false)
    setIsVideoLoaded(false)
    if (videoRef.current) {
      videoRef.current.load()
    }
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      url: "https://www.instagram.com/vemos.vamos/",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      url: "https://www.linkedin.com/company/vemosvamos/",
      color: "#0077B5",
    },
    {
      name: "Facebook",
      icon: "ri-facebook-fill",
      url: "https://www.facebook.com/vemosvamos",
      color: "#1877F2",
    },
  ]

  const pageLinks = [
    { name: "WHY WE'RE DIFFERENT", href: "/about" },
    { name: "CONTENT HUB", href: "/content-hub" },
    { name: "CONNECT WITH US", href: "/contact" },
  ]

  return (
    <motion.div
      className="fixed inset-0 flex flex-col overflow-hidden z-[60]"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      style={{
        background: `
          radial-gradient(circle at 20% 20%, #ca001360 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #ca001340 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #ca001320 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, #ca001310 0%, transparent 50%)
        `,
        backgroundColor: "#1A1A1A",
      }}
    >
      {/* Header with Logo and Close Button - Fixed */}
      <motion.div
        className="flex justify-between items-center p-4 md:p-6 flex-shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/" onClick={onClose} className="text-white hover:text-white/80 transition-colors">
          <span className="sr-only">Vemos Vamos</span>
          <motion.svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-10 md:h-10"
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        </Link>
        <motion.button
          onClick={onClose}
          className="text-white/80 hover:text-[#ca0013] transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-close-line text-2xl md:text-3xl" />
        </motion.button>
      </motion.div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
        <div className="h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:order-2">
            <div className="relative h-48 md:h-64 lg:h-full lg:min-h-[400px]">
              {/* Loading state */}
              {!isVideoLoaded && !isVideoError && (
                <motion.div
                  className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isVideoLoaded ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-t-[#ca0013] border-r-transparent border-b-transparent border-l-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>
              )}

              {/* Error state */}
              {isVideoError && (
                <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center p-4 text-center">
                  <svg className="w-16 h-16 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <h3 className="text-white text-xl font-bold mb-2">Video Error</h3>
                  <p className="text-white/80 mb-4">Unable to load video content</p>
                  <button
                    onClick={retryVideo}
                    className="px-6 py-2 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 transition-colors font-medium"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Video */}
              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-lg"
                  playsInline
                  loop
                  muted
                  preload="auto"
                  aria-label="Vemos Vamos promotional video"
                >
                  {isMobile ? (
                    <source
                      src="https://ampd-asset.s3.us-east-2.amazonaws.com/Horizontal+Intro+on+Loop.mov"
                      type="video/mp4"
                    />
                  ) : (
                    <source src="https://ampd-asset.s3.us-east-2.amazonaws.com/VV_Intro_V01.mp4" type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </video>

                {/* Overlay gradient for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg" />

                {/* Play button overlay */}
                {!isPlaying && isVideoLoaded && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={togglePlayPause}
                  >
                    <motion.div
                      className="w-20 h-20 flex items-center justify-center bg-[#ca0013]/30 backdrop-blur-sm rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(202, 0, 19, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          <div className="flex-1 lg:w-1/2 lg:order-1 p-3 md:p-4 lg:p-6">
            <div className="h-full flex flex-col justify-center max-w-md mx-auto lg:max-w-none space-y-6 md:space-y-8">
              {/* Page Links Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex flex-col items-center space-y-2 md:space-y-3">
                  {pageLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="w-full"
                    >
                      <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white w-full py-2 md:py-3 hover:bg-[#ca0013]/20 rounded-lg transition-all duration-300 cursor-pointer"
                        whileHover={{
                          textShadow: [
                            "0 0 10px rgba(202, 0, 19, 0.5)",
                            "0 0 20px rgba(202, 0, 19, 0.8)",
                            "0 0 30px rgba(202, 0, 19, 1)",
                          ],
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        onClick={onClose}
                      >
                        <Link href={link.href} className="block w-full h-full">
                          {link.name}
                        </Link>
                      </motion.h2>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex flex-col items-center space-y-2 md:space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="w-full"
                    >
                      <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white w-full py-2 md:py-3 hover:bg-[#ca0013]/20 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-3"
                        whileHover={{
                          textShadow: [`0 0 10px ${link.color}80`, `0 0 20px ${link.color}`, `0 0 30px ${link.color}`],
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-3 w-full h-full"
                        >
                          <i className={`${link.icon} text-xl md:text-2xl`} style={{ color: link.color }}></i>
                          <span>{link.name.toUpperCase()}</span>
                        </a>
                      </motion.h2>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
