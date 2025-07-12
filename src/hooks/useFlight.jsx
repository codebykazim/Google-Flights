"use client"

import { useState, useCallback } from "react"
import { apiClient } from "../service/api"

export const useFlights = () => {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalResults, setTotalResults] = useState(0)

  const searchFlights = useCallback(async (searchParams) => {
    setLoading(true)
    setError(null)

    try {
      const response = await apiClient.get("/api/v1/flights/searchFlights", {
        originSkyId: searchParams.origin,
        destinationSkyId: searchParams.destination,
        date: searchParams.departureDate,
        cabinClass: searchParams.cabinClass,
        adults: searchParams.passengers.adults.toString(),
        children: searchParams.passengers.children.toString(),
        infants: searchParams.passengers.infants.toString(),
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
      })

      console.log("API Response:", response)

      const flightsData = response.data?.itineraries || response.itineraries || response.flights || response.data || []

      console.log("Flights data found:", flightsData)

      setFlights(flightsData)
      setTotalResults(flightsData.length || 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setFlights([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    flights,
    loading,
    error,
    totalResults,
    searchFlights,
  }
}
