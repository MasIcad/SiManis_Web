'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Sparkles, TrendingUp, Award } from 'lucide-react'

const milestones = [
  {
    year: 'Phase 1',
    title: 'Conceptualization & Theoretical Core Simulation',
    description: 'Initial research and development of the bio-electronic concept, including theoretical modeling and simulation of taste stimulation technology.',
    icon: Sparkles,
    status: 'completed',
  },
  {
    year: 'Phase 2',
    title: 'Industrial 3D Design & Lab Prototyping',
    description: 'Creation of detailed 3D designs and development of functional laboratory prototypes for initial testing and validation.',
    icon: TrendingUp,
    status: 'completed',
  },
  {
    year: 'Current Phase',
    title: 'Transition to PKM-KI for Market-Ready Manufacturing Optimization',
    description: 'Currently optimizing the design for mass production, focusing on cost reduction, manufacturing efficiency, and user experience enhancement.',
    icon: Award,
    status: 'active',
  },
  {
    year: 'Phase 4',
    title: 'Mass Production Standardization & Certification Launch',
    description: 'Finalizing production standards, obtaining necessary certifications, and preparing for commercial launch.',
    icon: CheckCircle,
    status: 'upcoming',
  },
]

export function Timeline() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-medical-blue md:text-4xl lg:text-5xl">
            The{' '}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-medical-blue/70">
            Our path from concept to market-ready innovation
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-tech-silver md:block" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 md:px-8">
                <div className={`rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                  milestone.status === 'active' 
                    ? 'border-digital-cyan bg-gradient-to-br from-sterile-white to-digital-cyan/5'
                    : 'border-tech-silver bg-white'
                }`}>
                  <div className="mb-2 flex items-center gap-2">
                    <milestone.icon className={`h-5 w-5 ${
                      milestone.status === 'active' 
                        ? 'text-digital-cyan' 
                        : 'text-medical-blue'
                    }`} />
                    <span className="text-sm font-semibold text-digital-cyan">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-medical-blue">
                    {milestone.title}
                  </h3>
                  <p className="text-medical-blue/70">
                    {milestone.description}
                  </p>
                  {milestone.status === 'active' && (
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-digital-cyan/10 px-2 py-1 text-xs text-digital-cyan">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-digital-cyan opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-digital-cyan"></span>
                      </span>
                      In Progress
                    </div>
                  )}
                </div>
              </div>
              
              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
                <div className={`h-4 w-4 rounded-full border-4 ${
                  milestone.status === 'active'
                    ? 'border-digital-cyan bg-white'
                    : milestone.status === 'completed'
                    ? 'border-medical-blue bg-medical-blue'
                    : 'border-tech-silver bg-white'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}