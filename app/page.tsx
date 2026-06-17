'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Benefits } from '@/components/benefits'
import { Timeline } from '@/components/timeline'
import { Team } from '@/components/team'
import { WaitingList } from '@/components/waiting-list'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Timeline />
      <Team />
      <WaitingList />
      <Footer />
    </main>
  )
}