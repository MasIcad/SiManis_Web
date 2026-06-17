'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-tech-silver bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-medical-blue">SiManis</h3>
            <p className="mt-2 text-sm text-medical-blue/60">
              Electronic Spoon for Sugar-Free Sweet Sensation
            </p>
            <p className="mt-4 text-xs text-medical-blue/40">
              © {currentYear} SiManis PKM-KI. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://instagram.com/simanis.pkmki"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-tech-silver p-3 text-medical-blue transition-all duration-300 hover:scale-110 hover:bg-digital-cyan hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@simanis.pkmki"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-tech-silver p-3 text-medical-blue transition-all duration-300 hover:scale-110 hover:bg-digital-cyan hover:text-white"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@simanis.pkmki"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-tech-silver p-3 text-medical-blue transition-all duration-300 hover:scale-110 hover:bg-digital-cyan hover:text-white"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}