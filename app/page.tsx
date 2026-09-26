'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { DiabetesCrisis } from '@/components/diabetes-crisis'
import { SugarCalculator } from '@/components/sugar-calculator'
import { DeviceShowcase } from '@/components/device-showcase'
import { ScienceMechanism } from '@/components/science-mechanism'
import { ClinicalResults } from '@/components/clinical-results'
import { InteractiveSimulator } from '@/components/interactive-simulator'
import { ResearchPaper } from '@/components/research-paper'
import { Team } from '@/components/team'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DiabetesCrisis />
      <SugarCalculator />
      <DeviceShowcase />
      <ScienceMechanism />
      <ClinicalResults />
      <InteractiveSimulator />
      <ResearchPaper />
      <Team />
      <Footer />
    </main>
  )
}