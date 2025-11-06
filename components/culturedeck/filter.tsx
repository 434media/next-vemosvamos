"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { CardType } from "../../lib/types/culturedeck"

interface CardTypeInfo {
  type: CardType | "all"
  label: string
  description: string
  icon: string
}

interface CultureDeckFilterProps {
  cardTypes: CardTypeInfo[]
  selectedFilter: CardType | "all"
  onFilterChange: (filter: CardType | "all") => void
  filterLabel: string
  clearFiltersLabel: string
}

export function CultureDeckFilter({
  cardTypes,
  selectedFilter,
  onFilterChange,
  filterLabel,
  clearFiltersLabel,
}: CultureDeckFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const selectedCardType = cardTypes.find((ct) => ct.type === selectedFilter) || cardTypes[0]

  const handleFilterChange = (type: CardType | "all") => {
    onFilterChange(type)
    setIsDropdownOpen(false)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-sm uppercase tracking-wider text-[#1a1a1a] font-semibold">{filterLabel}</h2>
        {selectedFilter !== "all" && (
          <button
            onClick={() => onFilterChange("all")}
            className="text-sm uppercase tracking-wider text-[#ca0013] hover:underline font-semibold transition-colors"
          >
            {clearFiltersLabel}
          </button>
        )}
      </div>

      <div className="lg:hidden">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-4 rounded-lg border-2 border-[#1a1a1a]/20 bg-white text-[#1a1a1a] hover:border-[#ca0013] transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedCardType.icon}</span>
              <div className="text-left">
                <div className="text-sm uppercase font-semibold tracking-wider">{selectedCardType.label}</div>
                {selectedCardType.description && (
                  <div className="text-xs mt-1 opacity-80">{selectedCardType.description}</div>
                )}
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <motion.div
              className="absolute z-10 w-full mt-2 bg-white rounded-lg border-2 border-[#1a1a1a]/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {cardTypes.map((cardType) => (
                <button
                  key={cardType.type}
                  onClick={() => handleFilterChange(cardType.type)}
                  className={`w-full p-4 flex items-center gap-3 transition-colors ${
                    selectedFilter === cardType.type
                      ? "bg-[#ca0013] text-white"
                      : "bg-white text-[#1a1a1a] hover:bg-[#eeebe3]"
                  }`}
                >
                  <span className="text-2xl">{cardType.icon}</span>
                  <div className="text-left">
                    <div className="text-sm uppercase font-semibold tracking-wider">{cardType.label}</div>
                    {cardType.description && <div className="text-xs mt-1 opacity-80">{cardType.description}</div>}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4 xl:grid-cols-7 gap-3">
        {cardTypes.map((cardType) => (
          <motion.button
            key={cardType.type}
            onClick={() => onFilterChange(cardType.type)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedFilter === cardType.type
                ? "border-[#ca0013] bg-[#ca0013] text-white"
                : "border-[#1a1a1a]/20 bg-white text-[#1a1a1a] hover:border-[#ca0013]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-3xl mb-2">{cardType.icon}</div>
            <div className="text-xs uppercase font-semibold tracking-wider">{cardType.label}</div>
            {cardType.description && <div className="text-xs mt-1 opacity-80">{cardType.description}</div>}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
