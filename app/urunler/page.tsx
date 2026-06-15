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
    // Safari adres çubuğu düzeltmesi
    ScrollTrigger.config({ ignoreMobileResize: true })

    // KESİN ÇÖZÜM: Memory leak'i engellemek için Context kullanıyoruz
    const ctx = gsap.context(() => {
      // Sayfa Başlığı Animasyonu
      gsap.fromTo('.urun-hero',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )

      // BENTO GRID BATCH ANIMASYONU: Tek tek yormak yerine hepsini sırayla getiriyoruz
      gsap.fromTo('.product-card',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1, 
          y: 0,
          duration: 0.6,
          stagger: 0.1, // Kartların 0.1 saniye arayla akarak gelmesini sağlar
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: '.bento-grid-container', // Animasyon, kartların babası olan grid tetiklendiğinde başlar
            start: 'top 90%',
            toggleActions: 'play none none none' 
          }
        }
      )
      
      // Çizgi çizilme animasyonu
      gsap.fromTo('.draw-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: '.draw-line', start: 'top 90%' } }
      )
    }, containerRef)

    // Bileşen kapandığında hafızayı temizle
    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen pt-28">
      
      {/* 1. EDİTORYAL GİRİŞ */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative">
        <div className="absolute top-0 right-20 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />

        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Bölüm 02</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase hidden sm:block">Ürün Katalogumuz</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Antakya / TR</span>
        </div>

        <div className="urun-hero invisible max-w-3xl">
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
            Eksiksiz çözüm, <br/>
            <span className="font-black font-sans not-italic text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              kaliteden ödün vermeden.
            </span>
          </h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Solunum cihazlarından ortopedik desteklere, tansiyon aletlerinden klinik sarf malzemelerine kadar ihtiyaç duyduğunuz tüm medikal ürünler tek bir adreste.
          </p>
        </div>
      </section>

      {/* 2. BENTO GRID ÜRÜN KATEGORİLERİ */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32 relative z-10">
        <div className="w-full h-px bg-slate-200 draw-line origin-left mb-12" />

        {/* GSAP tetikleyicisi olarak kullanacağımız ana Grid */}
        <div className="bento-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {urunGruplari.map((grup, idx) => (
            <div 
              key={idx} 
              // DİKKAT: hover durumundaki transition ve ağır cam efektlerini sadece masaüstüne (md:) ayarladık.
              className="product-card invisible bg-white rounded-3xl p-8 border border-slate-100 shadow-sm md:bg-white/60 md:backdrop-blur-md md:border-white/80 md:shadow-lg md:shadow-slate-200/40 md:hover:shadow-xl md:hover:border-teal-100/50 md:hover:-translate-y-1 md:transition-all md:duration-300 group flex flex-col transform-gpu will-change-transform"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center md:group-hover:scale-110 md:group-hover:bg-teal-600 md:group-hover:text-white md:transition-all md:duration-300 shrink-0">
                  {grup.icon}
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 leading-tight md:group-hover:text-teal-700 transition-colors">
                    {grup.title}
                  </h2>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm font-medium mb-8">
                {grup.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {grup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold md:hover:bg-teal-50 md:hover:text-teal-700 md:hover:border-teal-200 md:transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Markalar />
      <IletisimBanner />
    </main>
  )
}