import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classes from "./MobileMenu.module.css";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const MobileMenu = ({ links }) => {

    const { data: session, status } = useSession()
    const [active, setActive] = useState(false);
    const router = useRouter();

    async function logoutHandler() {
        setActive(false);
        const data = await signOut({ redirect: false, callbackUrl: "/" })
        router.replace('/');
    }

    return (
        <nav className={`${classes.nav} ${active && classes['active']}`}>
            <div className={classes.hamDiv}>
                <div className={`${classes.nav_hamburger} ${active && classes['active']}`} onClick={() => setActive(prev => !prev)}>
                    <div className={classes.bar}></div>
                </div>
            </div>
            {active && <div className={classes.menu}>
                <div className={classes.nav_list}>
                    <ul>
                        <li onClick={() => setActive(prev => !prev)}>  <Link href="/products">Shop All</Link></li>
                        {session && <li onClick={() => setActive(prev => !prev)}><Link href="/">Home</Link></li>}
                        <li onClick={() => setActive(prev => !prev)}><Link href="/products">Shop</Link></li>
                        <li onClick={() => setActive(prev => !prev)}><Link href="/wishlist">Wishlist</Link></li>
                        {/* <li onClick={() => setActive(prev => !prev)}> <Link href="/About"></Link></li> */}
                        {!session && <li onClick={() => setActive(prev => !prev)}><Link href="/signIn">Sign in</Link></li>}
                        {session && <li onClick={logoutHandler}>Sign Out</li>}
                    </ul>
                </div>
                <div className={classes.footer}>
                <div className={classes.logo}>
                    <Image src='/assets/images/logo_white.svg' fill={true} alt='logo'></Image>
                </div>
                </div>
            </div>}
        </nav>
    )
}

export default MobileMenu