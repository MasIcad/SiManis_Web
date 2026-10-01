'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Award, TrendingUp, AlertTriangle, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react'

const testData = [
  {
    range: '< 60 µA',
    sampleN: 8,
    avgScore: '1,06 ± 1,05',
    detectionRate: '63,6%',
    dominantSensation: 'Manis sangat samar (skor 1–2), getaran listrik halus',
    status: 'Sub-Threshold',
    barPercent: 30,
    highlight: false,
  },
  {
    range: '60–79 µA',
    sampleN: 18,
    avgScore: '0,11 ± 0,47',
    detectionRate: '6%',
    dominantSensation: 'Didominasi rasa hambar (skor 0), sensasi termal netral',
    status: 'Zona Hambar',
    barPercent: 10,
    highlight: false,
  },
  {
    range: '80–89 µA',
    sampleN: 29,
    avgScore: '1,24 ± 1,76 (Puncak 3–4,5)',
    detectionRate: '38%',
    dominantSensation: 'Puncak manis virtual optimal (skor 3–4,5), hangat nyaman',
    status: 'AMBANG OPTIMAL ⭐',
    barPercent: 95,
    highlight: true,
  },
  {
    range: '90–99 µA',
    sampleN: 6,
    avgScore: '1,25 ± 1,94',
    detectionRate: '33%',
    dominantSensation: 'Manis terasa pada sebagian subjek, getaran meningkat',
    status: 'Mulai Getar',
    barPercent: 60,
    highlight: false,
  },
  {
    range: '≥ 100 µA',
    sampleN: 10,
    avgScore: '0,35 ± 0,74',
    detectionRate: '20%',
    dominantSensation: 'Persepsi manis memudar, sensasi kebas/asam (over-stimulation)',
    status: 'Over-Stimulation',
    barPercent: 20,
    highlight: false,
  },
]

export function ClinicalResults() {
  const [selectedRow, setSelectedRow] = useState(testData[2])

  return (
    <section id="hasil-penelitian" className="py-24 bg-sterile-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 mb-3 border border-emerald-500/20">
            <Award className="h-4 w-4 text-emerald-600" />
            <span className="text-xs md:text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              Validasi Empiris & Uji Klinis
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Hasil Uji 80 Titik Stimulasi{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              Terhadap Responden
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Pengujian empiris dilakukan untuk mengidentifikasi ambang batas eksitasi potensial aksi reseptor 
            rasa manis T1R2/T1R3 pada berbagai rentang arus mikro dan modulasi suhu kerja.
          </p>
        </motion.div>

        {/* Highlight Card: Optimal Range */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 md:p-8 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-emerald-100">
              Temuan Utama Riset
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">
              Ambang Eksitasi Optimal: 80–89 µA pada Suhu 35°C
            </h3>
            <p className="text-sm text-emerald-100 mt-1 max-w-2xl">
              Distribusi skor persepsi manis membentuk kurva non-linier terfokus dengan sensasi rasa manis virtual puncak 
              yang stabil dan sensasi termal hangat yang paling nyaman bagi responden.
            </p>
          </div>
          <div className="flex-shrink-0 text-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
            <div className="text-3xl font-extrabold text-white">80 Uji</div>
            <div className="text-xs text-emerald-200 mt-0.5">Validasi Responden</div>
          </div>
        </div>

        {/* Data Table & Curve Analysis (Table 2 from Paper) */}
        

        {/* Temperature Modulation Comparison (35°C vs 40°C) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sweet-coral bg-sweet-coral/10 px-3 py-1 rounded-full">
              Kajian Biofisika Termal
            </span>
            <h3 className="text-2xl font-bold text-medical-blue mt-2">
              Pengaruh Modulasi Suhu Elektroda: 35°C vs 40°C
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Mengapa suhu 35°C menghasilkan persepsi manis yang jauh lebih unggul dibandingkan 40°C?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 35°C Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-emerald-700">Suhu 35°C</span>
                <span className="text-xs font-bold uppercase bg-emerald-600 text-white px-3 py-1 rounded-full">
                  Parameter Emas (Optimal)
                </span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Aktivasi Kanal TRPM5:</strong> Suhu hangat 35°C memaksimalkan sensitivitas reseptor manis tanpa menimbulkan rasa panas mengganggu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kenyamanan Oral:</strong> Sesuai dengan suhu fisiologis rongga mulut manusia, memberikan sensasi hangat nyaman.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stabilitas Regulasi:</strong> Algoritma histeresis mikrokontroler mampu mempertahankan kestabilan suhu tanpa memicu safety cut-off.</span>
                </li>
              </ul>
            </div>

            {/* 40°C Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-sweet-coral">Suhu 40°C</span>
                <span className="text-xs font-bold uppercase bg-sweet-coral text-white px-3 py-1 rounded-full">
                  Penurunan Efektivitas Signifikan
                </span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-sweet-coral flex-shrink-0 mt-0.5" />
                  <span><strong>Desensitisasi Termal Sel Pengecap:</strong> Suhu di atas 37°C memicu reseptor nyeri panas (TRPV1) yang mendominasi transmisi saraf ke otak, menutupi sinyal manis TRPM5.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-sweet-coral flex-shrink-0 mt-0.5" />
                  <span><strong>Hasil Empiris Rendah:</strong> Dari 9 pengujian pada 40°C, <strong>7 pengujian mencatat skor 0</strong>, dan hanya 2 pengujian yang merasakan manis lemah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-sweet-coral flex-shrink-0 mt-0.5" />
                  <span><strong>Aktivasi Thermal Cut-Off:</strong> Sistem mikrokontroler memutus kerja Peltier demi keselamatan pengguna, menghentikan sementara gradien suhu elektroda.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

