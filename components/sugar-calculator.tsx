'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, AlertCircle, CheckCircle, Flame, HeartPulse, RefreshCw, Sparkles, Plus, Minus } from 'lucide-react'
import { Button } from './ui/button'

interface FoodItem {
  id: string
  name: string
  category: 'Minuman' | 'Makanan' | 'Bumbu/Camilan'
  sugarGrams: number
  icon: string
  count: number
}

const initialFoods: FoodItem[] = [
  { id: 'esteh', name: 'Es Teh Manis / Teh Botol', category: 'Minuman', sugarGrams: 25, icon: '🧋', count: 1 },
  { id: 'kopisusu', name: 'Es Kopi Susu Gula Aren', category: 'Minuman', sugarGrams: 32, icon: '☕', count: 1 },
  { id: 'boba', name: 'Boba Brown Sugar', category: 'Minuman', sugarGrams: 48, icon: '🥤', count: 0 },
  { id: 'soda', name: 'Minuman Soda Kemasan (330ml)', category: 'Minuman', sugarGrams: 39, icon: '🥫', count: 0 },
  { id: 'skm', name: 'Susu Kental Manis (1 sachet/gelas)', category: 'Minuman', sugarGrams: 22, icon: '🥛', count: 1 },
  { id: 'nasi', name: 'Nasi Putih (2 Porsi/Hari - Ekuivalen)', category: 'Makanan', sugarGrams: 30, icon: '🍚', count: 1 },
  { id: 'martabak', name: 'Martabak Manis / Donat / Roti Manis', category: 'Bumbu/Camilan', sugarGrams: 35, icon: '🍩', count: 1 },
  { id: 'kecap', name: 'Kecap Manis & Saus Masakan', category: 'Bumbu/Camilan', sugarGrams: 14, icon: '🥣', count: 1 },
]

export function SugarCalculator() {
  const [foods, setFoods] = useState<FoodItem[]>(initialFoods)

  const updateCount = (id: string, delta: number) => {
    setFoods((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: Math.max(0, item.count + delta) } : item
      )
    )
  }

  const resetCalculator = () => {
    setFoods(initialFoods)
  }

  const totalSugar = foods.reduce((acc, item) => acc + item.sugarGrams * item.count, 0)
  const whoLimit = 25
  const kemenkesLimit = 50
  const whoRatio = (totalSugar / whoLimit).toFixed(1)
  const caloriesFromSugar = totalSugar * 4 // 1 gram gula = 4 kkal

  // Status calculation
  let riskLevel = 'Aman'
  let riskColor = 'text-emerald-600 bg-emerald-50 border-emerald-300'
  let riskDescription = 'Konsumsi gula Anda berada dalam koridor aman anjuran WHO.'

  if (totalSugar > whoLimit && totalSugar <= kemenkesLimit) {
    riskLevel = 'Waspada'
    riskColor = 'text-amber-600 bg-amber-50 border-amber-300'
    riskDescription = 'Melebihi anjuran ideal WHO (25g), namun masih dalam batas toleransi Kemenkes RI.'
  } else if (totalSugar > kemenkesLimit && totalSugar <= 100) {
    riskLevel = 'Bahaya Tinggi'
    riskColor = 'text-sweet-coral bg-rose-50 border-sweet-coral/30'
    riskDescription = 'Melebihi batas maksimal aman Kemenkes RI. Berisiko tinggi resistensi insulin dan obesitas.'
  } else if (totalSugar > 100) {
    riskLevel = 'Kritis (Darurat)'
    riskColor = 'text-red-700 bg-red-100 border-red-400'
    riskDescription = 'Sangat berbahaya! Konsumsi gula setara atau melampaui rata-rata nasional (160g). Risiko diabetes melitus dan glikasi kolagen sangat tinggi.'
  }

  // Estimated savings with SiManis
  const beverageSugar = foods
    .filter((f) => f.category === 'Minuman' || f.id === 'skm')
    .reduce((acc, item) => acc + item.sugarGrams * item.count, 0)

  return (
    <section id="kalkulator-gula" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-digital-cyan/10 px-4 py-1.5 mb-3 border border-digital-cyan/20">
            <Calculator className="h-4 w-4 text-digital-cyan" />
            <span className="text-xs md:text-sm font-semibold text-digital-cyan uppercase tracking-wider">
              Simulasi Interaktif
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Kalkulator Asupan Gula &{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              Risiko Diabetes Harian
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Banyak orang tidak menyadari bahwa asupan gula tersembunyi dalam konsumsi sehari-hari mencapai ratusan gram.
            Hitung asupan Anda dan lihat bagaimana SiManis dapat menjadi solusi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Food list selector (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-700">Pilih Konsumsi Harian Anda:</span>
              <button
                onClick={resetCalculator}
                className="text-xs text-digital-cyan hover:text-medical-blue flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reset Default
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {foods.map((food) => (
                <div
                  key={food.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    food.count > 0
                      ? 'border-digital-cyan/40 bg-digital-cyan/5 shadow-sm'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{food.icon}</span>
                      <div>
                        <div className="text-xs font-semibold text-slate-800 leading-tight">
                          {food.name}
                        </div>
                        <div className="text-[11px] font-bold text-sweet-coral mt-0.5">
                          +{food.sugarGrams}g gula / porsi
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200/60">
                    <span className="text-[11px] text-slate-500">
                      Subtotal: <strong className="text-slate-700">{food.sugarGrams * food.count}g</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCount(food.id, -1)}
                        className="w-6 h-6 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                        disabled={food.count === 0}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center text-slate-800">
                        {food.count}
                      </span>
                      <button
                        onClick={() => updateCount(food.id, 1)}
                        className="w-6 h-6 rounded-md bg-medical-blue text-white flex items-center justify-center hover:bg-medical-blue/90"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Diagnostic Dashboard (5 cols) */}
          <div
            className="lg:col-span-5 text-white p-6 md:p-8 rounded-3xl shadow-2xl sticky top-24 border-2 border-slate-700"
            style={{ backgroundColor: '#0B1E33' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400">
                Hasil Analisis Konsumsi
              </span>
              <div className={`px-3 py-1 rounded-full text-xs font-extrabold border ${riskColor}`}>
                {riskLevel}
              </div>
            </div>

            {/* Total Display */}
            <div className="mb-6">
              <div className="text-xs text-slate-300 font-medium">Total Asupan Gula Harian:</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  {totalSugar}
                </span>
                <span className="text-xl font-bold text-sky-400">gram/hari</span>
              </div>
              <div className="text-xs text-slate-200 mt-2 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1 font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  ~{caloriesFromSugar} kkal kalori kosong
                </span>
                <span className="font-bold text-rose-300 bg-rose-950/70 px-2 py-0.5 rounded border border-rose-800">
                  {whoRatio}x Anjuran WHO
                </span>
              </div>
            </div>

            {/* Visual Gauge Bar */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[11px] font-semibold text-slate-300">
                <span>0g</span>
                <span className="text-sky-300 font-bold">WHO: 25g</span>
                <span className="text-amber-300 font-bold">Kemenkes: 50g</span>
                <span className="text-rose-400 font-bold">BPS: 160g</span>
              </div>
              <div className="h-3.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-700 relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    totalSugar <= whoLimit
                      ? 'bg-emerald-400'
                      : totalSugar <= kemenkesLimit
                      ? 'bg-amber-400'
                      : 'bg-gradient-to-r from-amber-400 via-rose-500 to-red-600'
                  }`}
                  style={{ width: `${Math.min(100, (totalSugar / 160) * 100)}%` }}
                />
              </div>
            </div>

            {/* Medical Assessment Note (High Contrast) */}
            <div className="p-4 rounded-2xl bg-rose-950/70 border-2 border-rose-500/50 text-xs text-rose-100 font-medium leading-relaxed mb-6 shadow-md">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-rose-100 font-medium">{riskDescription}</p>
              </div>
            </div>

            {/* SiManis Impact Solution Box (High Contrast) */}
            <div className="p-4 rounded-2xl bg-sky-950/80 border-2 border-sky-400/60 shadow-md">
              <div className="flex items-center gap-2 text-sky-300 text-xs font-extrabold mb-2">
                <Sparkles className="h-4 w-4 text-sky-300" />
                <span>Potensi Penyelamatan SiManis</span>
              </div>
              <p className="text-xs text-slate-100 leading-relaxed font-normal">
                Dengan beralih menggunakan <strong className="text-sky-300 font-bold">SiManis E-Taste</strong> untuk makanan dan minuman manis Anda, 
                Anda dapat langsung memangkas hingga <strong className="text-amber-300 font-extrabold text-sm underline">~{beverageSugar} gram gula/hari</strong> tanpa 
                kehilangan pengalaman sensorik rasa manis di lidah!
              </p>
              <div className="mt-3 pt-2.5 border-t border-sky-800/80 flex justify-between items-center text-xs font-bold text-white">
                <span className="text-slate-200">Pengurangan Risiko Glikasi:</span>
                <span className="text-emerald-400 font-extrabold text-sm">Hingga 75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

