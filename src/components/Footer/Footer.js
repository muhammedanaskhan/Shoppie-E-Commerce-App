import React from 'react'
import styles from "@/components/Footer/Footer.module.css"
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftDiv}>
          <div className={styles.company}>
            <Image src='/assets/images/logo.svg' width={175} height={47} alt='logo'></Image>
            <p>  Neal St, London WC2H 9PR <br/>United Kingdom<br/> info.shoppie@support.com<br/> +00 123 456 789</p>
          </div>
          <div className={styles.explore}>
            <div className={styles.exploreLinks}>
              <p>Explore</p>
              <ul>
                <li>Wholesale</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Store Locator</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <form className="footer-form_form__phU8D">
            <p>Never miss an update</p>
            <div className={styles.formInput}>
              <input type="email" placeholder="Email" required=""/>
                <button>Register</button>
            </div>
          </form>
          <div className={styles.socials}>
            <a href="#">
              <Image src='/assets/images/facebookIcon.png' alt='image' width={30} height={30}/>
            </a>
            <a href="#">
              <Image src='/assets/images/instagramIcon.png' alt='image' width={30} height={30}/>
            </a>
            <a href="#">
              <Image src='/assets/images/twitterIcon.png' alt='image' width={30} height={30}/>
            </a>
          </div>
        </div>
        
      </div>
      <div className={styles.extraLinks}>
        <ul>
          <li>Terms &amp; Conditions</li>
          <li>Privacy Policy</li>
          <li>Purchase Policy</li>
          <li> ©2023 Shoppie. No rights reserved</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer