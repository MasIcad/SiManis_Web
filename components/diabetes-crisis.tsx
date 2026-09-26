'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Users, HeartPulse, Sparkles, Scale, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react'

export function DiabetesCrisis() {
  return (
    <section id="krisis-diabetes" className="relative py-24 bg-gradient-to-b from-white via-sterile-white to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sweet-coral/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-digital-cyan/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-sweet-coral/10 px-4 py-1.5 mb-4 border border-sweet-coral/20">
            <AlertTriangle className="h-4 w-4 text-sweet-coral" />
            <span className="text-xs md:text-sm font-semibold text-sweet-coral uppercase tracking-wider">
              Urgensi Kesehatan Nasional
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Krisis Konsumsi Gula &{' '}
            <span className="bg-gradient-to-r from-sweet-coral to-amber-600 bg-clip-text text-transparent">
              Ancaman Diabetes Melitus
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Indonesia tengah menghadapi beban ganda malnutrisi dan lonjakan penyakit tidak menular. 
            Budaya kegemaran rasa manis berakar kuat, namun konsumsi harian telah melampaui batas aman biologis tubuh.
          </p>
        </motion.div>

        {/* 3 Key Stats Cards: BPS vs Kemenkes vs WHO */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-16 items-stretch">
          {/* Card 1: Konsumsi Indonesia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border-2 border-sweet-coral/30 shadow-lg relative overflow-hidden group hover:border-sweet-coral transition-all h-full flex flex-col justify-between"
          >
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-sweet-coral/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
              <span className="text-xs font-bold uppercase tracking-wider text-sweet-coral bg-sweet-coral/10 px-2.5 py-1 rounded-md">
                Data BPS & Narasi (2023)
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-medical-blue">160</span>
                <span className="text-lg font-bold text-sweet-coral">gram/hari</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Rata-rata Konsumsi Gula Indonesia
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Mencakup gula dalam nasi putih, roti, susu kental manis, kecap, hingga aneka jajanan minuman es manis kemasan.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sweet-coral">
              <span>⚠️ 6.4x Lipat Batas WHO</span>
              <span>Ancaman Kritis</span>
            </div>
          </motion.div>

          {/* Card 2: Batas Kemenkes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-md relative overflow-hidden group hover:border-amber-400 transition-all h-full flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                Anjuran Kemenkes RI
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-800">50</span>
                <span className="text-lg font-bold text-amber-600">gram/hari</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Batas Maksimal Gula Tambahan Dewasa
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Maksimal 4 sendok makan gula per hari untuk dewasa, dan hanya 2–3 sendok makan untuk anak usia sekolah.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
              <span>Batas Toleransi Nasional</span>
              <span>Max 4 Sdm/hari</span>
            </div>
          </motion.div>

          {/* Card 3: Standar Aman WHO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border border-slate-200 shadow-md relative overflow-hidden group hover:border-digital-cyan transition-all h-full flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-digital-cyan bg-digital-cyan/10 px-2.5 py-1 rounded-md">
                Standar Aman WHO (2015)
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-800">25</span>
                <span className="text-lg font-bold text-digital-cyan">gram/hari</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Batas Aman Rekomendasi Global
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Kurang dari 10% (ideal &lt;5%) total energi harian untuk mencegah karies gigi, sindrom metabolik, dan diabetes.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-digital-cyan">
              <span>Rekomendasi Medis Dunia</span>
              <span>Target Ideal</span>
            </div>
          </motion.div>
        </div>

        {/* Global & National Diabetes Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 md:p-10 shadow-2xl max-w-6xl mx-auto mb-16 relative overflow-hidden"
          style={{ backgroundColor: '#0A192F' }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-bold">
                <Users className="h-5 w-5" />
                <span>Peringkat 2 Pasifik Barat</span>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                20,43 <span className="text-2xl font-bold text-sky-400">Juta Jiwa</span>
              </div>
              <p className="text-xs lg:text-sm text-slate-200">
                Penderita diabetes di Indonesia (11,3% populasi dewasa) per IDF Diabetes Atlas 2024.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8 space-y-2">
              <div className="flex items-center gap-2 text-rose-300 text-sm font-bold">
                <TrendingUp className="h-5 w-5" />
                <span>Proyeksi Kasus Global</span>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                853 <span className="text-2xl font-bold text-rose-300">Juta Jiwa</span>
              </div>
              <p className="text-xs lg:text-sm text-slate-200">
                Estimasi penderita diabetes dunia pada 2050 (naik drastis dari 589 juta jiwa di 2024).
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 text-sm font-bold">
                <ShieldAlert className="h-5 w-5" />
                <span>Ancaman Usia Muda</span>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white">
                Usia Muda <span className="text-2xl font-bold text-amber-300">Rentan</span>
              </div>
              <p className="text-xs lg:text-sm text-slate-200">
                Akses mudah minuman kemasan manis di lingkungan sekolah memicu risiko diabetes melitus tipe-2 sejak dini.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Bahaya Nyata Konsumsi Gula Tinggi */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-medical-blue">
              Mengapa Kelebihan Gula Sangat Mematikan?
            </h3>
            <p className="text-slate-600 mt-2 text-sm md:text-base">
              Dampak gula berlebih tidak hanya sebatas kenaikan berat badan, namun merusak organ hingga tingkat molekuler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sweet-coral/10 text-sweet-coral flex items-center justify-center mb-4 font-bold text-xl">
                01
              </div>
              <h4 className="text-lg font-bold text-medical-blue mb-2">
                Resistensi Insulin & Penyakit Kronis
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lonjakan glukosa terus-menerus membebani pankreas, memicu resistensi insulin, diabetes melitus tipe-2, hipertensi, perlemakan hati (NAFLD), dan risiko serangan jantung [Sinaga et al., 2024].
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 font-bold text-xl">
                02
              </div>
              <h4 className="text-lg font-bold text-medical-blue mb-2">
                Proses Glikasi & Penuaan Dini (AGEs)
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gula darah tinggi mengikat protein dalam reaksi non-enzimatik membentuk <em>Advanced Glycation End-products</em> (AGEs) yang merusak serat kolagen, mempercepat keriput, dan menurunkan elastisitas pembuluh darah [Auliya et al., 2025].
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-digital-cyan/10 text-digital-cyan flex items-center justify-center mb-4 font-bold text-xl">
                03
              </div>
              <h4 className="text-lg font-bold text-medical-blue mb-2">
                Ketergantungan Dopamin Lidah
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Masyarakat Indonesia terbiasa dengan rasa manis yang memicu pelepasan dopamin di otak. Penghentian paksa konsumsi gula sering memicu sakau gula (sugar craving) dan kegagalan diet [Narasi, 2023].
              </p>
            </div>
          </div>
        </div>

        {/* Kenapa Stevia & Alternatif Pemanis Masih Memiliki Keterbatasan? */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-wider text-medical-blue bg-medical-blue/10 px-3 py-1 rounded-full">
                Analisis Kritis Peneliti
              </span>
              <h3 className="text-2xl font-bold text-medical-blue mt-3">
                Keterbatasan Pemanis Pengganti Konvensional
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Mengapa masyarakat tetap sulit berpaling dari gula pasir meskipun alternatif pemanis seperti Stevia sudah ada?
              </p>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sweet-coral/10 text-sweet-coral flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Kendala Organoleptik: Sensasi Pahit After-Taste</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Ekstrak stevia sering menyisakan rasa getir atau pahit (licorice-like aftertaste) yang kurang diminati konsumen, sehingga pengguna sering mencampurnya kembali dengan gula pasir.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sweet-coral/10 text-sweet-coral flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Kekhawatiran Keamanan Metabolik Jangka Panjang</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Studi ilmiah (Farid et al., 2020) mengindikasikan konsumsi pemanis pengganti dosis tinggi berpotensi mempengaruhi fungsi metabolik organ hati dan ginjal serta mikrobiota usus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sweet-coral/10 text-sweet-coral flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Beredarnya Produk Oplosan & Kualitas Rendah</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Banyaknya produk pemanis alternatif palsu dan mutu yang tidak terstandarisasi menimbulkan keraguan masyarakat untuk mengonsumsinya secara rutin.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-digital-cyan/10 border border-digital-cyan/30 text-medical-blue flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-digital-cyan flex-shrink-0" />
                <p className="text-xs font-medium">
                  <strong>Kesimpulan Ilmiah:</strong> Dibutuhkan solusi baru yang memuaskan reseptor rasa manis langsung di lidah tanpa asupan molekul kimiawi atau zat aditif apapun ke dalam tubuh!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

