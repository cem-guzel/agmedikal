'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, ChevronDown, MessageCircleQuestion } from 'lucide-react'
import Markalar from '@/components/Markalar'
import IletisimBanner from '@/components/IletisimBanner'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  // Cihaz ve Teknik Servis
    { category: "Satın Alma", question: "Ürünlerin orijinallik garantisi var mı?", answer: "Mağazamızda bulunan tüm ürünler yetkili distribütör garantili ve sertifikalıdır." },

  { category: "Cihaz", question: "Solunum cihazlarının kurulumu nasıl yapılıyor?", answer: "Uzman biyomedikal ekibimiz, Hatay genelindeki adresinize cihazı getirerek yerinde kurulumu yapar ve kullanım eğitimini verir." },
  { category: "Cihaz", question: "Cihaz filtre değişimleri ne sıklıkla yapılmalı?", answer: "Maskelerin 6-12 ayda bir, filtrelerin ise cihaz modeline göre 1-3 ayda bir değiştirilmesini öneriyoruz." },
  { category: "Teknik Servis", question: "Arıza durumunda süreç nasıl işliyor?", answer: "7/24 teknik destek hattımızla müdahale ediyor, onarım süresince mağdur olmamanız için geçici yedek cihaz sağlıyoruz." },
  { category: "Teknik Servis", question: "Garanti dışı cihazlara servis veriyor musunuz?", answer: "Evet, marka ayrımı gözetmeksizin tüm medikal cihazlarınız için orijinal yedek parça destekli onarım yapıyoruz." },
  
  // SGK ve Satın Alma
  { category: "SGK", question: "SGK geri ödemelerinden nasıl faydalanırım?", answer: "Heyet raporu ve E-Reçetenizle bize başvurduğunuzda, tüm evrak süreçlerinizi sizin adınıza takip ederek bilgilendirme yapıyoruz." },
  { category: "SGK", question: "Ödeme seçenekleriniz nelerdir?", answer: "Tüm kredi kartlarına vade farksız veya uygun oranlı taksit seçenekleri sunmaktayız." },
  { category: "Satın Alma", question: "Kurumsal toplu alım yapıyor musunuz?", answer: "Özel hastane, poliklinik ve tıp merkezleri için toplu alım ve yıllık teknik bakım sözleşmeleri sağlıyoruz." },

  // Hizmet Ağı ve Diğer
  { category: "Hizmet Ağı", question: "Hatay dışında hizmet veriyor musunuz?", answer: "Merkezimiz Hatay / Defne'de olup, Hatay'ın tüm ilçelerine doğrudan lojistik ve servis hizmetimiz mevcuttur." },
  { category: "Hizmet Ağı", question: "Acil durumlarda mesai dışı ulaşım?", answer: "Mesai saatleri dışında acil medikal cihaz sorunlarınız için iletişim sayfasındaki mobil destek hatlarımızdan bize ulaşabilirsiniz." },
  { category: "Ortopedi", question: "Kişiye özel ortopedik ürün yapılıyor mu?", answer: "Evet, anatomik yapınıza tam uyum sağlayan özel ölçülü korse ve ortez çözümleri sunuyoruz." },
  { category: "Kalibrasyon", question: "Tansiyon cihazı kalibrasyonu yapıyor musunuz?", answer: "Yetkili bayisi olduğumuz tüm tanı cihazlarının laboratuvar standartlarında periyodik kalibrasyonlarını gerçekleştiriyoruz." }
]

export default function SSS() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  // Sütunlu yapıda akordiyonu tetiklemek için fonksiyon
  const toggleAccordion = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-16 text-center">
        <h1 className="font-serif italic text-4xl md:text-5xl text-slate-900 mb-6">Sıkça Sorulanlar</h1>
        <p className="text-slate-500 font-medium max-w-xl mx-auto">Tüm sorularınızı profesyonelce yanıtladık. Arayıca aradığınızı daha hızlı bulabilirsiniz.</p>
      </section>

      {/* İki Sütunlu (Bento) Akordiyon Yapısı */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`bg-white border rounded-3xl p-6 transition-all duration-300 ${
              activeIndex === i ? 'border-teal-200 shadow-md' : 'border-slate-100'
            }`}
          >
            <button onClick={() => toggleAccordion(i)} className="w-full flex items-center justify-between text-left">
              <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
              <ChevronDown className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
            </button>
            
            <div className={`grid transition-all duration-300 ${activeIndex === i ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <p className="overflow-hidden text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>// vercel tetikleme testi
        ))}
      </section>

      <div className="mt-24">
           <Markalar />
        <IletisimBanner />
      </div>
    </main>
  )
}