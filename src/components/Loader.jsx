import { Plane } from "lucide-react"

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-3 border-blue-200 border-t-blue-600"></div>
        <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Searching for flights</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Finding the best deals for you...</p>
      </div>
    </div>
  )
}
