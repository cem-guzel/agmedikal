'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ArrowRight, Activity, Award } from 'lucide-react' 
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    // GSAP Context: Animasyonları hafıza sızıntısına (memory leak) karşı korur
    let ctx = gsap.context(() => {
      // Metin ve Buton animasyonları
      gsap.fromTo('.hero-text-anim',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' } // Delay kaldırıldı, süre kısaldı
      )

      // Yüzen Kart (Floating Cards) animasyonları
      gsap.fromTo('.floating-card',
        { autoAlpha: 0, scale: 0.8, y: 40 },
        { autoAlpha: 1, scale: 1, y: 0, stagger: 0.15, duration: 1, ease: 'back.out(1.2)' } // Delay kaldırıldı
      )
    }, containerRef) // Sadece bu bileşen içindekileri hedefler

    // Bileşen ekrandan gidince hafızayı tertemiz yap (Kısır döngüyü engeller)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] bg-slate-50 flex items-center justify-center overflow-hidden pt-24"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-12">
        
        {/* SOL TARAF */}
        <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div className="hero-text-anim invisible inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-teal-500" />
            <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">&quot;Koşulsuz Müşteri Memnuniyeti&quot;</span>
          </div>

          <h1 className="hero-text-anim invisible text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
            <span className="font-serif italic font-medium text-slate-800">
              AGM Medikal
            </span>
            <br />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Center
            </span>
          </h1>

          <p className="hero-text-anim invisible text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            2008&apos;den beri solunum cihazlarından ortopedik ürünlere, uzman teknik servisten yetkili bayiliğe kadar Hatay&apos;da güvenin adresiyiz.
          </p>

          <div className="hero-text-anim invisible flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/iletisim"
              className="group flex items-center justify-center gap-3 bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/20 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
            >
              İletişime Geç
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/urunler"
              className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 transition-all duration-300 w-full sm:w-auto"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="flex-1 relative w-full h-[400px] md:h-[500px] hidden md:block">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-teal-200/50 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-tr from-teal-50 to-blue-50 opacity-50" />

          {/* Floating Card 1 */}
          <div className="floating-card invisible absolute top-[15%] left-[5%] bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-white max-w-[220px] animate-[bounce_5s_ease-in-out_infinite_alternate]">
            {/* DİKKAT: Kutuyu relative yaptık ve Image'a fill verdik */}
            <div className="w-full h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-inner mb-4 relative bg-slate-50">
              <Image
                src="/images/2m.png" 
                alt="AGM Medikal Kalite"
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover object-top" 
              />
            </div>
            <h3 className="font-bold text-slate-800 text-sm mb-1">Klinik Kalite</h3>
            <p className="text-slate-500 text-xs font-medium">Uluslararası standartlarda sertifikalı cihazlar.</p>
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card invisible absolute top-[40%] right-[-5%] bg-white/80 backdrop-blur-md p-5 rounded-3xl shadow-2xl shadow-teal-900/10 border border-white max-w-[260px] z-10 animate-[bounce_6s_ease-in-out_infinite_alternate-reverse]">
            {/* DİKKAT: Kutuyu relative yaptık ve Image'a fill verdik */}
            <div className="w-full h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-inner mb-4 relative bg-slate-50">
              <Image
                src="/images/1m.jpeg" 
                alt="AGM Medikal Fiziksel Mağaza"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover object-top" 
              />
            </div>

            <div className="flex flex-col gap-1 mb-4">
                <h3 className="font-bold text-slate-800 text-base">Fiziksel Mağaza & Servis</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-slate-500 text-xs font-bold tracking-tight">Hatay Merkez Açık / Aktif Destek</span>
                </div>
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
              <div className="bg-teal-500 h-1.5 rounded-full w-[100%]" />
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Hızlı Çözüm Oranı: %99</p>
          </div>

          {/* Floating Card 3 */}
          <div className="floating-card invisible absolute bottom-[5%] left-[25%] bg-slate-900 p-5 rounded-3xl shadow-xl shadow-slate-900/20 border border-slate-800 max-w-[240px] animate-[bounce_7s_ease-in-out_infinite_alternate]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-teal-400">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">20 Yıllık</h3>
                <p className="text-slate-400 text-xs font-medium">Sektörel Deneyim</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}