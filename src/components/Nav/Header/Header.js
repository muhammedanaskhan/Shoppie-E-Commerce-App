import React, { useEffect } from 'react'
import styles from '@/components/Nav/Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/Nav/MobileMenu/MobileMenu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { signOut, useSession } from 'next-auth/react'; 
import { useRouter } from 'next/router';

function Header() {

    const router = useRouter();
    const { data: session, status } = useSession()         //session = describe active session; loading = nextjs figuring out login

    async function handleLogOut(){   
        signOut();
    }

    const handleCartClick = () => {
        router.push('/cart')
    }
    
  return (
      <div className={styles.header}>
          <div className={styles.logo}>
              <Image src='/assets/images/logo.svg' width={132} height={27} alt='logo'></Image>
          </div>
          <div className={styles.right}>
              <div className={styles.MobileView}>
                <MobileMenu/>
              </div>
              <div className={styles.DesktopView}>
                  <Link style={{textDecoration: 'none'}} href='/'><p>HOME</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/products'><p>SHOP</p></Link>
                  <Link style={{textDecoration: 'none'}} href='/'><p>ABOUt</p></Link>
                  
                    <button className={styles.cartBtn} onClick={handleCartClick}>
                        <div className={styles.cartDiv}><LocalMallIcon fontSize='large'/></div>
                        <span className={styles.numSpan}>(02)</span>
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