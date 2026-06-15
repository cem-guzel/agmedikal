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
    // CTA Kartı Animasyonu
    gsap.fromTo('.contact-card',
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )

    // Harita Animasyonu
    gsap.fromTo('.map-card',
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
    )
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Premium CTA (Call to Action) Kartı */}
        <div className="contact-card invisible relative bg-teal-600 rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl shadow-teal-900/10 mb-12">
          
          {/* Organik Arka Plan Işıkları (Glassmorphism blobs) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/40 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-800/30 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/30 border border-teal-400/50 text-teal-50 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                7/24 Kesintisiz Destek
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
                Size Nasıl Yardımcı <br className="hidden md:block"/> Olabiliriz?
              </h2>
              <p className="text-teal-50 text-lg font-medium leading-relaxed opacity-90">
                Ürün bilgisi, teknik servis, kalibrasyon veya sipariş süreçleri için bize anında ulaşın. Uzman ekibimiz en doğru çözümle yanınızda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:03262272796"
                className="group flex items-center justify-center gap-3 bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1"
              >
                <div className="bg-teal-50 text-teal-600 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} />
                </div>
                Hemen Ara
              </a>
              <Link
                href="/iletisim"
                className="group flex items-center justify-center gap-3 border border-teal-400/50 bg-teal-500/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-teal-500/40 transition-all duration-300"
              >
                Tüm İletişim Kanalları
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Modern Harita Alanı & Yüzen Adres Kartı */}
        <div className="map-card invisible relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/50 h-[450px] md:h-[500px] group bg-slate-50">
          
          {/* Google Maps Iframe (Daha temiz renk profili için filtreler eklendi) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1234!2d36.1234!3d36.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjIiTiAzNsKwMDcnMjQuMiJF!5e0!3m2!1str!2str!4v1610000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Harita Üzerinde Yüzen (Floating) Glassmorphism Adres Kartı */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-auto max-w-sm bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-teal-50 text-teal-600 p-3 rounded-2xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-lg mb-1">AGM Medikal Center</h4>
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