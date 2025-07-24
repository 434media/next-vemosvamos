"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle video loading and playback
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      console.log("Video loaded data")
      setIsVideoLoaded(true)
      playVideo()
    }

    const handlePlaying = () => {
      console.log("Video is playing")
      setIsPlaying(true)
    }

    const handlePause = () => {
      console.log("Video paused")
      setIsPlaying(false)
    }

    const handleError = (e: Event) => {
      console.error("Video error:", e)
      setIsVideoError(true)
      setIsVideoLoaded(false)
    }

    const playVideo = () => {
      console.log("Attempting to play video")
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playback started successfully")
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Auto-play was prevented:", error)
            setIsPlaying(false)
          })
      }
    }

    // Add event listeners
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("playing", handlePlaying)
    video.addEventListener("pause", handlePause)
    video.addEventListener("error", handleError)

    // Force reload the video to ensure it loads properly
    video.load()

    return () => {
      // Clean up event listeners
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("error", handleError)
    }
  }, [isMobile])

  // Manual play function for user interaction
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Loading state */}
      {!isVideoLoaded && !isVideoError && (
        <motion.div
          className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoLoaded ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Error state */}
      {isVideoError && (
        <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center z-10 p-4 text-center">
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
            className="px-6 py-2 bg-white text-[#8b0000] rounded-full hover:bg-white/90 transition-colors font-medium"
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
          className="w-full h-full object-cover"
          playsInline
          loop
          muted
          preload="auto"
          aria-label="434 Media promotional video"
        >
          {isMobile ? (
            <source
              src="https://ampd-asset.s3.us-east-2.amazonaws.com/Horizontal+Intro+on+Loop.mov"
              type="video/mp4"
            />
          ) : (
            <source src="https://ampd-asset.s3.us-east-2.amazonaws.com/Horizontal+Intro+on+Loop.mov" type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Play button overlay (shown when video is not playing) */}
        {!isPlaying && isVideoLoaded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={togglePlayPause}
          >
            <motion.div
              className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
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
  )
}
