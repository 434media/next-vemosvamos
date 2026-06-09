"use client"

interface OrnamentProps {
  className?: string
  flip?: boolean
}

/**
 * Loteria-style flourish: a small calligraphic curl with a punto.
 * Inherits color via currentColor. Consumer controls display (inline-block,
 * hidden, responsive variants) — nothing baked in here so `hidden` can win.
 */
export function Ornament({ className = "", flip = false }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 80 12"
      fill="none"
      aria-hidden="true"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <circle cx="4" cy="6" r="1.6" fill="currentColor" />
      <path
        d="M10 6 Q 28 0, 46 6 T 76 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="76" cy="6" r="1" fill="currentColor" />
    </svg>
  )
}

/**
 * Larger section divider — three flourishes around a center star.
 */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      aria-hidden="true"
      className={`inline-block ${className}`}
    >
      <path
        d="M4 12 Q 30 4, 60 12 T 108 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M132 12 Q 162 20, 188 12 T 236 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M120 4 L 122 11 L 129 12 L 122 13 L 120 20 L 118 13 L 111 12 L 118 11 Z"
        fill="currentColor"
      />
      <circle cx="4" cy="12" r="1.4" fill="currentColor" />
      <circle cx="236" cy="12" r="1.4" fill="currentColor" />
    </svg>
  )
}

/**
 * All-seeing eye glyph — for "We See" / Cultural Signals.
 * Simplified loteria-style eye with iris.
 */
export function EyeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 20"
      fill="none"
      aria-hidden="true"
      className={`inline-block ${className}`}
    >
      {/* Outer eye shape */}
      <path
        d="M2 10 Q 16 0, 30 10 Q 16 20, 2 10 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Iris */}
      <circle cx="16" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      {/* Pupil */}
      <circle cx="16" cy="10" r="1.8" fill="currentColor" />
      {/* Tiny rays */}
      <line x1="16" y1="0" x2="16" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="18" x2="16" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
