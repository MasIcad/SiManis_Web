'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Thermometer, Battery, Droplet, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bio-Electronic Safety Loop',
    description: 'Creates a safe closed-loop circuit utilizing the human body\'s natural resistance.',
    color: 'digital-cyan',
    gradient: 'from-digital-cyan/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'Smart Current Control',
    description: 'Dynamically balances electrical output to maintain stable micro-current (20-200 µA).',
    color: 'sweet-coral',
    gradient: 'from-sweet-coral/20 to-transparent',
  },
  {
    icon: Thermometer,
    title: 'Adaptive Thermal Comfort',
    description: 'Maintains optimal temperature range (25-35°C) for taste response.',
    color: 'medical-blue',
    gradient: 'from-medical-blue/20 to-transparent',
  },
]

export function Features() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4 font-plus-jakarta">
            The Science Behind{' '}
            <span className="text-gradient">Sweet Sensation</span>
          </h2>
          <p className="text-lg text-medical-blue/70">
            Understanding how SiManis creates sugar-free sweetness through innovative bio-electronics
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 rounded-2xl border border-tech-silver bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-${feature.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-3">{feature.title}</h3>
                <p className="text-medical-blue/70 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}