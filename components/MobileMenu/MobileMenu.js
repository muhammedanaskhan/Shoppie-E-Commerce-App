import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ links }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className={styles.hamburger} onClick={() => setActiveMenu(prev => !prev)}>
                <div className={`${styles.center_line} ${activeMenu && styles.active}`}></div>
            </div>
            <div className={`${activeMenu ? styles.menu_active : ""} ${styles.menu}`}>
                <ul className={styles.menu_list}>
                    {
                        links.map((link, index) => {
                            return (
                                <Link href={link.link} key={index} >
                                    <li className={`${router.asPath === link.link && styles.active}`}
                                        onClick={() => setActiveMenu(false)}
                                    >{link.name}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default MobileMenu