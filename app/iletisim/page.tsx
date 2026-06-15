'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Iletisim() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Blueprint çizgileri animasyonu
    gsap.utils.toArray('.draw-line-x').forEach((line) => {
      gsap.fromTo(line as HTMLElement,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: line as HTMLElement, start: 'top 90%' } }
      )
    })

    // Kutu ve metinlerin yavaşça belirmesi
    gsap.utils.toArray('.contact-fade').forEach((element, i) => {
      gsap.fromTo(element as HTMLElement,
        { autoAlpha: 0, y: 30 },
        { 
          autoAlpha: 1, y: 0, 
          duration: 1, 
          delay: i * 0.1, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: element as HTMLElement, start: 'top 85%' } 
        }
      )
    })
  }, [])

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* 1. EDİTORYAL GİRİŞ */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-16 relative">
        <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none" />

        {/* Dekoratif üst bilgi */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-16 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Bölüm 03</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase hidden sm:block">İletişim & Destek</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Antakya / TR</span>
        </div>

        <div className="contact-fade invisible relative z-10 max-w-3xl">
          <h1 className="font-serif italic text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
            Sizi dinliyor, <br/>
            <span className="font-black font-sans not-italic text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              çözüm üretiyoruz.
            </span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Teknik servisten ürün danışmanlığına kadar her türlü ihtiyacınız için uzman ekibimiz bir telefon uzağınızda. 7/24 kesintisiz hizmet anlayışıyla yanınızdayız.
          </p>
        </div>
      </section>

      {/* 2. İLETİŞİM KUTULARI (Bento Grid Style) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Adres Kutusu */}
          <div className="contact-fade invisible bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-3">Merkez Ofis</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Bostancık Mh. Değirmenyolu Cd. Defne Devlet Hastanesi Karşısı <br/>
              Defne / Hatay
            </p>
          </div>

          {/* Telefon Kutusu */}
          <div className="contact-fade invisible bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-3">Telefonlar</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:03262272796" className="text-slate-500 hover:text-teal-600 text-sm font-bold transition-colors">0326 227 27 96 (Sabit)</a>
              <a href="tel:05324456031" className="text-slate-500 hover:text-teal-600 text-sm font-bold transition-colors">0532 445 60 31 (Mobil)</a>
              <a href="tel:05444456031" className="text-slate-500 hover:text-teal-600 text-sm font-bold transition-colors">0544 445 60 31 (Mobil)</a>
            </div>
          </div>

          {/* Email Kutusu */}
          <div className="contact-fade invisible bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-3">E-Posta</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-2">Her türlü soru ve talebiniz için yazabilirsiniz.</p>
            <a href="mailto:info@agmmedikal.com" className="text-teal-600 hover:text-teal-700 text-sm font-bold transition-colors">
              info@agmmedikal.com
            </a>
          </div>

          {/* Çalışma Saatleri Kutusu */}
          <div className="contact-fade invisible bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
            <div className="w-12 h-12 bg-slate-800 text-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative z-10">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-white text-lg mb-3 relative z-10">Çalışma Saatleri</h3>
            <ul className="text-slate-400 text-sm font-medium leading-relaxed space-y-2 relative z-10">
              <li className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span>Pzt - Cmt</span>
                <span className="text-white font-bold">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span>Pazar</span>
                <span className="text-teal-400 font-bold">Kapalı</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. FORMLAR VE HARİTA (Yan Yana Modern Düzen) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="w-full h-px bg-slate-200 draw-line-x origin-left mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* İletişim Formu */}
          <div className="contact-fade invisible bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Bize Mesaj Gönderin</h2>
              <p className="text-slate-500 text-sm font-medium">Formu doldurun, uzman ekibimiz en kısa sürede size dönüş yapsın.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Telefon</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="0555 555 55 55" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">E-Posta Adresiniz</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="ornek@mail.com" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>

              <button className="group w-full flex items-center justify-center gap-2 bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-colors duration-300">
                Mesajı Gönder
                <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Dev Harita */}
          <div className="contact-fade invisible rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm h-[500px] lg:h-auto relative group">
            {/* Navigasyon Butonu Yüzen Etiket */}
            <a 
              href="https://maps.google.com/?q=Defne+Devlet+Hastanesi+Hatay" 
              target="_blank"
              rel="noreferrer"
              className="absolute top-6 right-6 z-10 bg-slate-900/90 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-teal-600 transition-colors shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
            >
              Yol Tarifi Al
              <ArrowRight size={16} />
            </a>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1234!2d36.1234!3d36.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjIiTiAzNsKwMDcnMjQuMiJF!5e0!3m2!1str!2str!4v1610000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </main>
  )
}