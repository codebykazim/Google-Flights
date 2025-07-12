"use client"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { SearchForm } from "./components/SearchForm"
import { FlightResults } from "./components/FlightResults"
import { LoadingSpinner } from "./components/Loader"
import { ErrorMessage } from "./components/ErrorMessage"
import { useFlights } from "./hooks/useFlight"

function AppContent() {
  const { flights, loading, error, totalResults, searchFlights } = useFlights()

  const handleSearch = (searchParams) => {
    searchFlights(searchParams)
  }

  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchForm onSearch={handleSearch} loading={loading} />

        {loading && <LoadingSpinner />}

        {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} />}

        {!loading && !error && flights.length > 0 && <FlightResults flights={flights} totalResults={totalResults} />}

        {!loading && !error && flights.length === 0 && totalResults === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 dark:text-gray-400 text-lg">Search for flights to get started</div>
            <div className="text-gray-400 dark:text-gray-500 mt-2">Enter your departure and arrival cities above</div>
          </div>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>© 2025 Google Flights Clone</p>
            <p className="mt-2 text-sm">This is a demo application for the assestment for Spotter.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
      <AppContent />
  )
}
