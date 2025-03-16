"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info } from "lucide-react"

export default function ConfidentialityNotification() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const closeNotification = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-24 right-4 z-50 w-full max-w-sm bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-white">Confidentiality Notice</p>
                <p className="mt-1 text-sm text-gray-300">
                  Due to confidentiality agreements with our defense partners, sample work and case studies cannot be
                  displayed on this website. Please contact us directly for detailed information about our capabilities
                  and services.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={closeNotification}
                  className="bg-gray-700/50 rounded-md inline-flex text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

