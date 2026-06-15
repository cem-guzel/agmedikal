import Hero from '@/components/Hero'
import Hizmetler from '@/components/Hizmetler'
import UrunKategorileri from '@/components/UrunKategorileri'
import Markalar from '@/components/Markalar'
import IletisimBanner from '@/components/IletisimBanner'

export default function Home() {
  return (
    <>
   
      <Hero />
       <Hizmetler />
      <UrunKategorileri />
      <Markalar />
      <IletisimBanner />
    </>
  )
}