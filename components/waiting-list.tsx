'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Loader2, CheckCircle, Gift } from 'lucide-react'

export function WaitingList() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi'
    if (!formData.email.trim()) newErrors.email = 'Email harus diisi'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email tidak valid'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)
    
    // Simulasi pengiriman
    setTimeout(() => {
      toast.success('Berhasil bergabung! 🎉')
      setIsSuccess(true)
      setFormData({ name: '', email: '' })
      setErrors({})
      setIsLoading(false)
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section id="waiting-list" className="py-24 bg-gradient-to-b from-sterile-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Card className="border-2 border-digital-cyan/20 shadow-xl overflow-hidden">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-digital-cyan/10 flex items-center justify-center">
                <Gift className="h-8 w-8 text-digital-cyan" />
              </div>
              <CardTitle className="text-3xl font-bold text-medical-blue md:text-4xl">
                Dapatkan Akses{' '}
                <span className="text-gradient">Early Bird!</span>
              </CardTitle>
              <CardDescription className="text-base text-medical-blue/70">
                Jadi yang pertama mencoba SiManis dan dapatkan diskon spesial 50% untuk 100 pendaftar pertama!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-digital-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-medical-blue mb-2">
                    Terima kasih sudah mendaftar!
                  </h3>
                  <p className="text-medical-blue/70">
                    Kami akan mengirimkan info menarik dan kode diskon spesial ke email Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap"
                    className="h-12"
                    disabled={isLoading}
                  />
                  {errors.name && <p className="text-sm text-sweet-coral">{errors.name}</p>}
                  
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Alamat email"
                    className="h-12"
                    disabled={isLoading}
                  />
                  {errors.email && <p className="text-sm text-sweet-coral">{errors.email}</p>}
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      'Dapatkan Akses Early Access'
                    )}
                  </Button>
                  <p className="text-xs text-center text-medical-blue/40">
                    *Kami tidak akan spam. Dijamin aman.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}