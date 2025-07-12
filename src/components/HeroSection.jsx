import React from "react"

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 400L200 200L400 250L600 150L800 200L1000 100L1200 150V400H0Z"
            fill="rgba(75, 85, 99, 0.3)"
          />
          <path
            d="M0 400L150 250L350 300L550 180L750 220L950 120L1200 170V400H0Z"
            fill="rgba(55, 65, 81, 0.4)"
          />
          <path
            d="M0 400L100 300L300 350L500 220L700 260L900 160L1200 200V400H0Z"
            fill="rgba(31, 41, 55, 0.5)"
          />

          <g transform="translate(800, 120)">
            <path d="M0 8L20 0L25 2L30 8L25 10L20 12L0 8Z" fill="#EF4444" />
            <path d="M15 8L35 4L40 8L35 12L15 8Z" fill="#F59E0B" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Flights
        </h1>
      </div>
    </div>
  )
}
