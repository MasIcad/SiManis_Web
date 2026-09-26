'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Thermometer, ShieldCheck, Check, X, ArrowRight, Dna } from 'lucide-react'

export function ScienceMechanism() {
  return (
    <section id="cara-kerja" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-digital-cyan/10 px-4 py-1.5 mb-3 border border-digital-cyan/20">
            <Dna className="h-4 w-4 text-digital-cyan" />
            <span className="text-xs md:text-sm font-semibold text-digital-cyan uppercase tracking-wider">
              Biofisika Gustatori & Teknologi E-Taste
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Bagaimana Lidah Merasakan Manis{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              Tanpa Sebutir Gula?
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            SiManis memanfaatkan prinsip elektrofisiologi sel pengecap untuk merangsang reseptor manis 
            secara langsung tanpa pengikatan ligan kimiawi apapun.
          </p>
        </motion.div>

        {/* 3 Step Mechanism Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-digital-cyan/10 text-digital-cyan flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6" />
            </div>
            <div className="text-xs font-bold text-digital-cyan uppercase tracking-wider mb-1">
              Tahap 1 • Rangsangan Mikro
            </div>
            <h3 className="text-xl font-bold text-medical-blue mb-2">
              Depolarisasi Membran Reseptor T1R2/T1R3
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Arus mikro searah berkisar 20–200 µA dialirkan dengan tegangan aman 1–3 V melintasi papila lidah. Aliran muatan listrik ini mendepolarisasi membran sel pengecap manis tanpa membutuhkan molekul glukosa fisik.
            </p>
          </div>

          <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-sweet-coral/10 text-sweet-coral flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              <Thermometer className="h-6 w-6" />
            </div>
            <div className="text-xs font-bold text-sweet-coral uppercase tracking-wider mb-1">
              Tahap 2 • Sensitisasi Termal
            </div>
            <h3 className="text-xl font-bold text-medical-blue mb-2">
              Aktivasi Kanal Kation TRPM5 pada 35°C
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modul Peltier TES1-7102SR menjaga kepala sendok pada suhu hangat fisiologis (35°C). Suhu ini mengoptimalkan pembukaan kanal kation TRPM5, meningkatkan sensitivitas rasa manis alami lidah hingga puncaknya.
            </p>
          </div>

          <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 text-medical-blue flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="text-xs font-bold text-medical-blue uppercase tracking-wider mb-1">
              Tahap 3 • Loop Tertutup Aman
            </div>
            <h3 className="text-xl font-bold text-medical-blue mb-2">
              Sirkuit Bio-Elektronik Closed-Loop
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sirkuit arus mikro mengalir dari lidah melalui resistansi alami tubuh dan ditutup kembali melalui genggaman tangan pada plat elektroda tembaga di gagang sendok. Arus stabil, aman, dan tanpa kejutan mendadak.
            </p>
          </div>
        </div>

        {/* Bio-Electronic Closed Loop Architecture Diagram */}
        <div
          className="rounded-3xl text-white p-8 md:p-10 shadow-2xl mb-20 relative overflow-hidden border-2 border-slate-700"
          style={{ backgroundColor: '#0B1E33' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950 px-3 py-1 rounded-full border border-sky-500/40">
                Prinsip Fisiologi Human-in-the-Loop
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-white">
                Mengapa SiManis 100% Aman & Terkendali?
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                Alat konvensional seringkali gagal karena resistensi lidah berubah drastis akibat lapisan saliva (air liur). 
                SiManis mengatasi kendala ini dengan rangkaian <strong className="text-sky-300">Constant Current Source berbasis Op-Amp OP07C</strong>:
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-100">
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span><strong className="text-white">Arus Terkunci Stabil:</strong> Tetap 20–200 µA berapapun fluktuasi air liur pengguna.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span><strong className="text-white">Kapasitor Soft-Start:</strong> Arus dinaikkan secara perlahan (ramp-up) mencegah hentakan kejut.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span><strong className="text-white">Lapisan Perak (Ag) SS316L:</strong> Mencegah timbulnya rasa logam tajam (metallic taste).</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span><strong className="text-white">Proteksi Suhu Otomatis:</strong> Thermal cut-off seketika memutus pemanas jika suhu &gt; 40°C.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#071322] p-6 rounded-2xl border-2 border-sky-500/40 shadow-inner">
              <div className="text-xs font-extrabold text-sky-400 uppercase tracking-wider mb-3">
                Diagram Sirkuit Tertutup Bio-Elektronik
              </div>
              <div className="space-y-3 text-xs text-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-white">1. Elektroda Kepala Sendok (Ag + SS316L)</span>
                  <span className="text-sky-300 font-mono font-bold bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">Kutub Positif</span>
                </div>
                <div className="text-center text-sky-300 font-bold text-xs">▼ Injeksi Arus Mikro (80–89 µA) & Suhu 35°C</div>
                <div className="p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500/60 flex items-center justify-between">
                  <span className="font-bold text-emerald-100">2. Papila Lidah & Reseptor T1R2/T1R3</span>
                  <span className="text-emerald-300 font-bold bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-700">Sensasi Manis Virtual</span>
                </div>
                <div className="text-center text-sky-300 font-bold text-xs">▼ Konduksi Melintasi Jaringan Tubuh</div>
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-white">3. Plat Gagang Tembaga (Genggaman Tangan)</span>
                  <span className="text-sky-300 font-mono font-bold bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">Kutub Ground</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Komparasi Menyeluruh: Gula vs Stevia vs SiManis */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sweet-coral bg-sweet-coral/10 px-3 py-1 rounded-full">
              Tabel Komparasi Solusi
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-medical-blue mt-2">
              SiManis vs Alternatif Pemanis Lainnya
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Perbandingan komprehensif dari aspek kesehatan, sensori organoleptik, dan keamanan jangka panjang
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg border border-slate-200 text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-medical-blue text-white">
                  <th className="p-4 font-bold">Parameter Evaluasi</th>
                  <th className="p-4 font-bold">Gula Pasir (Sukrosa)</th>
                  <th className="p-4 font-bold">Pemanis Sintetis</th>
                  <th className="p-4 font-bold">Ekstrak Stevia</th>
                  <th className="p-4 font-bold bg-digital-cyan-dark text-white">SiManis E-Taste</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">Kandungan Kalori & Glikemik</td>
                  <td className="p-4 text-sweet-coral font-semibold">Tinggi (~4 kkal/g)</td>
                  <td className="p-4 text-emerald-600 font-semibold">0 Kalori</td>
                  <td className="p-4 text-emerald-600 font-semibold">0 Kalori</td>
                  <td className="p-4 bg-digital-cyan/5 font-bold text-digital-cyan">0 Kalori (Murni Sensorik)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">Sensasi Rasa / After-Taste</td>
                  <td className="p-4 text-slate-700">Manis Alami Disukai</td>
                  <td className="p-4 text-amber-600">Rasa Manis Kimiawi</td>
                  <td className="p-4 text-sweet-coral font-medium">After-taste Pahit/Getir</td>
                  <td className="p-4 bg-digital-cyan/5 font-bold text-digital-cyan">Manis Hangat Nyaman</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">Keamanan Jangka Panjang</td>
                  <td className="p-4 text-sweet-coral">Pemicu Diabetes & Penuaan</td>
                  <td className="p-4 text-amber-600">Kontroversi Organ Tubuh</td>
                  <td className="p-4 text-amber-600">Masih Diperdebatkan [9]</td>
                  <td className="p-4 bg-digital-cyan/5 font-bold text-emerald-600">Sangat Aman (Tanpa Ingesti)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">Zat Kimia Masuk ke Tubuh</td>
                  <td className="p-4 text-sweet-coral">100% Masuk ke Darah</td>
                  <td className="p-4 text-sweet-coral">100% Masuk ke Darah</td>
                  <td className="p-4 text-sweet-coral">100% Masuk ke Darah</td>
                  <td className="p-4 bg-digital-cyan/5 font-bold text-emerald-600">0% (Bebas Kimiawi)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">Risiko Karies Gigi & Kolagen</td>
                  <td className="p-4 text-sweet-coral">Sangat Tinggi (Glikasi)</td>
                  <td className="p-4 text-slate-600">Rendah</td>
                  <td className="p-4 text-slate-600">Rendah</td>
                  <td className="p-4 bg-digital-cyan/5 font-bold text-emerald-600">Nol Risiko</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

