'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const kategoriler = [
  { title: 'Solunum Cihazları', desc: 'Cpap, Oto Cpap, Bpap ve oksijen konsantratörleri', tag: 'Medikal Cihaz', index: '01' },
  { title: 'Ortopedik Ürünler', desc: 'Dizlik, boyunluk, koltuk değneği, walker ve tekerlekli sandalye', tag: 'Ortopedi', index: '02' },
  { title: 'Tansiyon Aletleri', desc: 'Omron dijital ve Erka manuel tansiyon cihazları', tag: 'Tanı Cihazı', index: '03' },
  { title: 'Hasta Bakım', desc: 'Hasta yatakları, karyolalar, hasta bezi ve sondalar', tag: 'Bakım', index: '04' },
  { title: 'Yara & Pansuman', desc: 'Yara bakım ürünleri ve pansuman malzemeleri', tag: 'Sarf Malzeme', index: '05' },
  { title: 'Varis & Kompresyon', desc: 'Varis çorapları ve kompresyon ürünleri', tag: 'Kompresyon', index: '06' },
  { title: 'Anne & Bebek', desc: 'Anne bebek sağlık ürünleri', tag: 'Pediatri', index: '07' },
  { title: 'Diğer Ürünler', desc: 'Nebülizatör, ağrı bantları, zayıflama ürünleri ve daha fazlası', tag: 'Çeşitli', index: '08' },
]

export default function UrunKategorileri() {
  const sectionRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    gsap.fromTo('.urun-header',
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )

    gsap.utils.toArray('.urun-item').forEach((item, i) => {
      gsap.fromTo(item,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 88%' }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-slate-50 py-32 relative overflow-hidden">
      
      {/* Arka Planda Glass Efektini Besleyecek Zarif Renk Topları */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="urun-header mb-16 invisible">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-teal-600" />
            <span className="text-teal-600 text-xs tracking-[0.4em] uppercase font-bold">Ürün Kategorileri</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-slate-900 font-black leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Geniş Ürün<br />
              <span className="text-slate-400">Yelpazemiz</span>
            </h2>
            <Link
              href="/urunler"
              className="group inline-flex items-center gap-4 text-slate-500 hover:text-teal-600 text-sm font-bold tracking-widest uppercase transition-all duration-300 self-end"
            >
              <span className="w-8 h-px bg-slate-300 group-hover:w-14 group-hover:bg-teal-600 transition-all duration-500" />
              Tümünü Gör
            </Link>
          </div>
        </div>

        {/* Düzeltilmiş Bento Grid Yapısı (Glassmorphism Tasarım) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {kategoriler.map((kat, i) => {
            // Izgara Matematiği: 0. index 8 kolon, diğerleri 4 kolon alır.
            // Satır 1: 8 + 4 = 12
            // Satır 2: 4 + 4 + 4 = 12
            // Satır 3: 4 + 4 + 4 = 12
            const isWide = i === 0
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4'

            return (
              <Link
                href="/urunler"
                key={i}
                className={`urun-item invisible ${colSpan} group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/80 shadow-lg shadow-slate-200/40 hover:bg-white/90 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 hover:border-teal-100/50 transition-all duration-500 overflow-hidden cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Sol vurgu çizgisi */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative flex flex-col h-full min-h-[160px]">
                  {/* Üst satır */}
                  <div className="flex items-start justify-between mb-auto z-10">
                    <span className="font-serif italic text-slate-200 font-black text-5xl md:text-6xl leading-none tabular-nums group-hover:text-teal-100 transition-colors duration-500">
                      {kat.index}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-slate-500 border border-slate-200 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 group-hover:text-teal-700 group-hover:border-teal-200 group-hover:bg-teal-50 transition-all duration-500">
                      {kat.tag}
                    </span>
                  </div>

                  {/* Alt içerik */}
                  <div className="mt-8 z-10">
                    <h3 className={`font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300 ${isWide ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {kat.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300 max-w-sm">
                      {kat.desc}
                    </p>
                  </div>

                  {/* Ok — hover'da sağ alttan nazikçe belirir */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-teal-50 rounded-tl-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8h14M8 1l7 7-7 7" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}