"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Virtual Combat Training",
      description:
        "Immersive VR environments for realistic combat training scenarios, allowing military personnel to practice tactics and decision-making in a safe environment.",
      details: [
        "High-fidelity 3D environments replicating actual combat zones",
        "Haptic feedback systems for realistic weapon handling",
        "AI-powered NPCs that adapt to trainee behavior and skill level",
        "Performance analytics and after-action review capabilities",
        "Customizable scenarios for different threat levels and mission types",
        "Multi-user training for squad-based tactical exercises",
      ],
      image: "/images/virtual-combat-training.webp",
    },
    {
      title: "Tactical Simulation Systems",
      description:
        "Advanced AI-powered simulation systems that model complex battlefield scenarios, enabling commanders to test strategies and responses to various threats.",
      details: [
        "Real-time strategy simulation with dynamic threat assessment",
        "Predictive modeling of enemy behavior based on historical data",
        "Integration with actual command and control systems",
        "Scenario generation based on current geopolitical situations",
        "Resource allocation optimization for maximum operational efficiency",
        "Multi-domain warfare simulation (land, sea, air, cyber, space)",
      ],
      image: "/images/tactical-simulation.webp",
    },
    {
      title: "Defense Analytics Platform",
      description:
        "Data-driven analytics platform that processes and analyzes vast amounts of defense-related information to identify patterns and potential threats.",
      details: [
        "Real-time threat detection using advanced machine learning algorithms",
        "Pattern recognition across disparate data sources",
        "Anomaly detection for early warning of unusual activities",
        "Secure cloud-based infrastructure with military-grade encryption",
        "Customizable dashboards for different security clearance levels",
        "Integration with existing intelligence gathering systems",
      ],
      image: "/images/def-analytics-platform.webp",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive defense simulation solutions powered by cutting-edge AI and virtual reality technologies
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

