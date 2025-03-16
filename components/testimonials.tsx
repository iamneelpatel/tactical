"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Gen. Michael Anderson",
      role: "Defense Department",
      content:
        "TacticalReality's simulation systems have revolutionized our training programs. The immersive VR environments provide our personnel with realistic scenarios that prepare them for real-world situations.",
      avatar: "/images/avatar-general.svg",
      stars: 5,
    },
    {
      name: "Col. Sarah Johnson",
      role: "Military Operations",
      content:
        "The AI-powered analytics platform developed by TacticalReality has significantly improved our decision-making capabilities. We can now process and analyze vast amounts of data in real-time.",
      avatar: "/images/avatar-colonel.svg",
      stars: 5,
    },
    {
      name: "Dr. Robert Chen",
      role: "Defense Research Institute",
      content:
        "Working with TacticalReality on joint research projects has been incredibly productive. Their commitment to ethical AI development and innovation is unmatched in the industry.",
      avatar: "/images/avatar-doctor.svg",
      stars: 5,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            What Our <span className="gradient-text">Partners Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Trusted by defense organizations and military institutions worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

