'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, Sparkles, Heart, Shield, Smile } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sterile-white via-white to-tech-silver/20 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-digital-cyan/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-sweet-coral/20 blur-3xl animate-pulse-slow" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-digital-cyan/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-digital-cyan" />
              <span className="text-sm font-medium text-digital-cyan">
                PKM-KI 2024 | Finalis PIMNAS
              </span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight text-medical-blue md:text-6xl lg:text-7xl">
              Rasakan Manisnya{' '}
              <span className="bg-gradient-to-r from-digital-cyan to-sweet-coral bg-clip-text text-transparent">
                Tanpa Gula
              </span>
            </h1>
            
            <p className="text-lg text-medical-blue/70 md:text-xl max-w-lg">
              Sendok pintar yang membuat lidah Anda merasakan manis hanya dengan sentuhan 
              lembut gelombang mikro - tanpa setetes gula pun!
            </p>
            
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-sweet-coral" />
                <span className="text-sm text-medical-blue/60">Aman untuk Diabetes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-digital-cyan" />
                <span className="text-sm text-medical-blue/60">100% Food Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Smile className="h-5 w-5 text-sweet-coral" />
                <span className="text-sm text-medical-blue/60">Tanpa Efek Samping</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="xl"
                onClick={() => scrollToSection('waiting-list')}
                className="group bg-medical-blue hover:bg-medical-blue/90"
              >
                Gabung Waiting List
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              >
                Cara Kerjanya
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-digital-cyan/20 to-sweet-coral/20 blur-3xl animate-float" />
              <div className="relative rounded-3xl bg-gradient-to-br from-white to-tech-silver/30 p-8 shadow-2xl border border-tech-silver">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-medical-blue/5 to-digital-cyan/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/simanis-logo.png" 
                    alt="SiManis Logo"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-medical-blue/60 font-medium">
                  SiManis - Sendok Pintar Pengganti Gula
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}