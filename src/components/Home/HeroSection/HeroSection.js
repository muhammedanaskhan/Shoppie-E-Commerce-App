import React from 'react'
import styles from "@/components/Home/HeroSection/HeroSection.module.css"
import Link from 'next/link'
function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.shopContainer}>
        <h1 className={styles.heading}>Latest trendy <br/>fashion for adults</h1>
        <h2 className={styles.subHeading}> Top quality streetwear clothing, experience Fashion at its Finest with Our Curated Range of Stylish Apparel</h2>
        <Link href='/products' className={styles.a}>
          <button className={styles.btn}>SHOP NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection


// https://huckberry.imgix.net/pages/3-0_featured_365shorts_2303-7b9c3911e0.jpg?auto=format%2C%20compress&amp;crop=top&amp;fit=clip&amp;cs=tinysrgb&amp;ixlib=react-9.5.2
