'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })
const markalar = [
  { name: 'Omron', file: 'omron.jpg' },
  { name: 'Erka', file: 'erka.png' },
  { name: 'Custo-Med', file: 'custo-med.png' },
  { name: 'Morsa Cyberg', file: 'morsa-cyberg.png' },
  { name: 'Lab-Vet', file: 'lab-vet.png' },
  { name: 'Hi-Slip Plus', file: 'hi-slip-plus.png' },
  { name: 'Unomedical', file: 'unomedical.png' },
  { name: 'Sleepy', file: 'sleepy.png' },
  { name: 'Freshlife', file: 'freshlife.png' },
]

export default function Markalar() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // GSAP Context'i buraya da ekliyoruz ki arka planda klonlanıp telefonu yormasın!
    let ctx = gsap.context(() => {
      gsap.fromTo('.marka-header',
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)

    // Aşırı optimize edilmiş merkez odak motoru
    const cards = document.querySelectorAll('.marka-card')
    let intervalId

    if (window.innerWidth < 768) {
      intervalId = setInterval(() => {
        const centerX = window.innerWidth / 2
        cards.forEach(card => {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.left + rect.width / 2

          if (Math.abs(centerX - cardCenter) < 90) {
            card.classList.add('mobile-active')
          } else {
            card.classList.remove('mobile-active')
          }
        })
      }, 200) 
    }

    // Hem interval'i hem de GSAP animasyonlarını temizle
    return () => {
      clearInterval(intervalId)
      ctx.revert() 
    }
  }, [])

  const duplicatedMarkalar = [...markalar, ...markalar]

  return (
    <section ref={sectionRef} className="bg-white py-24 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">
        <div className="marka-header invisible flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-teal-500" />
              <span className="text-teal-600 text-xs tracking-[0.4em] uppercase font-bold">Yetkili Bayilik</span>
            </div>
            <h2 className="text-slate-900 font-black leading-[1.1] tracking-tight text-4xl md:text-5xl">
              Çalıştığımız<br />
              <span className="text-slate-300">Markalar</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden mt-4">
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)' }} />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center py-4">
          {duplicatedMarkalar.map((marka, i) => (
            <div
              key={i}
              className="marka-card mx-4 group relative bg-white md:bg-white/40 md:backdrop-blur-sm transform-gpu will-change-transform rounded-2xl w-48 h-32 flex shrink-0 items-center justify-center p-6 border border-slate-100 transition-all duration-500 cursor-pointer hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2 [&.mobile-active]:border-teal-200 [&.mobile-active]:bg-white [&.mobile-active]:shadow-xl [&.mobile-active]:shadow-teal-900/5 [&.mobile-active]:-translate-y-2"
            >
              <Image
                src={`/images/markalar/${marka.file}`}
                alt={marka.name}
                width={160} // ÇÖZÜM: Next.js'in istediği genişlik eklendi
                height={60} // ÇÖZÜM: Next.js'in istediği yükseklik eklendi
                className="max-h-14 max-w-full object-contain filter grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-[.mobile-active]:grayscale-0 group-[.mobile-active]:opacity-100 group-[.mobile-active]:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}