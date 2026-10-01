'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Activity } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { label: 'Krisis Gula', id: 'krisis-diabetes' },
  { label: 'Inovasi Alat', id: 'alat-simanis' },
  { label: 'Cara Kerja', id: 'cara-kerja' },
  { label: 'Hasil Uji Klinis', id: 'hasil-penelitian' },
  { label: 'Riset', id: 'makalah' },
  { label: 'Tim', id: 'tim' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-6xl">
          {/* Brand Logo & Subtitle */}
          <div
            className="flex cursor-pointer items-center gap-2.5"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-medical-blue to-digital-cyan p-0.5 flex items-center justify-center">
              <img
                src="/simanis-logo-nonteks.png"
                alt="SiManis Logo"
                className="h-full w-full object-contain bg-white rounded-[10px] p-1"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-medical-blue">SiManis</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-digital-cyan/10 text-digital-cyan px-2 py-0.5 rounded-full border border-digital-cyan/20">
                  PKM-KI
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Universitas Brawijaya
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-semibold text-slate-600 transition-colors hover:text-digital-cyan"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => scrollToSection('simulator')}
              className="bg-medical-blue hover:bg-medical-blue/90 text-white text-xs font-semibold shadow-sm"
            >
              <Activity className="h-3.5 w-3.5 mr-1" />
              Uji Simulator
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-medical-blue lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-200 shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2.5 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-digital-cyan rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100 flex gap-2">
                <Button
                  size="sm"
                  onClick={() => scrollToSection('simulator')}
                  className="w-1/2 bg-medical-blue text-white text-xs"
                >
                  Simulator
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}