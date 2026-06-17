'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

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
          isScrolled ? 'glass-effect border-b border-tech-silver shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          {/* ========== LOGO - GANTI BAGIAN INI ========== */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center gap-2"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/simanis-logo-nonteks.png" 
              alt="SiManis Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-medical-blue">SiManis</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {['Technology', 'Impact', 'Journey', 'Team'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-medical-blue/70 transition-colors hover:text-digital-cyan"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {['Technology', 'Impact', 'Journey', 'Team'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-left text-medical-blue/70 hover:bg-tech-silver/30 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}