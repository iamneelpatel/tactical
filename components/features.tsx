"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Shield, Cpu, Zap, Users, Award, Lock } from "lucide-react"

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: "National Security Enhancement",
      description:
        "Leveraging AI technologies to develop advanced defense systems that safeguard the nation against emerging threats, both conventional and cyber.",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Cpu,
      title: "Military Innovation",
      description:
        "Researching and implementing cutting-edge AI algorithms to enhance the effectiveness and efficiency of military operations.",
      color: "bg-indigo-500/10 text-indigo-500",
    },
    {
      icon: Zap,
      title: "Tactical Superiority",
      description:
        "Developing AI-powered autonomous systems for air, land, and sea domains to maintain superiority on the battlefield.",
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      icon: Users,
      title: "Risk Minimization",
      description:
        "Creating autonomous AI systems to undertake hazardous tasks, reducing the risk to human lives in combat situations.",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: Award,
      title: "Allied Collaboration",
      description:
        "Collaborating with allied nations to share AI technologies and expertise, fostering interoperability and collective defense capabilities.",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Lock,
      title: "Ethical AI Development",
      description:
        "Prioritizing ethical considerations in AI development to ensure responsible use of AI technologies in accordance with international laws.",
      color: "bg-rose-500/10 text-rose-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Core <span className="gradient-text">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Leveraging cutting-edge AI and VR/AR technologies to develop next-generation defense simulation systems
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 card-hover"
            >
              <div className="flex items-start">
                <div className={`p-2 rounded-md mr-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

