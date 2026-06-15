'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

const hizmetler = [
  { number: '01', title: 'Yetkili Satış', desc: 'Omron, Erka, Mediven ve daha fazlası için yetkili satış noktası. Orijinal ürün, resmi garanti.', detail: 'Stokta 500+ ürün' },
  { number: '02', title: 'Teknik Servis', desc: '20 yıllık tecrübeli ekibimizle biyomedikal cihazlarınızın bakım, onarım ve kalibrasyonu.', detail: '20 yıl deneyim' },
  { number: '03', title: 'Hızlı Teslimat', desc: 'Hatay ve çevre illerinde geniş teslimat ağımızla ürünleriniz kapınızda.', detail: 'Hatay geneli' },
  { number: '04', title: 'Uzman Danışmanlık', desc: 'Hangi ürünün size uygun olduğunu bilmiyorsanız uzman ekibimiz doğru çözümü bulur.', detail: 'Ücretsiz danışma' },
]

export default function Hizmetler() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    // GSAP Context ile hafıza sızıntısını (Memory Leak) önlüyoruz
    let ctx = gsap.context(() => {
      // Çizgi animasyonu
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 20%', scrub: true } }
      )

      // Satır animasyonları (TypeScript "as HTMLElement" ibareleri tamamen silindi)
      gsap.utils.toArray('.hizmet-row').forEach((row) => {
        gsap.fromTo(row,
          { autoAlpha: 0, x: -30 },
          { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 95%' } } 
        )
      })

      // Başlık animasyonu
      gsap.fromTo('.hizmet-header',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
    }, sectionRef)

    // Bileşen ekrandan ayrıldığında tüm hayalet animasyonları sil
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          <div className="lg:col-span-7 relative order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100">
              <div ref={lineRef} className="w-full bg-teal-500 origin-top" style={{ height: '100%', scaleY: 0 }} />
            </div>

            {hizmetler.map((h, i) => (
              <div key={i} className="hizmet-row invisible group pl-8 md:pl-16 py-12 border-b border-slate-100 last:border-b-0 flex flex-col sm:flex-row sm:items-center gap-6 cursor-default hover:bg-slate-50/30 transition-all duration-500">
                <span className="font-serif italic text-slate-100 font-black text-7xl md:text-[5.5rem] leading-none w-28 shrink-0 group-hover:text-teal-500/20 transition-colors duration-700 tabular-nums select-none tracking-tighter">
                  {h.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-slate-800 font-bold text-2xl group-hover:text-teal-600 transition-colors duration-300">{h.title}</h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-teal-600 bg-teal-50 border border-teal-100/50 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {h.detail}
                    </span>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed max-w-md group-hover:text-slate-700 transition-colors duration-300">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hizmet-header invisible lg:col-span-5 lg:sticky lg:top-40 order-1 lg:order-2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-teal-500" />
              <span className="text-teal-600 text-xs tracking-[0.4em] uppercase font-bold">Hizmetlerimiz</span>
            </div>
            
            <h2 className="text-slate-900 font-black leading-[1.1] tracking-tight text-4xl md:text-5xl lg:text-6xl mb-8">
              Size Nasıl<br /><span className="text-slate-300">Yardımcı</span><br />Olabiliriz?
            </h2>
            
            <p className="text-slate-500 text-base leading-relaxed font-medium mb-12">
              Satış öncesinden satış sonrasına kadar her adımda, 20 yıllık tecrübemizle profesyonel destek sağlıyoruz.
            </p>

            <div className="flex items-center gap-8">
              <Link href="/iletisim" className="group relative inline-flex items-center gap-4 text-slate-800 hover:text-teal-600 font-semibold text-sm tracking-widest uppercase transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-teal-200 group-hover:bg-teal-50 transition-all duration-500">
                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-[-2px] group-hover:translate-x-0 transition-transform duration-300">
                     <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                Detaylı Bilgi Alın
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}