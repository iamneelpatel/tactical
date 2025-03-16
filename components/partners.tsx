"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    { name: "Defense Department", logo: "/images/partner-defense-dept.svg" },
    { name: "Military Research Institute", logo: "/images/partner-research.svg" },
    { name: "National Security Agency", logo: "/images/partner-security.svg" },
    { name: "Allied Forces", logo: "/images/partner-allied.svg" },
    { name: "Defense Technology Corporation", logo: "/images/partner-tech.svg" },
    { name: "Strategic Defense Initiative", logo: "/images/partner-strategic.svg" },
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Trusted by Leading <span className="gradient-text">Defense Organizations</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={80}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

