'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight, Sparkles, HeartPulse, ShieldCheck, Zap, Thermometer, ChevronRight, Activity } from 'lucide-react'

const heroAngles = [
  { id: 'hero', name: 'Tampak Utama', src: '/device/simanis-hero.png' },
  { id: 'stand', name: 'Dudukan Meja', src: '/device/simanis-stand.png' },
  { id: 'head', name: 'Kepala SS316L', src: '/device/simanis-head.png' },
  { id: 'port', name: 'Port USB-C', src: '/device/simanis-port.png' },
]

export function Hero() {
  const [activeAngle, setActiveAngle] = useState(heroAngles[0])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sterile-white pt-24 pb-20">
      {/* Decorative ambient glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-digital-cyan/15 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-sweet-coral/10 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="container relative mx-auto px-4 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Value Proposition (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-digital-cyan/10 px-3.5 py-1.5 border border-digital-cyan/25">
                <Sparkles className="h-4 w-4 text-digital-cyan" />
                <span className="text-xs md:text-sm font-semibold text-digital-cyan">
                  PKM-KI 2024 • Universitas Brawijaya
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 border border-emerald-500/20 text-xs font-semibold text-emerald-700">
                <Activity className="h-3.5 w-3.5" />
                <span>Teruji 80 Titik Uji Klinis</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.12] text-medical-blue tracking-tight">
              Sensasi Manis Virtual{' '}
              <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
                Tanpa Sebutir Gula
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Sendok pintar inovatif pertama di Indonesia berbasis <strong>E-Taste</strong>, <strong>pemanasan balik Peltier (25–35°C)</strong>, dan <strong>kontrol arus mikro (20–200 µA)</strong>. Mengaktifkan reseptor manis lidah T1R2/T1R3 langsung dari sumbernya tanpa kalori, tanpa zat kimia, dan aman untuk penderita diabetes.
            </p>

            {/* 3 Core Metric Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg border-y border-slate-200/80 py-4">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-medical-blue">0 Gram</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Gula & Kalori Tambahan</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-digital-cyan">80–89 µA</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Ambang Manis Teruji</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-sweet-coral">35°C</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Suhu Sensitisasi Lidah</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection('alat-simanis')}
                className="group bg-medical-blue hover:bg-medical-blue/90 text-white shadow-md shadow-medical-blue/20"
              >
                Eksplorasi Alat SiManis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('kalkulator-gula')}
                className="border-digital-cyan text-digital-cyan hover:bg-digital-cyan/10"
              >
                Cek Risiko Gula
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection('simulator')}
                className="text-slate-700 hover:text-medical-blue border border-slate-200 hover:bg-slate-100"
              >
                Uji Simulator
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Physical Device Visual Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Product Hero Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-digital-cyan/5 p-6 shadow-2xl border border-slate-200/80">
                {/* Photo Viewer with active angle */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
                  <Image
                    src={activeAngle.src}
                    alt="Purwarupa Nyata SiManis Sendok Pintar"
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-medical-blue/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                    Purwarupa SiManis
                  </div>
                </div>

                {/* Angle Selector Pills */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  {heroAngles.map((angle) => (
                    <button
                      key={angle.id}
                      onClick={() => setActiveAngle(angle)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeAngle.id === angle.id
                          ? 'bg-medical-blue text-white shadow-sm'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {angle.name}
                    </button>
                  ))}
                </div>

                {/* Floating Status Badges */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <Thermometer className="h-4 w-4 text-sweet-coral" />
                      Target Suhu Stabil:
                    </span>
                    <span className="font-mono font-bold text-sweet-coral">35°C (Peltier Reverse)</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <Zap className="h-4 w-4 text-amber-500" />
                      Injeksi Arus Konstan:
                    </span>
                    <span className="font-mono font-bold text-amber-600">80–89 µA (Op-Amp OP07C)</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      Material Kontak Lidah:
                    </span>
                    <span className="font-bold text-emerald-700">SS316L Lapis Perak (Ag)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}