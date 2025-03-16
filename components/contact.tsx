"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Mail, Phone, ExternalLink } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "arjun@tacticalreality.com",
      link: "mailto:arjun@tacticalreality.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8169116157",
      link: "tel:+918169116157",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative bg-gray-900 overflow-hidden" id="contact">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have questions about our services or want to schedule a demo? Contact us today.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64"
        >
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center hover:bg-gray-800/80 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="p-4 bg-blue-500/10 rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.details}</p>
                <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Connect <ExternalLink className="ml-1 h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64"
        >
          <p className="text-gray-300 text-lg">
            Our team is available Monday through Friday, 9:00 AM to 5:00 PM PST. We look forward to hearing from you and
            discussing how TacticalReality can enhance your defense capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

