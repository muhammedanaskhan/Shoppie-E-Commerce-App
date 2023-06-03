import React from 'react'
import styles from '/components/Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Header() {

    const navLinks = {
        authlinks: [
            {
                name: "HOME",
                link: "/"
            },
            {
                name: "SHOP",
                link: "/shop"
            },
            {
                name: "BLOG",
                link: "/shop"
            },
           
            {
                name: "PORTFOLIO",
                link: "/portfolio"
            },
            {
                name: "CONTACT",
                link: "/contact"
            },
        ],}

  return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <Image src='/assets/images/logo.svg' width={132} height={27}></Image>
          </div>
          <div className={styles.right}>
              <div className={styles.MobileView}>
                <MobileMenu links={navLinks.authlinks}/>
              </div>
              <div className={styles.DesktopView}>
                  <Link style={{textDecoration: 'none'}} href='/'><p>HOME</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>SHOP</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>ABOUt</p></Link>
                  <button className={styles.cartBtn}>
                    <div className={styles.cartDiv}><LocalMallIcon fontSize='large'/></div>
                    <span className={styles.cartSpan}>Cart</span> <span className={styles.numSpan}>(02)</span>
                  </button>
                  <button href="#" className={styles.btn}>SIGN IN</button>
              </div>
          </div>
      </div>
  );
}

export default Header