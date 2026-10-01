'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Users, GraduationCap, Award } from 'lucide-react'
import Image from 'next/image'

// Dosen Pendamping
const advisor = {
  name: 'Eka Maulana, S.T., M.T., M.Eng.',
  role: 'Dosen Pembimbing & Penasihat Riset',
  faculty: 'Departemen Teknik Elektro, Fakultas Teknik Universitas Brawijaya',
  bio: 'Mengarahkan riset bio-elektronika, perancangan sistem kendali lingkar tertutup (closed-loop), dan formulasi metodologi penelitian PKM-KI.',
  image: '/team/pakeka.jpeg',
}

// 5 Anggota Tim Multidisiplin
const teamMembers = [
  {
    name: 'Malfino Altara Satyaraka',
    role: 'Ketua Tim & Penulis Utama (Author 1)',
    faculty: 'Teknik Elektro 2024, Fakultas Teknik',
    bio: 'Memimpin koordinasi riset terpadu, konseptualisasi teknologi E-Taste, dan perancangan arsitektur sistem kendali closed-loop.',
    image: '/team/member1.png',
    email: 'malfinoaltaras@student.ub.ac.id',
  },
  {
    name: 'Irsyad Annafi Nurhikmah',
    role: 'Hardware & Electronics Engineer (Author 2)',
    faculty: 'Teknik Elektro 2024, Fakultas Teknik',
    bio: 'Merancang rangkaian sumber arus mikro Op-Amp OP07C, sistem proteksi soft-start, dan sirkuit daya nirkabel.',
    image: '/team/member2.JPG',
    email: '#',
  },
  {
    name: 'Malikah Nurbaiti Balenzya',
    role: 'Oral Health & Creative Media (Author 3)',
    faculty: 'Pendidikan Dokter Gigi 2024, FKG',
    bio: 'Menelaah fisiologi gustatori, biokompatibilitas elektroda oral SS316L perak terhadap saliva, serta perancangan media kreatif.',
    image: '/team/member3.png',
    email: '#',
  },
  {
    name: 'Vika Nur Ristiana',
    role: 'Firmware & Software Developer (Author 4)',
    faculty: 'Teknik Elektro 2024, Fakultas Teknik',
    bio: 'Mengembangkan algoritma PWM mikrokontroler ESP32-C3, pemodelan histeresis Peltier, dan sistem thermal cut-off keamanan.',
    image: '/team/member4.png',
    email: '#',
  },
  {
    name: 'Aisa Yoshinta Maharani',
    role: 'Medical Research & Documentation (Author 5)',
    faculty: 'Pendidikan Dokter 2024, Fakultas Kedokteran',
    bio: 'Mengkaji epidemiologi diabetes melitus nasional, analisis dampak asupan gula berlebih terhadap glikasi, dan dokumentasi klinis.',
    image: '/team/member5.png',
    email: '#',
  },
]

export function Team() {
  return (
    <section id="tim" className="py-24 bg-sterile-white relative">
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
            <Users className="h-4 w-4 text-medical-blue" />
            <span className="text-xs md:text-sm font-semibold text-medical-blue uppercase tracking-wider">
              Kolaborasi Multidisiplin Universitas Brawijaya
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Tim Peneliti & Pengembang{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              SiManis
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Sinergi multidisipliner antara ilmu Teknik Elektro (sistem kontrol & bio-elektronika), 
            Kedokteran Gigi (biokompatibilitas oral & saliva), dan Kedokteran (pencegahan diabetes melitus).
          </p>
        </motion.div>

        {/* Dosen Pembimbing Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-digital-cyan/30 shadow-md">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 160px, 160px"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-digital-cyan/10 text-digital-cyan px-2.5 py-1 rounded-full border border-digital-cyan/20">
                {advisor.role}
              </span>
              <h3 className="text-xl font-bold text-medical-blue">{advisor.name}</h3>
              <div className="text-xs font-semibold text-slate-500">{advisor.faculty}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{advisor.bio}</p>
            </div>
          </div>
        </div>

        {/* 5 Team Members Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-digital-cyan bg-digital-cyan/10 px-2.5 py-1 rounded-full">
                    {member.role}
                  </span>
                  <h4 className="text-lg font-bold text-medical-blue mt-2 leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {member.faculty}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {member.email !== '#' && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-medical-blue font-medium">
                      <Mail className="h-3.5 w-3.5 text-digital-cyan" />
                      {member.email}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multidisciplinary Synergy Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 max-w-4xl mx-auto shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
              <Award className="h-7 w-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Kekuatan Riset Multidisiplin Lintas 3 Fakultas
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Pengembangan SiManis memadukan kepakaran rekayasa kendali elektronik terpadu dari Fakultas Teknik, telaah keamanan saliva dan kenyamanan oral dari Fakultas Kedokteran Gigi, serta validasi prevensi klinis diabetes melitus dari Fakultas Kedokteran Universitas Brawijaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}