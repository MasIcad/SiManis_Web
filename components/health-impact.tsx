'use client'

import { motion } from 'framer-motion'
import { Activity, ShieldCheck, Users, Heart, TrendingUp, Award } from 'lucide-react'

const impacts = [
  {
    icon: Activity,
    title: 'Diabetes-Friendly',
    description: '100% sugar-free solution with zero glycemic index impact, perfect for diabetes management.',
    stat: '0% Sugar',
    color: 'digital-cyan',
  },
  {
    icon: ShieldCheck,
    title: 'FDA-Approved Materials',
    description: 'Built with premium food-grade contact materials and top-tier ergonomics.',
    stat: 'Food Grade',
    color: 'medical-blue',
  },
  {
    icon: Users,
    title: 'Behavioral Shift',
    description: 'Empowering society to reduce chemical sugar addiction through smart technology.',
    stat: 'Eco-Friendly',
    color: 'sweet-coral',
  },
  {
    icon: Heart,
    title: 'Health Impact',
    description: 'Reducing risk of obesity, diabetes, and other metabolic diseases.',
    stat: 'Better Health',
    color: 'digital-cyan',
  },
  {
    icon: TrendingUp,
    title: 'Market Potential',
    description: 'Addressing the growing demand for sugar alternatives in Indonesia.',
    stat: 'High Demand',
    color: 'medical-blue',
  },
  {
    icon: Award,
    title: 'PKM-KI Finalist',
    description: 'Recognized as an innovative solution for national health challenges.',
    stat: 'PIMNAS 2024',
    color: 'sweet-coral',
  },
]

export function HealthImpact() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-white to-sterile-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4 font-plus-jakarta">
            Why{' '}
            <span className="text-gradient">SiManis?</span>
          </h2>
          <p className="text-lg text-medical-blue/70">
            Transforming the way Indonesia experiences sweetness, one spoon at a time
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group relative h-full p-6 rounded-2xl bg-white border border-tech-silver shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${impact.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className={`h-6 w-6 text-${impact.color}`} />
                </div>
                <div className="mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${impact.color}/10 text-${impact.color}`}>
                    {impact.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-2">{impact.title}</h3>
                <p className="text-medical-blue/70 leading-relaxed">{impact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}