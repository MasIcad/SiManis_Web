'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { InteractiveSimulator } from './interactive-simulator'
import { Shield, Zap, ThermometerSun } from 'lucide-react'

const cards = [
  {
    icon: Shield,
    title: 'Bio-Electronic Safety Loop',
    description: 'Creates a safe closed-loop circuit utilizing the human body\'s natural resistance, flowing gently from the tongue back to the handle grounding plate to complete the circuit safely.',
    color: 'digital-cyan',
  },
  {
    icon: Zap,
    title: 'Smart Constant Current Control',
    description: 'Smart built-in safety circuit dynamically balances electrical output to maintain stable and safe micro-current (20-200 µA), ensuring consistent experience without any sudden shocks.',
    color: 'sweet-coral',
  },
  {
    icon: ThermometerSun,
    title: 'Adaptive Thermal Comfort',
    description: 'Automated thermal control system maintains a perfectly comfortable temperature range (25-35°C) to trigger taste responses smoothly.',
    color: 'medical-blue',
  },
]

export function Innovation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="innovation" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-medical-blue md:text-4xl lg:text-5xl">
            The Science Behind{' '}
            <span className="text-gradient">Sweet Sensation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-medical-blue/70">
            Understanding how SiManis creates sugar-free sweetness through innovative bio-electronics
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${card.color}/10`}>
                    <card.icon className={`h-6 w-6 text-${card.color}`} />
                  </div>
                  <CardTitle className="text-xl text-medical-blue">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-medical-blue/70">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <InteractiveSimulator />
        </motion.div>
      </div>
    </section>
  )
}