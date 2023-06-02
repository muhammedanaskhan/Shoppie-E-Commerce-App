import React from 'react'
import styles from '/components/Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <Image src='/assets/images/logo.svg' width={132} height={27}></Image>
          </div>
          <div className={styles.right}>
              <div className={styles.MobileView}></div>
              <div className={styles.DesktopView}>
                  <Link style={{textDecoration: 'none'}} href='/'><p>HOME</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>PORTFOLIO</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>BLOG</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>SHOP</p></Link>
                  <button href="#" className={styles.btn}>CONTACT US</button>
              </div>
          </div>
      </div>
  );
}

export default Header