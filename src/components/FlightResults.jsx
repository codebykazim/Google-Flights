import { Filter, SortAsc, TrendingDown, Zap } from "lucide-react"
import { FlightCard } from "./FlightCard"

export const FlightResults = ({ flights, totalResults }) => {
  if (flights.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 dark:text-gray-400 text-lg">No flights found</div>
        <div className="text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search criteria</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-normal text-gray-900 dark:text-white">Choose a departing flight</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Sorted by best flights</p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
            <Filter className="w-4 h-4" />
            All filters
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
            <SortAsc className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Best departing flights</span>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">$1,224</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Ranked based on price and convenience</div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Cheapest</span>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">$602</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">1 stop • 6h 15m</div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Fastest</span>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">3h 5m</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Nonstop • $1,456</div>
        </div>
      </div>

      {/* Flight List */}
      <div className="space-y-3">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {flights.length < totalResults && (
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium py-2 px-4 rounded-md transition-colors">
            Show more flights
          </button>
        </div>
      )}
    </div>
  )
}
