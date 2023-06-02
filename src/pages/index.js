import Header from '/components/Header/Header'
import HeroSection from '/components/HeroSection/HeroSection'
import ShopProducts from '/components/ShopProducts/ShopProducts'
import Footer from '/components/Footer/Footer'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
        <Header/>
        <HeroSection/>
        <ShopProducts/>
        <Footer/>
    </>
  )
}
