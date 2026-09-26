'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, BookOpen, ExternalLink, GraduationCap, Quote, Download, CheckCircle, Mail } from 'lucide-react'

const paperSections = [
  {
    id: 'abstract',
    title: 'Intisari (Abstract)',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
        <p>
          <strong>INTISARI —</strong> Tingginya konsumsi gula masyarakat Indonesia telah menjadi faktor signifikan yang memicu peningkatan prevalensi diabetes melitus dan berbagai penyakit tidak menular lainnya. Kondisi ini diperburuk oleh preferensi kuat masyarakat terhadap rasa manis, sehingga upaya pengurangan konsumsi gula seringkali tidak efektif. Alternatif pemanis seperti stevia memang semakin populer, tetapi tetap memiliki berbagai keterbatasan, seperti isu keamanan jangka panjang, sensasi after-taste yang kurang disukai, serta kekhawatiran konsumen terhadap kualitas produk.
        </p>
        <p>
          Oleh karena itu, dibutuhkan inovasi baru yang mampu memenuhi kebutuhan sensorik tersebut dari sumbernya, yakni reseptor rasa pada lidah, tanpa melibatkan asupan glukosa maupun zat aditif apapun ke dalam tubuh. Penelitian ini mengembangkan <strong>SiManis</strong>, sebuah perangkat berbentuk sendok pintar yang dirancang untuk memberikan sensasi manis melalui kombinasi stimulasi elektrik dan termal pada lidah. Perancangan dilakukan melalui studi literatur terkait perilaku konsumsi masyarakat dan prinsip fisiologi lidah yang dapat merespons rangsangan listrik dan suhu tertentu.
        </p>
        <p>
          SiManis memanfaatkan teknologi E-Taste melalui kombinasi stimulasi elektrik dan termal untuk mengaktivasi reseptor T1R2/T1R3 pada lidah tanpa pengikatan ligan kimiawi. Berdasarkan kajian literatur, sistem ini dirancang dengan rentang arus mikro 20–200 μA dan suhu 25–35°C sebagai parameter operasional kendali tertutup (closed-loop). Hasil perancangan menunjukkan bahwa SiManis memiliki potensi besar sebagai solusi alternatif untuk membantu masyarakat merasakan sensasi manis tanpa asupan gula.
        </p>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <strong className="text-medical-blue">KATA KUNCI:</strong> Stimulasi Elektrik, Rasa Manis Buatan, Pengurangan Gula, E-Taste, Diabetes Melitus, closed-loop.
        </div>
      </div>
    ),
  },
  {
    id: 'intro',
    title: 'Pendahuluan & Urgensi',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
        <p>
          Beberapa dekade terakhir, Indonesia menghadapi beban ganda malnutrisi, di mana masalah kekurangan gizi masih terjadi bersamaan dengan penyakit tidak menular tentang gizi, salah satunya adalah diabetes melitus. Salah satu faktor utama yang menyebabkan tingginya kasus diabetes melitus ini adalah tingginya konsumsi gula masyarakat Indonesia, di mana hal tersebut tidak bisa dilepas dari budaya konsumsi harian.
        </p>
        <p>
          Berdasarkan data Badan Pusat Statistik (BPS) yang dikutip dari Narasi (2023), rata-rata konsumsi gula per kapita di Indonesia mencapai <strong>160 gram per hari</strong>, termasuk gula dalam nasi putih, roti, sereal, susu kental manis, gula merah, kecap, hingga aneka minuman es. Jumlah ini jauh melampaui batas aman yang disarankan World Health Organization (WHO) yakni maksimal <strong>25 gram per hari</strong> (&lt;10% total energi). Kemenkes RI juga membatasi gula tambahan maksimal 50 gram per hari untuk dewasa, dan 2–3 sendok makan untuk anak sekolah.
        </p>
        <p>
          Menurut International Diabetes Federation (IDF Atlas 2024), kasus diabetes melitus mencapai <strong>589 juta jiwa</strong> (usia 20–79 tahun) dan diproyeksikan melonjak ke <strong>853 juta jiwa di tahun 2050</strong>. Indonesia menempati kontributor terbesar ke-2 di Pasifik Barat dengan prevalensi 11,3% (20,43 juta jiwa). Konsumsi gula tinggi juga mempercepat proses glikasi kolagen kulit dan organ metabolik.
        </p>
      </div>
    ),
  },
  {
    id: 'method',
    title: 'Metode & Rekayasa Teknik',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
        <p>
          Prototipe SiManis direkayasa sebagai sistem kendali lingkar tertutup (closed-loop) elektro-termal. Unit pemroses utama menggunakan <strong>ESP32-C3 SuperMini</strong> berarsitektur RISC-V 32-bit yang mengontrol laju modulasi PWM pemanas dan membaca sensor suhu NTC.
        </p>
        <p>
          Permukaan sendok dilengkapi modul termoelektrik Peltier tipe <strong>TES1-7102SR</strong> yang dikendalikan oleh driver H-bridge <strong>DRV8833</strong> dalam mode pemanasan balik (reverse heating mode) untuk menjaga kestabilan suhu 35°C secara presisi. Injeksi arus mikro dihasilkan oleh rangkaian sumber arus konstan menggunakan <strong>Op-Amp OP07C</strong> dengan rentang kerja 20–200 µA dan jejaring soft-start.
        </p>
        <p>
          Elektroda lidah menggunakan <strong>Stainless Steel 316L berlapis perak (Ag)</strong> food-grade yang anti-korosi asam saliva dan mengeliminasi rasa logam (metallic taste), yang membentuk loop tertutup saat tangan menggenggam plat tembaga pada gagang. Sistem ditenagai baterai Li-Ion 3,7V 1600 mAh dengan manajemen daya terintegrasi TP4056 USB Type-C.
        </p>
      </div>
    ),
  },
  {
    id: 'results',
    title: 'Hasil & Pembahasan',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
        <p>
          Pengujian fungsional dilakukan melalui <strong>80 kali stimulasi elektro-termal</strong> terhadap responden pada rentang arus 40–100 µA dan suhu kerja 35–40°C. 
        </p>
        <p>
          Hasil menunjukkan ambang aktivasi optimal yang sangat spesifik pada rentang <strong>80–89 µA pada suhu 35°C</strong>, dengan rata-rata skor manis 1,24 ± 1,76 (skor individual mencapai 3–4,5) dan sensasi hangat yang nyaman. Di bawah 80 µA, arus belum mencapai potensial aksi reseptor T1R2/T1R3. Di atas 100 µA, persepsi manis anjlok akibat over-stimulation saraf lidah yang memicu kanal asam dan reseptor nyeri somatosensori (sensasi kebas atau logam).
        </p>
        <p>
          Pada pengujian suhu 40°C, efektivitas persepsi manis turun drastis (7 dari 9 pengujian mencatat skor 0). Hal ini disebabkan oleh aktivasi reseptor nyeri panas <strong>TRPV1</strong> di atas 37°C yang menutupi transmisi sinyal manis kanal <strong>TRPM5</strong>, serta dipicunya sistem proteksi thermal cut-off mikrokontroler demi keselamatan subjek.
        </p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    title: 'Kesimpulan',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
        <p>
          Inovasi <strong>SiManis</strong> terbukti secara teknis dan empiris mampu menghasilkan persepsi rasa manis virtual pada lidah manusia melalui stimulasi elektro-termal tertutup tanpa asupan glukosa maupun zat pemanis kimiawi.
        </p>
        <p>
          Dengan parameter operasional optimal arus mikro 80–89 µA dan suhu kerja 35°C, SiManis menawarkan terobosan strategis untuk menekan konsumsi gula harian berlebih masyarakat Indonesia, menurunkan risiko diabetes melitus, dan mendukung peningkatan kualitas hidup masyarakat tanpa menghilangkan kenikmatan sensorik terhadap rasa manis.
        </p>
      </div>
    ),
  },
  {
    id: 'references',
    title: 'Daftar Referensi (12 Rujukan)',
    content: (
      <div className="space-y-3 text-xs md:text-sm text-slate-700 font-mono">
        <p>[1] Narasi Daily (2023) <em>Mengungkap Fakta Konsumsi Gula di Indonesia: Ancaman Tersembunyi di Balik Kebiasaan Manis Kita.</em> Narasi.</p>
        <p>[2] World Health Organization (2015) <em>WHO calls on countries to reduce sugars intake among adults and children.</em></p>
        <p>[3] International Diabetes Federation (2025) <em>IDF Diabetes Atlas, 11th Edition.</em> Brussels: International Diabetes Federation.</p>
        <p>[4] Sinaga, J. et al. (2024) ‘Gula dan Kesehatan: Kajian Terhadap Dampak Kesehatan Akibat Konsumsi Gula Berlebih’, <em>Mutiara: Jurnal Ilmiah Multidisiplin Indonesia</em>, 2(1), pp. 54–68.</p>
        <p>[5] Yuniarti, E. et al. (2025) ‘Dampak Konsumsi Minuman Kemasan terhadap Anak SD’, <em>PEDAMAS</em>, 3(01), pp. 319–328.</p>
        <p>[6] Auliya, F. et al. (2025) ‘Scoping Review: Dampak Konsumsi Makanan Manis terhadap Penurunan Kolagen dan Penuaan Sel Kulit’, <em>Jurnal Penelitian Inovatif</em>, 5(2), pp. 1203–1212.</p>
        <p>[7] Food and Drug Administration (2024) <em>GRAS Notice Inventory: Steviol Glycosides.</em></p>
        <p>[8] Badan Pengawas Obat dan Makanan RI (2004) <em>Keputusan Kepala BPOM: Penggunaan Ekstrak Stevia sebagai Pemanis Alami.</em></p>
        <p>[9] Farid, A. et al. (2020) ‘The hidden hazardous effects of stevia and sucralose consumption in male and female albino mice’, <em>Saudi Pharmaceutical Journal</em>, 28(10), pp. 1290–1300.</p>
        <p>[10] Zhou, N. (2023) <em>Tongue Buds: A DIY Electricity-Based Taste Interface Device.</em> Medium.</p>
        <p>[11] Ullah, A., Liu, Y. et al. (2022) ‘E-Taste: Taste sensations and flavors based on tongue’s electrical and thermal stimulation’, <em>Sensors</em>, 22(13), 4976.</p>
        <p>[12] Ullah, A. et al. (2022) ‘E-Taste: Taste Sensations and Flavors Based on Tongue’s Electrical and Thermal Stimulation’, <em>Sensors</em>, MDPI.</p>
      </div>
    ),
  },
]

export function ResearchPaper() {
  const [activeTab, setActiveTab] = useState(paperSections[0].id)

  const currentSection = paperSections.find((s) => s.id === activeTab) || paperSections[0]

  return (
    <section id="makalah" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-medical-blue/10 px-4 py-1.5 mb-3 border border-medical-blue/20">
            <GraduationCap className="h-4 w-4 text-medical-blue" />
            <span className="text-xs md:text-sm font-semibold text-medical-blue uppercase tracking-wider">
              Publikasi & Naskah Ilmiah
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue tracking-tight mb-4">
            Dokumentasi Riset Akademis{' '}
            <span className="bg-gradient-to-r from-medical-blue via-digital-cyan to-sweet-coral bg-clip-text text-transparent">
              SiManis
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Karya ilmiah kolaboratif multidisiplin Fakultas Teknik, Fakultas Kedokteran Gigi, 
            dan Fakultas Kedokteran Universitas Brawijaya.
          </p>
        </motion.div>

        {/* Paper Title Card */}
        <div className="bg-gradient-to-br from-slate-900 via-medical-blue-deep to-medical-blue text-white rounded-3xl p-6 md:p-10 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-2 bg-digital-cyan/20 text-digital-cyan-glow text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-digital-cyan/30">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Naskah Ilmiah PKM-KI 2024 / Universitas Brawijaya</span>
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mb-4">
            Sendok Pintar Penghasil Sensasi Manis Virtual Dengan Pemanasan Balik Berbasis Peltier dan Kontrol Arus Mikro Sebagai Upaya Pencegahan Diabetes Melitus
          </h3>

          {/* Authors List */}
          <div className="text-xs md:text-sm text-slate-200 space-y-1 mb-4">
            <div>
              <strong>Penulis:</strong> Malfino Altara Satyaraka<sup>1*</sup>, Irsyad Annafi Nurhikmah<sup>2</sup>, Malikah Nurbaiti Balenzya<sup>3</sup>, Vika Nur Ristiana<sup>4</sup>, Aisa Yoshinta Maharani<sup>5</sup>
            </div>
            <div className="text-slate-300 text-xs">
              <sup>1,2,4</sup>Fakultas Teknik, <sup>3</sup>Fakultas Kedokteran Gigi, <sup>5</sup>Fakultas Kedokteran Universitas Brawijaya
            </div>
            <div className="text-slate-300 text-xs flex items-center gap-2 pt-1">
              <Mail className="h-3 w-3 text-digital-cyan-bright" />
              <span>Corresponding Author: <code>malfinoaltaras@student.ub.ac.id</code></span>
            </div>
          </div>
        </div>

        {/* Paper Reader Tabs */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-slate-200 bg-white p-2 gap-1.5">
            {paperSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === sec.id
                    ? 'bg-medical-blue text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="p-6 md:p-10 bg-white">
            <h4 className="text-xl font-bold text-medical-blue mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>{currentSection.title}</span>
              <Quote className="h-5 w-5 text-digital-cyan opacity-40" />
            </h4>
            {currentSection.content}
          </div>
        </div>
      </div>
    </section>
  )
}

