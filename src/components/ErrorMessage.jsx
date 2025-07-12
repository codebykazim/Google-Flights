"use client"
import { AlertCircle, RefreshCw } from "lucide-react"

export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="max-w-md mx-auto bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
      <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
      <h3 className="text-lg font-medium text-red-900 dark:text-red-400 mb-2">Something went wrong</h3>
      <p className="text-red-700 dark:text-red-300 mb-4 text-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      )}
    </div>
  )
}
