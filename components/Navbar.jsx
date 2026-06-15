'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Menu, X, Phone } from 'lucide-react'



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()



  // Sayfa aşağı kaydırma (Scroll) takibi

  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])







  const links = [

    { href: '/', label: 'Ana Sayfa' },

    { href: '/hakkimizda', label: 'Hakkımızda' },

    { href: '/urunler', label: 'Ürünler' },

    { href: '/iletisim', label: 'İletişim' },

    { href: '/sss', label: 'S.S.S' },

  ]



  // Link tıklamalarını yöneten fonksiyon (TypeScript tiplerinden arındırıldı)

const handleLinkClick = (e, href) => {
  setIsOpen(false)
  if (pathname === href) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}



  return (

    <header className={`fixed w-full top-0 z-50 transition-all duration-700 pointer-events-none ${scrolled ? 'py-4' : 'py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pointer-events-auto">

        <nav className={`flex items-center justify-between transition-all duration-500 ${

          scrolled

            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border border-slate-100/50 rounded-full px-4 sm:px-6 py-3'

            : 'bg-transparent px-2 py-2'

        }`}>



          {/* Gerçek Logo ve Mobil Uyumlu Yazı */}

          <Link

            href="/"

            className="flex items-center gap-2 sm:gap-3 group"

            onClick={(e) => handleLinkClick(e, '/')}

          >

            <img

              src="/images/logo.png"

              alt="AGM Medikal"

              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"

            />

            <div className="flex flex-col">

              <span className={`font-black text-base sm:text-lg leading-none tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>

                AGM Medikal

              </span>

              <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] text-teal-600 uppercase">

                Center

              </span>

            </div>

          </Link>



          {/* Desktop Menü */}

          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (

              <Link

                key={link.href}

                href={link.href}

                onClick={(e) => handleLinkClick(e, link.href)}

                className={`text-sm font-bold tracking-wide transition-colors duration-200 relative group ${

                  scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-slate-700 hover:text-teal-700'

                }`}

              >

                {link.label}

                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full rounded-full" />

              </Link>

            ))}

          </div>



          {/* Aksiyon Butonu (Desktop) */}

          <div className="hidden md:flex items-center">

            <a

              href="tel:03262272796"

              className="flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/25 hover:-translate-y-0.5"

            >

              <Phone size={16} />

              İletişime Geç

            </a>

          </div>



          {/* Mobil Menü Butonu */}

          <button

            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 text-slate-800' : 'bg-white/50 text-slate-900'}`}

            onClick={() => setIsOpen(!isOpen)}

          >

            {isOpen ? <X size={20} /> : <Menu size={20} />}

          </button>

        </nav>

      </div>



      {/* Mobil Menü İçeriği */}

      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 transition-all duration-300 overflow-hidden rounded-3xl ${

        isOpen ? 'max-h-[400px] opacity-100 shadow-xl border border-slate-100' : 'max-h-0 opacity-0'

      }`}>

        <div className="bg-white/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 pointer-events-auto">

          {links.map((link) => (

            <Link

              key={link.href}

              href={link.href}

              onClick={(e) => handleLinkClick(e, link.href)}

              className="text-slate-800 font-bold text-lg tracking-tight hover:text-teal-600 transition-colors"

            >

              {link.label}

            </Link>

          ))}

          <div className="w-full h-px bg-slate-100 my-2" />

         

          <a

            href="tel:03262272796"

            className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-4 rounded-2xl font-bold text-base active:bg-teal-800 active:scale-95 transition-all duration-200"

          >

            <Phone size={18} />

            İletişime Geç

          </a>

        </div>

      </div>

    </header>

  )

} 

