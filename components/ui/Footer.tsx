'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube, Mail, MapPin, Sparkles } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-digital-cyan to-sweet-coral p-0.5 flex items-center justify-center">
                <img
                  src="/simanis-logo-nonteks.png"
                  alt="SiManis Logo"
                  className="h-full w-full object-contain bg-white rounded-[10px] p-1"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">SiManis</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm">
              Sendok Pintar Penghasil Sensasi Manis Virtual Dengan Pemanasan Balik Berbasis Peltier dan Kontrol Arus Mikro Sebagai Upaya Pencegahan Diabetes Melitus di Indonesia.
            </p>
            <div className="flex items-center gap-2 text-xs text-digital-cyan-glow">
              <Sparkles className="h-4 w-4" />
              <span>Program Kreativitas Mahasiswa Karsa Cipta (PKM-KI)</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <button onClick={() => scrollToSection('krisis-diabetes')} className="text-left hover:text-white transition-colors">
                Krisis Gula Nasional
              </button>
              <button onClick={() => scrollToSection('alat-simanis')} className="text-left hover:text-white transition-colors">
                Arsitektur Alat
              </button>
              <button onClick={() => scrollToSection('cara-kerja')} className="text-left hover:text-white transition-colors">
                Biofisika E-Taste
              </button>
              <button onClick={() => scrollToSection('hasil-penelitian')} className="text-left hover:text-white transition-colors">
                Uji 80 Responden
              </button>
              <button onClick={() => scrollToSection('kalkulator-gula')} className="text-left hover:text-white transition-colors">
                Kalkulator Gula
              </button>
              <button onClick={() => scrollToSection('simulator')} className="text-left hover:text-white transition-colors">
                Simulator Virtual
              </button>
              <button onClick={() => scrollToSection('makalah')} className="text-left hover:text-white transition-colors">
                Naskah Ilmiah
              </button>
              <button onClick={() => scrollToSection('tim')} className="text-left hover:text-white transition-colors">
                Tim Peneliti
              </button>
            </div>
          </div>

          {/* Institutional Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Institusi
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-digital-cyan-bright flex-shrink-0 mt-0.5" />
                <span>Universitas Brawijaya, Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-digital-cyan-bright flex-shrink-0" />
                <a href="mailto:malfinoaltaras@student.ub.ac.id" className="hover:text-digital-cyan-bright underline">
                  malfinoaltaras@student.ub.ac.id
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/simanis.pkmki"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all hover:bg-digital-cyan hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@simanis.pkmki"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all hover:bg-digital-cyan hover:text-white"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@simanis.pkmki"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all hover:bg-digital-cyan hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Tim SiManis PKM-KI Universitas Brawijaya. All rights reserved.</p>
          <p>Mendukung Pencegahan Diabetes Melitus & Hidup Sehat Tanpa Gula Berlebih.</p>
        </div>
      </div>
    </footer>
  )
}