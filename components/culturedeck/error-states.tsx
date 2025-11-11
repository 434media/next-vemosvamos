"use client"

import { motion } from "motion/react"
import Link from "next/link"

interface CultureDeckErrorProps {
  error: string
  reset?: () => void
}

export function CultureDeckError({ error, reset }: CultureDeckErrorProps) {
  return (
    <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Unable to Load Culture Deck
          </h2>
          <p className="text-[#1a1a1a]/70 mb-6">
            We're having trouble loading the latest articles. This might be a temporary issue.
          </p>
          <p className="text-sm text-[#1a1a1a]/50 mb-8">
            Error: {error}
          </p>
          <div className="flex gap-4 justify-center">
            {reset && (
              <button
                onClick={reset}
                className="px-6 py-3 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 transition-colors font-semibold text-sm uppercase tracking-wider"
              >
                Try Again
              </button>
            )}
            <Link
              href="/"
              className="px-6 py-3 border-2 border-[#ca0013] text-[#ca0013] rounded-full hover:bg-[#ca0013] hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function CultureDeckLoading() {
  return (
    <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Loading Hero */}
        <div className="md:text-center mb-16 max-w-4xl mx-auto">
          <div className="h-16 bg-[#1a1a1a]/10 rounded-lg mb-6 animate-pulse" />
          <div className="h-8 bg-[#ca0013]/20 rounded-lg mb-8 animate-pulse" />
          <div className="h-6 bg-[#1a1a1a]/10 rounded-lg animate-pulse" />
        </div>

        {/* Loading Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 w-32 bg-white/50 rounded-lg animate-pulse" />
          ))}
        </div>

        {/* Loading Articles */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-[#1a1a1a]/10">
            <div className="h-8 bg-[#1a1a1a]/10 rounded-lg animate-pulse" />
          </div>
          
          <div className="divide-y divide-[#1a1a1a]/10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#ca0013]/30 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <div className="flex gap-3 mb-2">
                      <div className="h-4 w-20 bg-[#1a1a1a]/10 rounded animate-pulse" />
                      <div className="h-4 w-24 bg-[#ca0013]/20 rounded animate-pulse" />
                    </div>
                    <div className="h-6 bg-[#1a1a1a]/10 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-[#1a1a1a]/10 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CultureDeckEmptyState() {
  return (
    <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">🃏</div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            No Articles Yet
          </h2>
          <p className="text-[#1a1a1a]/70 mb-6">
            The culture deck is being prepared. Check back soon for insights, trends, and creative thought leadership.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 transition-colors font-semibold text-sm uppercase tracking-wider"
          >
            Explore Other Content
          </Link>
        </motion.div>
      </div>
    </div>
  )
}