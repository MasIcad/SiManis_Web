'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Thermometer, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Zap,
    title: 'Sentuh, Rasakan Manis',
    description: 'Cukup sentuhkan SiManis ke lidah Anda. Gelombang mikro lembar akan mengaktifkan sensor manis alami di lidah Anda.',
    color: 'digital-cyan',
    detail: 'Seperti menyentuh gula, tapi tanpa kalori!',
  },
  {
    icon: Shield,
    title: '100% Aman',
    description: 'Arus yang digunakan sangat kecil - lebih kecil dari sikat gigi elektrik! Tubuh Anda tidak akan merasakan apa-apa selain rasa manis.',
    color: 'medical-blue',
    detail: 'Telah teruji aman untuk semua usia',
  },
  {
    icon: Thermometer,
    title: 'Suhu Nyaman',
    description: 'SiManis secara otomatis menjaga suhu tetap nyaman di lidah Anda. Tidak panas, tidak dingin - pas!',
    color: 'sweet-coral',
    detail: '25-35°C - Suhu paling nyaman',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-sterile-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-digital-cyan font-semibold text-sm uppercase tracking-wider">
            Cara Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mt-2 mb-4">
            Semudah Menyendok Makanan
          </h2>
          <p className="text-lg text-medical-blue/70">
            Tidak perlu ribet. Cukup sentuh, dan nikmati sensasi manis tanpa gula!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center p-6 rounded-2xl bg-white border border-tech-silver shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-${step.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <step.icon className={`h-8 w-8 text-${step.color}`} />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-medical-blue text-white text-sm font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-3">{step.title}</h3>
                <p className="text-medical-blue/70 mb-3">{step.description}</p>
                <p className="text-sm text-digital-cyan font-medium">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analogi Sederhana */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-digital-cyan/5 to-sweet-coral/5 rounded-2xl p-8 border border-tech-silver"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-digital-cyan/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-digital-cyan" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-medical-blue mb-2">
                Bayangkan seperti ini:
              </h4>
              <p className="text-medical-blue/70 leading-relaxed">
                SiManis seperti "tombol ajaib" di lidah Anda. Saat disentuh, tombol ini 
                mengirim sinyal "MANIS!" ke otak Anda. Tubuh Anda senang, tapi gula tidak 
                masuk ke dalam tubuh. Semuanya aman, sehat, dan bebas kalori!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}