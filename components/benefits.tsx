'use client'

import { motion } from 'framer-motion'
import { Activity, ShieldCheck, TrendingUp, Heart, Smile, Award } from 'lucide-react'

const benefits = [
  {
    icon: Activity,
    title: 'Bebas Gula, Bebas Risiko',
    description: 'Nikmati rasa manis tanpa khawatir kadar gula darah naik. Cocok untuk penderita diabetes dan yang sedang diet.',
    color: 'digital-cyan',
  },
  {
    icon: ShieldCheck,
    title: 'Bahan Premium & Higienis',
    description: 'Terbuat dari bahan food-grade berkualitas tinggi. Aman digunakan setiap hari, bahkan untuk anak-anak.',
    color: 'medical-blue',
  },
  {
    icon: Heart,
    title: 'Ramah Kesehatan Gigi',
    description: 'Tanpa gula berarti tanpa risiko gigi berlubang. Senyum sehat tanpa takut gigi rusak!',
    color: 'sweet-coral',
  },
  {
    icon: Smile,
    title: 'Ubahan Gaya Hidup Sehat',
    description: 'Mulai kurangi konsumsi gula secara perlahan tanpa merasa tersiksa. Perubahan kecil, dampak besar!',
    color: 'digital-cyan',
  },
  {
    icon: TrendingUp,
    title: 'Solusi Masa Depan',
    description: 'Jawaban untuk masalah obesitas dan diabetes yang semakin meningkat di Indonesia.',
    color: 'medical-blue',
  },
  {
    icon: Award,
    title: 'Inovasi Anak Bangsa',
    description: 'Dikembangkan oleh tim muda Indonesia untuk Indonesia yang lebih sehat.',
    color: 'sweet-coral',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sweet-coral font-semibold text-sm uppercase tracking-wider">
            Kenapa SiManis?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mt-2 mb-4">
            Manfaat untuk{' '}
            <span className="text-gradient">Kesehatan Anda</span>
          </h2>
          <p className="text-lg text-medical-blue/70">
            Lebih dari sekadar sendok pintar - SiManis adalah investasi untuk kesehatan jangka panjang
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group p-6 rounded-2xl bg-sterile-white border border-tech-silver hover:border-digital-cyan/50 transition-all duration-300 h-full hover:shadow-lg">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${benefit.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-6 w-6 text-${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-medical-blue mb-2">{benefit.title}</h3>
                <p className="text-medical-blue/60 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}