'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    // ESLint kuralına uygun 'const' yapısı
    const ctx = gsap.context(() => {
      // Üst Başlık Animasyonu
      gsap.fromTo('.urun-meta-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      // KESİN ÇÖZÜM BATCHING: Kartlar tertemiz bir sırayla aşağıdan süzülerek gelir
      gsap.fromTo('.urun-card-v2',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.05, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: '.urun-grid-wrapper', 
            start: 'top 90%', 
            toggleActions: 'play none none none' 
          } 
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-32 relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        
        {/* YENİ DIZAYN: Minimalist Editoryal Başlık */}
        <div className="urun-meta-anim opacity-0 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-12 mb-16 gap-8 transform-gpu will-change-transform">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-teal-600" />
              <span className="text-teal-600 text-xs tracking-[0.4em] uppercase font-bold">Katalog</span>
            </div>
            <h2 className="text-slate-900 font-black leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Geniş Ürün <span className="font-serif italic font-light text-slate-400">Yelpazesi</span>
            </h2>
          </div>
          <Link 
            href="/urunler" 
            className="group flex items-center gap-3 text-slate-500 hover:text-teal-600 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
          >
            Tümünü Gör
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-teal-200 group-hover:bg-teal-50 transition-all duration-300">
               <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* YENİ DIZAYN MİMARİSİ: Asimetrik kargaşa yerine, lüks markaların kullandığı simetrik, eşit grid yapısı */}
        <div className="urun-grid-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {kategoriler.map((kat, i) => (
            <Link
              href="/urunler"
              key={i}
              // DİKKAT: hover animasyonlarında sadece shadow ve border renklerini değiştiriyoruz, GSAP ile çakışacak "translate-y" komutlarını dışarıda bıraktık.
              className="urun-card-v2 opacity-0 group flex flex-col justify-between bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-100 transition-[background-color,box-shadow,border-color] duration-500 min-h-[220px] transform-gpu will-change-transform"
            >
              {/* Üst Kısım: Tag ve Modern Ok İkonu */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1 group-hover:text-teal-700 group-hover:border-teal-200 group-hover:bg-teal-50 transition-colors duration-300">
                  {kat.tag}
                </span>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-teal-500 transition-colors duration-300" />
              </div>

              {/* Alt Kısım: Başlık, Açıklama ve Sıra Numarası */}
              <div className="relative z-10">
                <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {kat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                  {kat.desc}
                </p>
              </div>

              {/* Arka planda devasa siluet rakam (Lüks galeri dokunuşu) */}
              <div className="absolute bottom-[-10px] right-2 pointer-events-none">
                <span className="font-serif italic text-slate-200/50 font-black text-7xl select-none group-hover:text-teal-50 transition-colors duration-500">
                  {kat.index}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}