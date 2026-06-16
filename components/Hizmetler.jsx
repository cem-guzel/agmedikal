'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const hizmetler = [
  { number: '01', title: 'Yetkili Satış', desc: 'Omron, Erka, Mediven ve daha fazlası için yetkili satış noktası. Orijinal ürün, resmi garanti.', detail: 'Stokta 500+ ürün' },
  { number: '02', title: 'Teknik Servis', desc: '20 yıllık tecrübeli ekibimizle biyomedikal cihazlarınızın bakım, onarım ve kalibrasyonu.', detail: '20 yıl deneyim' },
  { number: '03', title: 'Hızlı Teslimat', desc: 'Hatay ve çevre illerinde geniş teslimat ağımızla ürünleriniz kapınızda.', detail: 'Hatay geneli' },
  { number: '04', title: 'Uzman Danışmanlık', desc: 'Hangi ürünün size uygun olduğunu bilmiyorsanız uzman ekibimiz doğru çözümü bulur.', detail: 'Ücretsiz danışma' },
]

export default function Hizmetler() {
  const containerRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    // ESLint kuralına uygun olarak 'const' kullanıldı
    const ctx = gsap.context(() => {
      // Tüm bölümün başlığı ve alt metni tek seferde yumuşakça gelir
      gsap.fromTo('.hizmet-meta-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      // Kartlar tek bir kapsayıcı tetiklenerek, sırayla ve mükemmel performansla uçarak girer
      gsap.fromTo('.hizmet-card-v2',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hizmet-grid-wrapper',
            start: 'top 90%',
            toggleActions: 'play none none none' // Elemanların yukarı kaydırınca kaybolmasını kesin olarak engeller
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-[#F8FAFC] py-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* YENİ DIZAYN: Üst Hizmet Başlığı (Klasik asimetrik yapı yerine tam genişlik editoryal düzen) */}
        <div className="hizmet-meta-anim opacity-0 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-12 mb-20 gap-8 transform-gpu will-change-transform">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-teal-600" />
              <span className="text-teal-600 text-xs tracking-[0.4em] uppercase font-bold">Çözüm Ortaklarımız</span>
            </div>
            <h2 className="text-slate-900 font-black leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Profesyonel <span className="font-serif italic font-light text-slate-400">Hizmetler</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base font-medium max-w-sm md:text-right leading-relaxed">
            Satış öncesinden teknik servise kadar 20 yıllık köklü tecrübemizle Hatay genelinde tam donanımlı destek sağlıyoruz.
          </p>
        </div>

        {/* YENİ DIZAYN MİMARİSİ: Ağır dikey çizgiler içermeyen, tarayıcı dostu temiz ızgara yapısı */}
        <div className="hizmet-grid-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {hizmetler.map((h, i) => (
            <div 
              key={i} 
              className="hizmet-card-v2 opacity-0 bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-sm md:hover:shadow-xl md:hover:border-teal-100 md:hover:-translate-y-1 md:transition-all md:duration-500 flex flex-col justify-between min-h-[260px] transform-gpu will-change-transform"
            >
              <div>
                {/* Üst Satır: Devasa Rakam ve Klas Etiket */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif italic text-slate-200/80 font-black text-5xl md:text-6xl leading-none select-none tracking-tighter tabular-nums">
                    {h.number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-black text-teal-700 bg-teal-50 border border-teal-100/60 rounded-xl px-3 py-1.5">
                    {h.detail}
                  </span>
                </div>

                {/* İçerik Alanı */}
                <h3 className="text-slate-800 font-black text-2xl mb-3 tracking-tight">
                  {h.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-md">
                  {h.desc}
                </p>
              </div>

              {/* Alt Aksiyon Linki */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <Link 
                  href="/iletisim" 
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-teal-600 md:transition-colors md:duration-300"
                >
                  Detaylar <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}