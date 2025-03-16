"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    "State-of-the-art AI algorithms for defense applications",
    "Immersive VR/AR training environments",
    "Autonomous systems for hazardous operations",
    "Ethical AI development practices",
    "Collaboration with allied defense organizations",
    "Continuous innovation in defense technology",
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-lg" />
              <div className="relative z-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/about.webp"
                  alt="About TacticalReality Simulations"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="gradient-text">TacticalReality</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              TacticalReality Simulations Private Limited is a pioneering defense technology company specializing in
              AI-powered simulation systems. We develop cutting-edge solutions that enhance national security, improve
              military capabilities, and ensure tactical superiority.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our mission is to leverage advanced AI and virtual reality technologies to create immersive training
              environments and autonomous systems that minimize human risk while maximizing operational effectiveness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

