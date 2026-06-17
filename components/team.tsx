'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'

// Dosen Pendamping
const advisor = {
  name: 'Eka Maulana, S.T., M.T., M.Eng.',
  role: 'Dosen Pendamping',
  bio: 'Dosen pembimbing yang mengarahkan riset dan pengembangan produk SiManis.',
  image: '/team/pakeka.jpeg', // file must exist in public/team/pakeka.jpeg
  social: { linkedin: '#', github: '#', email: '#' }
}

// Replace with your actual team members
const teamMembers = [
  {
    name: 'Malfino Altara S.',
    role: 'Project Leader',
    bio: 'Teknik Elektro 24.',
    image: '/team/member1.JPG', // file must exist in public/team/member1.JPG
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Irsyad Annafi N.',
    role: 'Hardware Engineer',
    bio: 'Teknik Elektro 24',
    image: '/team/member2.JPG', // file must exist in public/team/member2.JPG
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Malikah Nurbaiti B.',
    role: 'Creative Media',
    bio: 'Kedokteran Gigi 24',
    image: '/team/member3.JPG', // file must exist in public/team/member3.JPG
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Vika Nur R.',
    role: 'Software Developer',
    bio: 'Teknik Elektro 24',
    image: '/team/member4.JPG', // file must exist in public/team/member4.JPG
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Aisha Yoshinta M.',
    role: 'Marketing & Documentation',
    bio: 'Kedokteran 24',
    image: '/team/member5.JPG', // file must exist in public/team/member5.JPG
    social: { linkedin: '#', github: '#', email: '#' }
  },
]

// A path only renders as a real image if it's a web-safe path (starts with / or http).
// Windows-style absolute paths (E:\...) or empty strings fall back to the placeholder icon.
function isValidImagePath(path: string) {
  return !!path && (path.startsWith('/') || path.startsWith('http'))
}

function MemberCard({ member, index, large = false, imagePosition = 'object-top' }: { member: typeof advisor; index: number; large?: boolean; imagePosition?: string }) {
  const hasImage = isValidImagePath(member.image)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white border border-tech-silver shadow-sm hover:shadow-xl transition-all duration-300">
        <div className={`relative aspect-square bg-gradient-to-br from-medical-blue/5 to-digital-cyan/5 ${large ? 'md:aspect-[3/1]' : ''}`}>
          {hasImage ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={`object-cover ${imagePosition}`}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            /* Profile Image Placeholder */
            <div className="absolute inset-0 flex items-center justify-center bg-tech-silver/30">
              <svg className="w-24 h-24 text-medical-blue/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-medical-blue mb-1">{member.name}</h3>
          <p className="text-sm text-digital-cyan font-medium mb-3">{member.role}</p>
          <p className="text-sm text-medical-blue/60 mb-4">{member.bio}</p>
          <div className="flex justify-center gap-3">
            <a href={member.social.linkedin} className="text-medical-blue/40 hover:text-digital-cyan transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={member.social.github} className="text-medical-blue/40 hover:text-digital-cyan transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={member.social.email} className="text-medical-blue/40 hover:text-digital-cyan transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-sterile-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4 font-plus-jakarta">
            Meet the{' '}
            <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-medical-blue/70">
            Tim inovatif di balik pengembangan SiManis, siap membawa sweetness revolution ke Indonesia
          </p>
        </motion.div>

        {/* Dosen Pendamping */}
        <div className="max-w-sm mx-auto mb-12">
          <MemberCard member={advisor} index={0} imagePosition="object-top" />
        </div>

        {/* 5 Anggota Tim — grid 6 kolom, tiap card span 2, 2 card terakhir di-offset agar center */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`col-span-2 ${index === 3 ? 'md:col-start-2' : ''}`}
            >
              <MemberCard member={member} index={index + 1} imagePosition="object-[center_15%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}