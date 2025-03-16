"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Cpu, Zap } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4">
              Next-Gen Defense Technology
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl text-gray-900 dark:text-white"
          >
            Advanced <span className="gradient-text">AI-Powered</span> Defense Simulation Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
          >
            Enhancing national security through cutting-edge AI technologies and virtual reality simulations for
            military training and tactical superiority.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center group">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#about"
              className="border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Shield,
              title: "Enhanced Security",
              description: "AI-powered defense systems that safeguard against emerging threats",
            },
            {
              icon: Cpu,
              title: "Advanced Simulations",
              description: "Realistic VR/AR training environments for military personnel",
            },
            {
              icon: Zap,
              title: "Tactical Superiority",
              description: "Autonomous systems for quicker decision-making on the battlefield",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-700 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-blue-500/10 mr-4">
                  <item.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

