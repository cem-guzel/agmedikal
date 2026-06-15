'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react' 
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo('.hero-tag',
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      )

      tl.fromTo('.hero-text-line',
        { y: '120%', skewY: 5 },
        { y: '0%', skewY: 0, stagger: 0.15, duration: 1, ease: 'power4.out' },
        "-=0.6"
      )

      tl.fromTo('.hero-img-wrapper',
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.2, ease: 'power4.inOut' },
        "-=0.8"
      )

      tl.fromTo('.hero-img',
        { scale: 1.2 },
        { scale: 1, duration: 1.2, ease: 'power3.out' },
        "-=1.2"
      )

      tl.fromTo('.hero-fade-up',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
        "-=0.6"
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100vh] bg-[#F8FAFC] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pb-0"
    >
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* SOL TARAF */}
        <div className="w-full lg:w-6/12 flex flex-col justify-center mt-8 lg:mt-0 z-20">
          
          <div className="hero-tag invisible flex items-center gap-4 mb-8 transform-gpu will-change-transform">
            <span className="w-12 h-[2px] bg-teal-600" />
            <span className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase">Modern Sağlık & Teknoloji</span>
          </div>

          <h1 className="text-[4rem] sm:text-[5.5rem] xl:text-[7rem] leading-[0.85] font-black tracking-tighter text-slate-900 mb-10 flex flex-col gap-2">
            <div className="overflow-hidden pb-2">
              <span className="hero-text-line block inline-block transform-gpu will-change-transform">AGM</span>
            </div>
            <div className="overflow-hidden pb-4">
              <span className="hero-text-line block inline-block font-serif italic font-light text-slate-400 transform-gpu will-change-transform">Medikal</span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="hero-text-line block inline-block text-teal-600 transform-gpu will-change-transform">Center.</span>
            </div>
          </h1>

          <div className="flex flex-wrap items-center gap-10 md:gap-16 mb-12">
            <div className="hero-fade-up invisible flex flex-col transform-gpu will-change-transform">
              <span className="text-4xl sm:text-5xl font-light text-slate-800 tracking-tighter">20<span className="text-teal-500 font-bold">+</span></span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">Yıllık Güven</span>
            </div>
            <div className="hero-fade-up invisible w-px h-16 bg-slate-200 transform-gpu will-change-transform" />
            <div className="hero-fade-up invisible flex flex-col transform-gpu will-change-transform">
              <span className="text-4xl sm:text-5xl font-light text-slate-800 tracking-tighter"><span className="text-teal-500 font-bold">%</span>99</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">Hızlı Çözüm</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 transform-gpu will-change-transform">
            <Link
              href="/iletisim"
              className="hero-fade-up invisible group flex items-center justify-between gap-6 bg-slate-900 text-white pl-8 pr-2 py-2 rounded-full hover:bg-teal-700 transition-all duration-500 w-full sm:w-auto"
            >
              <span className="font-bold text-sm tracking-wide">İletişime Geç</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:text-teal-700 transition-colors">
                <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end z-10">
          
          <div className="hero-fade-up invisible absolute top-8 -right-4 md:-right-12 w-full h-full bg-teal-100/50 rounded-t-full rounded-b-[40px] rotate-6 -z-10 transform-gpu will-change-transform" />

          <div className="hero-img-wrapper relative w-full max-w-[420px] aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl shadow-slate-300/60 bg-slate-200 group transform-gpu will-change-transform">
            {/* ÇÖZÜM 1: filter (contrast) sadece masaüstüne alındı (md:contrast-[1.05]) */}
            <Image
              src="/images/1m.jpeg" 
              alt="AGM Medikal Hatay Merkez Mağazası"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hero-img object-cover object-top md:filter md:contrast-[1.05] md:brightness-[1.02] transform-gpu will-change-transform" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

            {/* ÇÖZÜM 2: mix-blend-overlay sadece masaüstüne alındı (md:mix-blend-overlay) */}
            <div className="absolute inset-0 border-[2px] border-white/20 rounded-t-full rounded-b-[40px] pointer-events-none z-10 hidden md:block md:mix-blend-overlay" />
          </div>

          {/* ÇÖZÜM 3: backdrop-blur sadece masaüstüne (md:backdrop-blur-xl), mobilde düz beyaz (bg-white) */}
          <div className="hero-fade-up invisible absolute bottom-12 -left-4 sm:-left-16 bg-white md:bg-white/90 md:backdrop-blur-xl p-5 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center gap-5 max-w-[240px] transform-gpu will-change-transform">
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-0.5">Fiziksel Lokasyon</span>
              <span className="font-black text-slate-800 text-sm leading-tight tracking-tight">Hatay Merkez Açık</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}