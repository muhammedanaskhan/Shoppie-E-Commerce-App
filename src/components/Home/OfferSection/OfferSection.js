import React from 'react'
import classes from "./OfferSection.module.css";
import Link from 'next/link';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OfferSection() {

  return (
    <div className={classes.main}>
      <div className={classes.shopContainer}>
        <h1 className={classes.heading}>35% Off</h1>
        <h2 className={classes.subHeading}> This is the main factor that sets us apart our competition and allows us deliver a specialist business consultancy service</h2>
        <Link href='/products' className={classes.a}>
          <button href="/products"
            className={classes.btn}>
            SHOP NOW
          </button>
        </Link>

      </div>
    </div>
  )
}

export default OfferSection