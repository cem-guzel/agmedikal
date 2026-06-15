'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Markalar from '@/components/Markalar'
import IletisimBanner from '@/components/IletisimBanner'

gsap.registerPlugin(ScrollTrigger)

export default function Hakkimizda() {
  const containerRef = useRef(null)

useEffect(() => {
    // Sayfa içindeki tüm ince çizgileri kaydırdıkça çizen (blueprint) animasyonu
    gsap.utils.toArray('.draw-line-y').forEach((line) => {
      gsap.fromTo(line as HTMLElement,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: line as HTMLElement, start: 'top 85%' } }
      )
    })

    gsap.utils.toArray('.draw-line-x').forEach((line) => {
      gsap.fromTo(line as HTMLElement,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: line as HTMLElement, start: 'top 90%' } }
      )
    })

    // Metinlerin sessizce belirmesi
    gsap.utils.toArray('.fade-text').forEach((text) => {
      gsap.fromTo(text as HTMLElement,
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: text as HTMLElement, start: 'top 85%' } }
      )
    })
  }, [])

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pt-28">
      
      {/* 1. EDİTORYAL GİRİŞ (Slogan yok, manifesto var) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative">
        {/* Dekoratif üst bilgi (Blueprint hissi) */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Bölüm 01</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Kurumsal Kimlik Beyanı</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Antakya / TR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Sol: Sessiz Başlık */}
          <div className="md:col-span-4 fade-text invisible">
            <h1 className="font-serif italic text-4xl md:text-5xl text-slate-900 leading-tight">
              Sağlık, <br/>
              doğru araçlarla <br/>
              korunur.
            </h1>
          </div>

          {/* Sağ: Dergi tarzı sütunlu metin */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-500 font-medium leading-relaxed fade-text invisible">
            <p>
              2008 yılında Hatay Defne&apos;de mütevazı bir adımla başlayan hikayemiz, bugün bölgenin en donanımlı medikal çözüm merkezlerinden birine dönüşmüş durumda. Biz, cihaz satmanın ötesinde bir sorumluluk taşıyoruz: İnsan nefesine, hareketine ve yaşam konforuna doğrudan dokunuyoruz.
            </p>
            <p>
              Tıbbi cihazların karmaşık dünyasında, hastalarımızın ve sağlık profesyonellerinin ihtiyaç duyduğu netliği ve güveni sağlıyoruz. Orijinal ürün garantisi, arkasında durduğumuz teknik servis altyapımızla birleştiğinde; AGM Medikal sadece bir tedarikçi değil, ömür boyu süren bir sağlık partneri haline geliyor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MİMARİ/TEKNİK IZGARA DÜZENİ (Klasik kutular yerine jilet gibi tablolar) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32 relative">
        
        {/* Yatay ayırıcı çizgi */}
        <div className="w-full h-px bg-slate-200 draw-line-x origin-left" />

        <div className="grid grid-cols-1 lg:grid-cols-3 relative">
          
          {/* Dikey ayırıcı çizgiler (Sadece Masaüstü) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px bg-slate-200 draw-line-y origin-top" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-2/3 w-px bg-slate-200 draw-line-y origin-top" />

          {/* Sütun 1: Felsefe */}
          <div className="p-8 lg:p-12 fade-text invisible">
            <span className="text-teal-600 font-serif italic text-2xl block mb-6">01. Odak</span>
            <h3 className="text-slate-900 font-bold tracking-wide uppercase text-sm mb-4">Sıfır Tolerans</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              İnsan sağlığı söz konusu olduğunda hata payı yoktur. Çalıştığımız markaları (Omron, Erka vb.) titizlikle seçiyor, onaysız veya güvenliği kanıtlanmamış hiçbir cihazı vitrinimize koymuyoruz.
            </p>
          </div>

          {/* Sütun 2: Teknik Güç (Ortası) */}
          <div className="p-8 lg:p-12 border-t lg:border-t-0 border-slate-200 fade-text invisible">
            <span className="text-teal-600 font-serif italic text-2xl block mb-6">02. Altyapı</span>
            <h3 className="text-slate-900 font-bold tracking-wide uppercase text-sm mb-4">Sürekli Servis</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Cihazın satışı bizim için sadece bir başlangıçtır. Biyomedikal cihazların kalibrasyonundan periyodik bakımına kadar, 20 yıllık teknik tecrübemizle cihazlarınızı her an çalışır durumda tutuyoruz.
            </p>
          </div>

          {/* Sütun 3: Gelecek (Misyon/Vizyon'un modern hali) */}
          <div className="p-8 lg:p-12 border-t lg:border-t-0 border-slate-200 fade-text invisible">
            <span className="text-teal-600 font-serif italic text-2xl block mb-6">03. Hedef</span>
            <h3 className="text-slate-900 font-bold tracking-wide uppercase text-sm mb-4">Ulusal Standart</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Hatay merkezli operasyonumuzun getirdiği bölgesel tecrübeyi, tüm Türkiye&apos;ye aynı titizlikle ulaştırmak. Sağlık teknolojilerine erişimde en güvenilir, şeffaf ve ulaşılabilir referans noktası olmak.
            </p>
          </div>

        </div>

        {/* Yatay ayırıcı çizgi alt */}
        <div className="w-full h-px bg-slate-200 draw-line-x origin-left" />
      </section>

      {/* 3. TİPOGRAFİK RAKAMLAR BÖLÜMÜ (Devasa, Soluk, Şık) */}
      <section className="bg-slate-900 text-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="fade-text invisible max-w-sm">
            <h2 className="font-serif italic text-3xl mb-6 text-teal-400">Yılların getirdiği somut birikim.</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Rakamlar tek başına her şeyi anlatmaz, ancak sağladığımız güvenin ve istikrarlı büyümemizin en net yansımasıdır. Binlerce hastanın yaşam kalitesine dokunmanın haklı gururunu taşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            <div className="fade-text invisible">
              <span className="block text-6xl md:text-7xl font-black tracking-tighter text-white mb-2">20<span className="text-teal-500">+</span></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Yıllık Tecrübe</span>
            </div>
            <div className="fade-text invisible">
              <span className="block text-6xl md:text-7xl font-black tracking-tighter text-white mb-2">500<span className="text-teal-500">+</span></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Ürün Çeşidi</span>
            </div>
          </div>

        </div>
      </section>

      {/* Ana Sayfadan Gelen Alt Bileşenler */}
      <Markalar />
      <IletisimBanner />
    </main>
  )
}