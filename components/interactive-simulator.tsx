'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Battery, Droplet, Thermometer, Zap } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

export function InteractiveSimulator() {
  const [tongueState, setTongueState] = useState<'wet' | 'dry'>('wet')

  const handleToggle = (state: 'wet' | 'dry') => {
    setTongueState(state)
  }

  return (
    <Card className="overflow-hidden border-digital-cyan/30 bg-gradient-to-br from-sterile-white to-tech-silver/20">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-medical-blue">
            Smart Adaptation Simulator
          </h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={tongueState === 'wet' ? 'default' : 'outline'}
              onClick={() => handleToggle('wet')}
              className="gap-2"
            >
              <Droplet className="h-4 w-4" />
              Wet Tongue
            </Button>
            <Button
              size="sm"
              variant={tongueState === 'dry' ? 'default' : 'outline'}
              onClick={() => handleToggle('dry')}
              className="gap-2"
            >
              <Zap className="h-4 w-4" />
              Dry Tongue
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 rounded-lg bg-white/50 p-4">
            <div className="flex items-center gap-2 text-digital-cyan">
              <Battery className="h-5 w-5" />
              <span className="text-sm font-medium">System Output</span>
            </div>
            <motion.div
              key={`output-${tongueState}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-medical-blue"
            >
              {tongueState === 'wet' ? '120 μA' : '180 μA'}
            </motion.div>
            <p className="text-xs text-medical-blue/60">
              {tongueState === 'wet' 
                ? 'Lower output needed due to high conductivity' 
                : 'Higher output to compensate for lower conductivity'}
            </p>
          </div>

          <div className="space-y-2 rounded-lg bg-white/50 p-4">
            <div className="flex items-center gap-2 text-sweet-coral">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Delivered Current</span>
            </div>
            <motion.div
              key={`delivered-${tongueState}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-medical-blue"
            >
              120 μA
            </motion.div>
            <p className="text-xs text-medical-blue/60">
              Stable & safe micro-current
            </p>
          </div>

          <div className="space-y-2 rounded-lg bg-white/50 p-4">
            <div className="flex items-center gap-2 text-digital-cyan">
              <Thermometer className="h-5 w-5" />
              <span className="text-sm font-medium">Thermal Control</span>
            </div>
            <div className="text-2xl font-bold text-medical-blue">
              28-32°C
            </div>
            <p className="text-xs text-medical-blue/60">
              Optimal temperature for taste response
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-medical-blue/5 p-4">
          <div className="mb-3 h-2 overflow-hidden rounded-full bg-tech-silver">
            <motion.div
              className="h-full bg-digital-cyan"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </div>
          <p className="text-center text-sm text-medical-blue/70">
            🔒 Safe closed-loop system maintains constant 120 μA delivered to taste buds
          </p>
        </div>
      </CardContent>
    </Card>
  )
}