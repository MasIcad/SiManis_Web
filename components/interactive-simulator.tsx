'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Thermometer, ShieldAlert, Sparkles, Activity, Droplets, RotateCcw } from 'lucide-react'
import { Button } from './ui/button'

export function InteractiveSimulator() {
  const [current, setCurrent] = useState<number>(85) // 20 to 200 uA
  const [temp, setTemp] = useState<number>(35) // 25 to 42 C
  const [saliva, setSaliva] = useState<'normal' | 'wet'>('normal')

  // Physiological Calculation
  const isThermalCutoff = temp >= 40
  const isPainTRPV1 = temp > 37

  let sweetScore = 0
  let sensoryDesc = ''
  let statusBadge = ''
  let badgeColor = ''
  let receptorStatus = ''

  if (isThermalCutoff) {
    sweetScore = 0
    sensoryDesc = '🚨 Proteksi Thermal Cut-off Otomatis Aktif! Suhu melebihi 40°C demi keselamatan pengguna. Modul pemanas diputus seketika.'
    statusBadge = 'SAFETY SHUTDOWN'
    badgeColor = 'bg-red-600 text-white'
    receptorStatus = 'TRPV1 (Nyeri Termal) Dominan, TRPM5 Tertutup'
  } else if (isPainTRPV1) {
    sweetScore = current >= 80 && current <= 95 ? 1.5 : 0
    sensoryDesc = 'Desensitisasi Termal: Suhu di atas 37°C mulai memicu reseptor nyeri TRPV1, menutupi sinyal gustatori manis ke otak.'
    statusBadge = 'DESENSITISASI TERMAL'
    badgeColor = 'bg-amber-600 text-white'
    receptorStatus = 'TRPV1 Mengganggu Transmisi T1R2/T1R3'
  } else if (current < 60) {
    sweetScore = 1.8
    sensoryDesc = 'Densitas arus di bawah 60 µA belum mampu mencapai ambang batas potensial aksi penuh. Terasa getaran listrik sangat halus.'
    statusBadge = 'SUB-THRESHOLD'
    badgeColor = 'bg-slate-500 text-white'
    receptorStatus = 'T1R2/T1R3 Parsial, Eksitasi Lemah'
  } else if (current >= 60 && current < 80) {
    sweetScore = 0.5
    sensoryDesc = 'Didominasi rasa hambar netral. Rangsangan arus mikro belum sinkron dengan kanal depolarisasi kation.'
    statusBadge = 'ZONA HAMBAR'
    badgeColor = 'bg-slate-400 text-white'
    receptorStatus = 'Reseptor Tidak Merespons'
  } else if (current >= 80 && current <= 89) {
    sweetScore = 4.2 // Optimal Sweetness
    sensoryDesc = '🌟 Puncak Manis Virtual Optimal! Kanal TRPM5 terbuka penuh oleh suhu hangat 35°C, dan arus 80–89 µA mengeksitasi reseptor T1R2/T1R3 secara ideal.'
    statusBadge = 'AMBANG MANIS OPTIMAL ⭐'
    badgeColor = 'bg-emerald-600 text-white animate-pulse'
    receptorStatus = 'T1R2/T1R3 & TRPM5 Aktif Maksimal'
  } else if (current > 89 && current < 100) {
    sweetScore = 2.4
    sensoryDesc = 'Sensasi manis terasa pada sebagian subjek, namun sensasi getaran listrik mulai meningkat di ujung lidah.'
    statusBadge = 'GETARAN MENINGKAT'
    badgeColor = 'bg-amber-500 text-white'
    receptorStatus = 'T1R2/T1R3 Aktif + Saraf Taktil'
  } else {
    // >= 100 uA
    sweetScore = 0.8
    sensoryDesc = 'Over-stimulation: Arus terlalu tinggi memicu reseptor nosiseptif somatosensori dan kanal ion asam. Terasa kebas atau rasa logam (metallic taste).'
    statusBadge = 'OVER-STIMULATION'
    badgeColor = 'bg-sweet-coral text-white'
    receptorStatus = 'Saraf Asam & Nociceptor Terpicu'
  }

  const resetPresetOptimal = () => {
    setCurrent(85)
    setTemp(35)
    setSaliva('normal')
  }

  return (
    <section id="simulator" className="py-24bg-gradient-to-r from-emerald-600 to-teal-700 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-digital-cyan/10 px-4 py-1.5 mb-3 border border-digital-cyan/20">
            <Activity className="h-4 w-4 text-digital-cyan" />
            <span className="text-xs md:text-sm font-semibold text-digital-cyan uppercase tracking-wider">
              Laboratorium Virtual
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Simulator Respon Gustatori{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              E-Taste SiManis
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Uji interaktif algoritma elektro-termal tertutup. Geser parameter arus mikro dan suhu kerja 
            untuk mengamati respons biologis reseptor lidah secara real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-800">Kontrol Parameter Firmware:</span>
              <button
                onClick={resetPresetOptimal}
                className="text-xs text-digital-cyan hover:text-medical-blue flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Preset Optimal (85µA, 35°C)
              </button>
            </div>

            {/* Slider 1: Micro-Current */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-2 text-slate-800">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Intensitas Arus Mikro (I_out):
                </span>
                <span className="font-mono text-lg font-bold text-medical-blue bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {current} µA
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="1"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-digital-cyan"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>20 µA</span>
                <span className="text-emerald-600 font-bold">80–89 µA (Optimal)</span>
                <span>200 µA</span>
              </div>
            </div>

            {/* Slider 2: Temperature */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="flex items-center gap-2 text-slate-800">
                  <Thermometer className="h-4 w-4 text-sweet-coral" />
                  Suhu Elektroda Peltier (T_Target):
                </span>
                <span className={`font-mono text-lg font-bold px-3 py-1 rounded-lg border ${temp >= 40 ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-medical-blue border-slate-200'}`}>
                  {temp}°C
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="42"
                step="0.5"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sweet-coral"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>25°C</span>
                <span className="text-emerald-600 font-bold">35°C (Target Optimal)</span>
                <span className="text-red-500 font-bold">&gt;40°C (Cut-off)</span>
              </div>
            </div>

            {/* Saliva Layer Toggle */}
            <div className="pt-2 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-700 mb-2">Kondisi Lapisan Saliva (Impedansi Kontak):</div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSaliva('normal')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    saliva === 'normal'
                      ? 'bg-white border-digital-cyan text-medical-blue shadow-sm'
                      : 'bg-slate-100 border-transparent text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-digital-cyan" />
                  Saliva Normal (~10 kΩ)
                </button>
                <button
                  onClick={() => setSaliva('wet')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    saliva === 'wet'
                      ? 'bg-white border-digital-cyan text-medical-blue shadow-sm'
                      : 'bg-slate-100 border-transparent text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <Droplets className="h-4 w-4 text-cyan-600" />
                  Saliva Basah (~4 kΩ)
                </button>
              </div>
              <div className="text-[11px] text-slate-500 mt-2">
                🔒 <em>Op-Amp OP07C otomatis menyesuaikan tegangan agar arus yang dihantarkan tetap persis {current} µA tanpa dipengaruhi tebal tipisnya saliva.</em>
              </div>
            </div>
          </div>

          {/* Biological Response Readout (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-medical-blue-deep to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-digital-cyan-glow">
                Respon Fisiologis Otak & Lidah
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeColor}`}>
                {statusBadge}
              </span>
            </div>

            {/* Score & Gauge */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
              <div className="text-xs text-slate-300 font-semibold mb-1">
                Estimasi Intensitas Rasa Manis Virtual:
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">
                  {sweetScore.toFixed(1)}
                </span>
                <span className="text-sm font-semibold text-slate-400">/ 10 (Skala Gustatori)</span>
              </div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full mt-3 overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    sweetScore >= 3.5 ? 'bg-emerald-400' : sweetScore > 1 ? 'bg-amber-400' : 'bg-slate-600'
                  }`}
                  style={{ width: `${(sweetScore / 10) * 100}%` }}
                />
              </div>
            </div>

            {/* Receptor Status */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Status Reseptor:</div>
                <div className="text-xs font-bold text-digital-cyan-bright mt-0.5">
                  {receptorStatus}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Kanal TRPM5:</div>
                <div className="text-xs font-bold text-amber-300 mt-0.5">
                  {temp >= 33 && temp <= 37 ? 'Terbuka Penuh (35°C)' : temp > 37 ? 'Tertutup oleh TRPV1' : 'Aktivitas Rendah (<33°C)'}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 leading-relaxed">
              {sensoryDesc}
            </div>

            {/* Firmware Safety Guarantee Note */}
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldAlert className="h-4 w-4 flex-shrink-0" />
              <span>Sirkuit tertutup aman. Arus mikro 20–200 µA jauh di bawah batas persepsi kejut listrik manusia (1 mA).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}