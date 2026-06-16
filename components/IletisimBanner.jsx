'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function IletisimBanner() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Mobil adres çubuğu krizini çözen ayar
    ScrollTrigger.config({ ignoreMobileResize: true })

    // ESLint'e uygun 'const' ve hafıza sızıntısını önleyen Context
    const ctx = gsap.context(() => {
      // CTA Kartı Animasyonu
      gsap.fromTo('.contact-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 85%',
            toggleActions: 'play none none none' // Geri kaydırmada kaybolmayı engeller
          } 
        }
      )

      // Harita Animasyonu
      gsap.fromTo('.map-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.1, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: '.contact-card', // Harita, CTA kartı göründüğünde tetiklensin
            start: 'top 50%',
            toggleActions: 'play none none none'
          } 
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F8FAFC] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Premium CTA Kartı - Ağır blur topları temizlendi, zarif bir gradient kullanıldı */}
        <div className="contact-card opacity-0 relative bg-gradient-to-br from-teal-700 to-teal-900 rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl shadow-teal-900/10 mb-12 transform-gpu will-change-transform">
          
          {/* Performans dostu, statik asimetrik dekorasyon (Blur YOK) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-800/50 border border-teal-500/30 text-teal-100 text-xs font-bold tracking-widest uppercase mb-6">
                7/24 Kesintisiz Destek
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
                Size Nasıl Yardımcı <br className="hidden md:block"/> Olabiliriz?
              </h2>
              <p className="text-teal-50/80 text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Ürün bilgisi, teknik servis, kalibrasyon veya sipariş süreçleri için bize anında ulaşın. Uzman ekibimiz en doğru çözümle yanınızda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:03262272796"
                className="group flex items-center justify-center gap-3 bg-white text-teal-800 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors duration-300 shadow-lg shadow-black/10"
              >
                <div className="bg-teal-100 text-teal-700 p-2 rounded-full md:group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} />
                </div>
                Hemen Ara
              </a>
              <Link
                href="/iletisim"
                className="group flex items-center justify-center gap-3 border border-teal-500/30 bg-teal-800/30 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-800/50 transition-colors duration-300"
              >
                Tüm İletişim Kanalları
                <ArrowRight size={18} className="md:group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Harita Alanı - CSS Filtreleri (Grayscale vs) tamamen kaldırıldı */}
        <div className="map-card opacity-0 relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 h-[400px] md:h-[500px] bg-slate-100 transform-gpu will-change-transform">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1234!2d36.1234!3d36.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjIiTiAzNsKwMDcnMjQuMiJF!5e0!3m2!1str!2str!4v1610000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="w-full h-full object-cover"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Harita Üzerinde Yüzen Klas Adres Kartı - Mobil performansı için blur sadece masaüstünde çalışır */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto max-w-sm bg-white md:bg-white/90 md:backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-teal-50 text-teal-600 p-3 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-lg mb-1 tracking-tight">AGM Medikal Center</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Bostancık Mh. Değirmenyolu Cd. Defne Devlet Hastanesi Karşısı, Defne / HATAY
                </p>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-100 my-4" />
            
            <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
              <Clock size={16} className="text-teal-600" />
              <span>Çalışma Saatleri: <strong>09:00 - 18:00</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}