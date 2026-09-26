'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Thermometer, Zap, ShieldCheck, BatteryCharging, Radio, ChevronRight, Layers, Sliders, CheckCircle } from 'lucide-react'

const componentsData = [
  {
    id: 'esp32',
    name: 'Mikrokontroler ESP32-C3 Supermini',
    icon: Cpu,
    role: 'Unit Pemroses & Kendali Closed-Loop',
    specs: '32-bit RISC-V, Arsitektur Ultra-Kompak',
    description: 'Bertindak sebagai otak pemroses utama yang mengeksekusi algoritma kendali lingkar tertutup (closed-loop). Membaca sensor suhu NTC, memodulasi sinyal PWM frekuensi tinggi ke driver Peltier, serta meregulasi injeksi arus mikro secara terpadu dan presisi.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'peltier',
    name: 'Modul Termoelektrik Peltier TES1-7102SR',
    icon: Thermometer,
    role: 'Pemanasan Balik Cepat (Reverse Heating Mode)',
    specs: 'Rentang Fisiologis 25–35°C, Dimensi Kompak',
    description: 'Menghasilkan stimulasi termal fisiologis langsung pada permukaan kepala sendok. Modul ini mempercepat pembukaan gerbang kanal kation TRPM5 pada reseptor manis lidah, karena suhu hangat optimal terbukti meningkatkan sensitivitas gustatori secara signifikan.',
    color: 'from-sweet-coral to-rose-600',
  },
  {
    id: 'drv8833',
    name: 'Driver H-Bridge Ganda (DRV8833)',
    icon: Sliders,
    role: 'Pengatur Arah & Polaritas Arus Termal',
    specs: 'Kontrol PWM Dinamis, Efisiensi Energi Tinggi',
    description: 'Mengatur daya dan arah polaritas arus modul Peltier secara dinamis (reverse heating mode). Memungkinkan mikrokontroler beralih fungsi antara pemanasan dan pendinginan mikro untuk mengunci target suhu optimal 35°C tanpa overshoot.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'opamp',
    name: 'Pembangkit Arus Mikro (Op-Amp OP07C)',
    icon: Zap,
    role: 'Sumber Arus Konstan (Constant Current Source)',
    specs: 'Ultra-low Offset, Range 20–200 µA, Soft-Start',
    description: 'Memastikan besaran arus mikro yang dihantarkan ke papila lidah tetap konstan pada rentang 20–200 µA meskipun terdapat fluktuasi resistansi kontak akibat lapisan saliva (air liur). Dilengkapi jejaring kapasitor soft-start untuk mencegah kejut elektrik mendadak.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'ntc',
    name: 'Sensor Suhu NTC Thermistor 10 kΩ',
    icon: Radio,
    role: 'Feedback Suhu Real-Time & Thermal Cut-off',
    specs: 'Steinhart-Hart Model, Proteksi Otomatis >40°C',
    description: 'Menempel langsung pada bidang transfer termal modul Peltier untuk memantau suhu elektroda secara real-time. Terintegrasi langsung dengan proteksi keselamatan perangkat keras (thermal cut-off) yang memutus daya otomatis apabila suhu mendeteksi ambang batas kritis di atas 40°C.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'electrodes',
    name: 'Elektroda SS316L Lapis Perak (Ag) & Handle Cu',
    icon: ShieldCheck,
    role: 'Sirkuit Tertutup Bio-Elektronik Food-Grade',
    specs: 'SS316L Food-Grade, Lapis Perak Murni, Handle Cu',
    description: 'Kepala sendok terbuat dari Stainless Steel 316L berlapis perak murni (Ag) yang tahan korosi enzim saliva, berkonduktivitas tinggi, dan menghilangkan sensasi rasa logam (metallic taste). Sirkuit tertutup terbentuk aman saat lidah menyentuh elektroda dan tangan memegang plat gagang tembaga.',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 'power',
    name: 'Baterai Li-Ion 1600mAh & TP4056 USB-C',
    icon: BatteryCharging,
    role: 'Manajemen Daya Nirkabel Portabel',
    specs: '2x Sel Pouch 703040 Paralel 3.7V, Step-Up 5V Boost',
    description: 'Menyuplai kebutuhan daya operasional sistem portabel tanpa kabel (wireless) secara mandiri. Dilengkapi modul pengisian TP4056 berbasis port USB Type-C modern dengan proteksi kelebihan pengisian (over-charge) dan pengosongan (over-discharge).',
    color: 'from-purple-500 to-indigo-600',
  },
]

const galleryImages = [
  {
    id: 'hero',
    title: 'Purwarupa Utuh SiManis',
    subtitle: 'Tampak Keseluruhan dengan Casing Ergonomis & Gagang Elektroda',
    src: '/device/simanis-hero.png',
  },
  {
    id: 'stand',
    title: 'Profil Samping (Dudukan Akrilik)',
    subtitle: 'Rancangan Modular Ringkas untuk Penggunaan Meja Makan',
    src: '/device/simanis-stand.png',
  },
  {
    id: 'head',
    title: 'Kepala Sendok SS316L Lapis Perak',
    subtitle: 'Area Kontak Papila Lidah Food-Grade & Biokompatibel',
    src: '/device/simanis-head.png',
  },
  {
    id: 'port',
    title: 'Port Pengisian USB Type-C',
    subtitle: 'Manajemen Daya Cepat & Kompartemen Elektronik Terintegrasi',
    src: '/device/simanis-port.png',
  },
  {
    id: 'perspective',
    title: 'Perspektif Tiga Perempat',
    subtitle: 'Konstruksi Kuat dengan Distribusi Beban yang Nyaman Digenggam',
    src: '/device/simanis-perspective.png',
  },
]

export function DeviceShowcase() {
  const [selectedComp, setSelectedComp] = useState(componentsData[0])
  const [activeGallery, setActiveGallery] = useState(galleryImages[0])
  const [activeFormulaTab, setActiveFormulaTab] = useState<'current' | 'ntc' | 'temp' | 'hysteresis'>('current')

  return (
    <section id="alat-simanis" className="py-24 bg-sterile-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medical-blue/10 px-4 py-1.5 mb-3 border border-medical-blue/20">
            <Layers className="h-4 w-4 text-medical-blue" />
            <span className="text-xs md:text-sm font-semibold text-medical-blue uppercase tracking-wider">
              Rekayasa Perangkat Keras SiManis
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Arsitektur Fisik &{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              Inovasi Komponen Alat
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            SiManis dirancang secara modular melalui integrasi elektro-termal tertutup (closed-loop) 
            berbasis ESP32-C3, pemanasan balik Peltier, dan sumber arus konstan mikro ampere.
          </p>
        </motion.div>

        {/* Gallery & Real Hardware Photos */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Main Photo View (7 cols) */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
                  <Image
                    src={activeGallery.src}
                    alt={activeGallery.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-medical-blue/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                    Dokumentasi Purwarupa Nyata SiManis
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {galleryImages.map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveGallery(img)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        activeGallery.id === img.id
                          ? 'border-digital-cyan ring-2 ring-digital-cyan/30'
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware Spec Overview (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-digital-cyan bg-digital-cyan/10 px-3 py-1 rounded-full">
                  Spesifikasi Purwarupa
                </span>
                <h3 className="text-2xl font-bold text-medical-blue">
                  {activeGallery.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeGallery.subtitle}
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span><strong>Suhu Operasional:</strong> 25°C – 35°C (Stabil Terkendali)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span><strong>Injeksi Arus:</strong> 20 – 200 µA (Optimal di 80–89 µA)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span><strong>Material Kontak:</strong> SS316L Food-Grade Lapis Perak (Ag)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span><strong>Keamanan:</strong> Thermal Cut-off Otomatis &gt;40°C & Soft-start</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span><strong>Daya Portabel:</strong> Baterai Li-Ion 1600mAh via USB Type-C</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  💡 <em>Alat ini telah diuji secara fungsional melalui 80 titik uji coba terhadap responden untuk memvalidasi intensitas rasa manis virtual tanpa gula.</em>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Component Breakdown (Table 1 from Paper) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-medical-blue">
              Subsistem Komponen Elektronika & Fungsinya
            </h3>
            <p className="text-slate-600 mt-2 text-sm md:text-base">
              Klik pada komponen untuk mempelajari peran teknis dan spesifikasi detailnya
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Component List Navigation (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {componentsData.map((comp) => {
                const Icon = comp.icon
                const isSelected = selectedComp.id === comp.id
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-digital-cyan shadow-md text-medical-blue ring-2 ring-digital-cyan/20'
                        : 'bg-white/60 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${comp.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">{comp.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{comp.role}</div>
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-digital-cyan translate-x-1' : 'text-slate-400'}`} />
                  </button>
                )
              })}
            </div>

            {/* Selected Component Detail Card (7 cols) */}
            <div className="lg:col-span-7">
              <motion.div
                key={selectedComp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${selectedComp.color} shadow-lg`}>
                    <selectedComp.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-digital-cyan tracking-wider uppercase">
                      {selectedComp.specs}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-medical-blue">
                      {selectedComp.name}
                    </h4>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Fungsi Utama dalam Sistem:
                  </span>
                  <div className="text-base font-semibold text-slate-800 mt-1">
                    {selectedComp.role}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-600 leading-relaxed">
                  {selectedComp.description}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Parameter: Sesuai Standar Fisiologis Lidah</span>
                  <span className="text-digital-cyan font-semibold">Tersertifikasi PKM-KI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Persamaan Teoritis (Mathematical & Theoretical Modeling) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-digital-cyan bg-digital-cyan/10 px-3 py-1 rounded-full">
              Dasar Teori & Pemodelan Matematis
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-medical-blue mt-2">
              Persamaan Fisis Kontrol Tertutup SiManis
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              Rumusan perhitungan yang ditanamkan ke dalam firmware mikrokontroler ESP32-C3
            </p>
          </div>

          {/* Formula Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <button
              onClick={() => setActiveFormulaTab('current')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFormulaTab === 'current'
                  ? 'bg-medical-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              1. Output Arus Stimulasi
            </button>
            <button
              onClick={() => setActiveFormulaTab('ntc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFormulaTab === 'ntc'
                  ? 'bg-medical-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              2. Pembagi Tegangan NTC
            </button>
            <button
              onClick={() => setActiveFormulaTab('temp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFormulaTab === 'temp'
                  ? 'bg-medical-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              3. Parameter Beta Steinhart-Hart
            </button>
            <button
              onClick={() => setActiveFormulaTab('hysteresis')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFormulaTab === 'hysteresis'
                  ? 'bg-medical-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              4. Kontrol Histeresis Peltier
            </button>
          </div>

          {/* Formula Content Display */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
            {activeFormulaTab === 'current' && (
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2">Penentuan Output Arus Stimulasi (Kalibrasi Linier):</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-mono text-base md:text-lg font-bold text-medical-blue mb-3">
                  I_out = S · (I_Ref / S_Ref)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Keterangan:</strong> <code>I_out</code> = Arus keluaran aktual mikro ampere (µA), <code>S</code> = Nilai sinyal kendali digital saat ini, <code>I_Ref</code> = Arus referensi hasil pengukuran fisik saat kalibrasi, <code>S_Ref</code> = Nilai sinyal kendali saat kalibrasi.
                </p>
              </div>
            )}

            {activeFormulaTab === 'ntc' && (
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2">Pengukuran Resistansi Sensor NTC (Rangkaian Pembagi Tegangan):</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-mono text-base md:text-lg font-bold text-medical-blue mb-3">
                  R_T = R_s · (V_max / V_out - 1)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Keterangan:</strong> <code>R_T</code> = Resistansi aktual sensor NTC (Ω), <code>R_s</code> = Nilai hambatan resistor seri (Ω), <code>V_max</code> = Tegangan referensi sistem (Volt), <code>V_out</code> = Tegangan keluaran terukur pada sensor (Volt).
                </p>
              </div>
            )}

            {activeFormulaTab === 'temp' && (
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2">Konversi Resistansi ke Besaran Suhu (Persamaan Parameter Beta):</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-mono text-base md:text-lg font-bold text-medical-blue mb-3">
                  1/T = 1/T_0 + (1/B) · ln(R_T / R_0)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Keterangan:</strong> <code>T</code> = Suhu aktual yang diukur (Kelvin), <code>T_0</code> = Suhu referensi standar (298,15 K), <code>B</code> = Konstanta material termistor (Parameter Beta), <code>R_T</code> = Resistansi NTC pada suhu terukur, <code>R_0</code> = Resistansi NTC pada suhu referensi 25°C (10 kΩ).
                </p>
              </div>
            )}

            {activeFormulaTab === 'hysteresis' && (
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2">Mekanisme Kendali Suhu Histeresis pada Peltier:</div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-mono text-base md:text-lg font-bold text-medical-blue mb-3">
                  T_Aktual &lt; (T_Target - ΔT)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Keterangan:</strong> Modul Peltier dialiri arus pemanas kembali hanya jika suhu aktual (<code>T_Aktual</code>) turun melewati ambang batas bawah target (<code>T_Target - ΔT</code>). Metode ini mencegah osilasi saklar terlalu cepat dan menjaga keawetan modul termoelektrik.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

