'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => {
  const start = window.scrollY
  const duration = 800
  const startTime = performance.now()

  const easeInOutCubic = (t) => 
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)
    
    window.scrollTo(0, start * (1 - eased))
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

  return (
    <button
      onClick={scrollUp}
      aria-label="Yukarı çık"
      className={`fixed left-6 bottom-6 z-50 flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#060C18]/80 backdrop-blur-md text-white/50 hover:text-white hover:border-[#1E88E5]/50 hover:bg-[#1E88E5]/10 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={18} />
    </button>
  )
}