import Header from '@/components/Nav/Header/Header'
import HeroSection from '@/components/Home/HeroSection/HeroSection'
import ShopProducts from '@/components/Home/ShopProducts/ShopProducts'
import Footer from '@/components/Footer/Footer'

import styles from '@/styles/Home.module.css'
import FeaturedProducts from '@/components/Home/FeaturedProducts/FeaturedProducts'
import OfferSection from '@/components/Home/OfferSection/OfferSection'

export default function Home() {
  return (
    <>
        <Header/>
        <HeroSection/>
        <FeaturedProducts/>
        <OfferSection/>
        <Footer/>
    </>
  )
}
