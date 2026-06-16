'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wind, Activity, Stethoscope, Bed, Bandage, Shirt } from 'lucide-react'
import Markalar from '@/components/Markalar'
import IletisimBanner from '@/components/IletisimBanner'

gsap.registerPlugin(ScrollTrigger)

const urunGruplari = [
  {
    icon: <Wind size={28} />,
    title: "Solunum & Oksijen",
    desc: "Evde ve klinikte güvenli solunum desteği.",
    items: ["Cpap Cihazları", "Oto Cpap", "Bpap", "Oksijen Konsantratörü", "Oksijen Tüpü", "Nebulizatör Cihazları", "Ev Tipi Cerrahi Aspiratör"]
  },
  {
    icon: <Activity size={28} />,
    title: "Hareket & Ortopedi",
    desc: "Yaşam kalitenizi ve hareket özgürlüğünüzü artıran çözümler.",
    items: ["Tekerlekli Sandalye", "Wolker (Yürüteç)", "Koltuk Altı Değneği", "Ortopedik Dizlikler", "Ortopedik Visco Yastıklar", "Ağrı Bantları", "Varis Çorapları"]
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Tanı & Teşhis",
    desc: "Güvenilir ve kesin sonuç veren klinik ölçüm cihazları.",
    items: ["Omron Dijital Tansiyon Aleti", "Erka Manuel Tansiyon Aleti", "Ateş Ölçerler", "Şeker Ölçüm Cihazları", "Oksimetreler"]
  },
  {
    icon: <Bed size={28} />,
    title: "Hasta Bakım & Konfor",
    desc: "Tedavi sürecini kolaylaştıran yatak ve odaiçi ekipmanlar.",
    items: ["Hasta Karyolaları", "Havalı Yataklar", "Klozet Yükseltici", "Hasta Taşıma Lifleri", "Yemek Masaları"]
  },
  {
    icon: <Bandage size={28} />,
    title: "Klinik Sarf & Pansuman",
    desc: "Hijyen standartlarına uygun, steril ve günlük medikal malzemeler.",
    items: ["Maske ve Eldivenler", "Yara Bakım Ürünleri", "Pansuman Ürünleri", "Hasta Bezi", "Sondalar", "Steril Göz Pedleri"]
  },
  {
    icon: <Shirt size={28} />,
    title: "Anne Bebek & Genel",
    desc: "Klinik tekstil ürünleri ve anne-bebek sağlığına yönelik takviyeler.",
    items: ["Anne Bebek Ürünleri", "Önlük, Forma ve Sabo Terlikler", "Zayıflamaya Yardımcı Ürünler", "Sıcak/Soğuk Kompresler"]
  }
]

export default function Urunler() {
  const containerRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true })

    const ctx = gsap.context(() => {
      // 1. Editoryal Başlık Animasyonu (Sırayla yumuşak geliş)
      gsap.fromTo('.urun-hero-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      )

      // 2. Performanslı Grid Kart Animasyonu (Tek scroll trigger, stagger ile sırayla)
      gsap.fromTo('.product-card-v2',
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.5,
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: '.urun-grid-wrapper', 
            start: 'top 85%',
            toggleActions: 'play none none none' // Yukarı kaydırmada gizlenmeyi ve tekrar hesaplamayı engeller
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] min-h-screen pt-32">
      
      {/* 1. EDİTORYAL GİRİŞ - Ağır blur efektleri kaldırıldı, daha temiz bir mimari */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative z-10">
        
        {/* Çok hafif, cihazı yormayan dekoratif nokta grid */}
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="urun-hero-anim opacity-0 flex items-center justify-between border-b border-slate-200 pb-4 mb-16 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Bölüm 02</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase hidden sm:block">Ürün Katalogumuz</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Antakya / TR</span>
        </div>

        <div className="max-w-4xl relative z-10">
          <h1 className="urun-hero-anim opacity-0 font-black text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.05] tracking-tight mb-8">
            Eksiksiz Çözüm, <br/>
            <span className="font-serif italic font-light text-slate-400">Kaliteden Ödün Vermeden.</span>
          </h1>
          <p className="urun-hero-anim opacity-0 text-slate-500 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
            Solunum cihazlarından ortopedik desteklere, tansiyon aletlerinden klinik sarf malzemelerine kadar ihtiyaç duyduğunuz tüm medikal ürünler tek bir adreste.
          </p>
        </div>
      </section>

      {/* 2. TEMİZ GRID ÜRÜN KATEGORİLERİ - Safari dostu, sıfır cam efekti */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32 relative z-10">
        
        <div className="urun-grid-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {urunGruplari.map((grup, idx) => (
            <div 
              key={idx} 
              // DİKKAT: GSAP çakışmalarını önlemek için translate-y hover'ı kaldırıldı, sadece renk/gölge bırakıldı.
              className="product-card-v2 opacity-0 bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-100 transition-[box-shadow,border-color] duration-500 group flex flex-col transform-gpu will-change-transform"
            >
              {/* İkon ve Başlık */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-teal-600 group-hover:text-white">
                  {grup.icon}
                </div>
                <h2 className="text-xl font-black text-slate-900 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                  {grup.title}
                </h2>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-10">
                {grup.desc}
              </p>

              {/* Ürün Rozetleri (Pills) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {grup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ORTAK BİLEŞENLER */}
      <Markalar />
      <IletisimBanner />
    </main>
  )
}