import React from 'react'
import styles from '/components/Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { signOut, useSession } from 'next-auth/react'; 
import { useRouter } from 'next/router';

function Header() {

    const router = useRouter();

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
                name: "ABOUT",
                link: "/about"
            },
           
            {
                name: "CART",
                link: "/cart"
            },
            {
                name: "SIGN IN",
                link: "/signIn"
            },
        ],}

        const { data: session, status } = useSession()         //session = describe active session; loading = nextjs figuring out login
   
    async function handleLogOut(){
       
        signOut();

        
    }

    
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
                  
                  {!session && 
                    <Link href='/signIn'>
                        <button href="#" className={styles.btn}>SIGN IN</button>
                    </Link>
                  }
                  {session && 
                        <button href="#" 
                            className={styles.btn}
                            onClick={handleLogOut}>
                            LOG OUT
                        </button>  
                  }
              </div>
          </div>
      </div>
  );
}

export default Header