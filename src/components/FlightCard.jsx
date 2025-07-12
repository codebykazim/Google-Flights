import { Clock, Leaf, ArrowRight } from "lucide-react"
import { formatCurrency, formatTime } from "../service/api"

export const FlightCard = ({ flight }) => {
  const outboundSegment = flight.outbound[0]
  const lastOutboundSegment = flight.outbound[flight.outbound.length - 1]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all p-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Flight Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{outboundSegment.airline.code}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{outboundSegment.airline.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{outboundSegment.flightNumber}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Departure */}
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatTime(outboundSegment.departure.time)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{outboundSegment.departure.airport.code}</div>
            </div>

            {/* Flight Path */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {flight.totalDuration}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                  {flight.stops > 0 && <div className="w-1 h-1 bg-gray-400 rounded-full mx-1"></div>}
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Arrival */}
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatTime(lastOutboundSegment.arrival.time)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{lastOutboundSegment.arrival.airport.code}</div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            {flight.stops === 0 ? (
              <span className="text-green-600 font-medium">Nonstop</span>
            ) : (
              <span>
                {flight.stops} stop{flight.stops > 1 ? "s" : ""}
              </span>
            )}
            {flight.carbonEmissions && (
              <div className="flex items-center gap-1">
                <Leaf className="w-3 h-3 text-green-600" />
                <span className="text-green-600">-23% emissions</span>
              </div>
            )}
          </div>
        </div>

        {/* Price and Book */}
        <div className="flex flex-row lg:flex-col items-center gap-3 lg:text-right">
          <div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(flight.price.amount, flight.price.currency)}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">round trip</div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm whitespace-nowrap">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}
