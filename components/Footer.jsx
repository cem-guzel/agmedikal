'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#F8FAFC] overflow-hidden border-t border-slate-200">

      {/* Safari Katili olan devasa BLUR topları silindi! Yerine elit nokta grid deseni geldi. */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0D9488 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          <div className="md:col-span-4 flex flex-col items-start">
            <img
              src="/images/logo.png"
              alt="AGM Medikal"
              className="h-14 w-auto object-contain mb-6 drop-shadow-sm"
            />
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 max-w-sm">
              2008&apos;den beri biyomedikal cihazların satış ve teknik servis 
              hizmetinde Hatay&apos;ın güvenilir adresi. Sağlığınız ve müşteri 
              memnuniyetiniz her zaman önceliğimizdir.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Teknik Servis Aktif
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-slate-900 font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-teal-500" />
              Sayfalar
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/urunler', label: 'Ürünler' },
                { href: '/iletisim', label: 'İletişim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-500 hover:text-teal-600 font-medium text-sm transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h4 className="text-slate-900 font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-teal-500" />
              İletişim
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-teal-50 text-teal-600 p-2 rounded-lg shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span className="text-slate-500 text-sm font-medium leading-relaxed">
                  Bostancık Mh. Değirmenyolu Cd.<br />
                  Defne Devlet Hastanesi Karşısı<br />
                  Defne / HATAY
                </span>
              </li>

              <li className="flex flex-col gap-3">
                <a href="tel:03262272796" className="flex items-center gap-4 text-slate-500 hover:text-teal-600 text-sm font-medium transition-colors group">
                  <div className="bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 p-2 rounded-lg transition-colors">
                    <Phone size={16} />
                  </div>
                  0326 227 27 96
                </a>
                <a href="tel:05324456031" className="flex items-center gap-4 text-slate-500 hover:text-teal-600 text-sm font-medium transition-colors group">
                  <div className="bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 p-2 rounded-lg transition-colors">
                    <Phone size={16} />
                  </div>
                  0532 445 60 31
                </a>
                <a href="tel:05444456031" className="flex items-center gap-4 text-slate-500 hover:text-teal-600 text-sm font-medium transition-colors group">
                  <div className="bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 p-2 rounded-lg transition-colors">
                    <Phone size={16} />
                  </div>
                  0544 445 60 31
                </a>
              </li>

              <li>
                <a href="mailto:info@agmmedikal.com" className="flex items-center gap-4 text-slate-500 hover:text-teal-600 text-sm font-medium transition-colors group">
                  <div className="bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 p-2 rounded-lg transition-colors">
                    <Mail size={16} />
                  </div>
                  info@agmmedikal.com
                </a>
              </li>

              <li className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                <div className="bg-slate-100 text-slate-400 p-2 rounded-lg">
                  <Clock size={16} />
                </div>
                Pzt – Cmt: 09:00 – 18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} AGM Medikal Center. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-widest uppercase">
            <span>Antakya</span>
            <span className="w-1 h-1 rounded-full bg-teal-300" />
            <span>Defne</span>
            <span className="w-1 h-1 rounded-full bg-teal-300" />
            <span>Hatay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}