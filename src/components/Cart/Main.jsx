import { CartState } from '@/context/CartContext'
import React, { createContext, useEffect, useState } from 'react'
import CartProductCard from '@/components/Cart/CartProductCard';
import styles from './Main.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer/Footer';
import handler from '@/pages/api/hello';
import Spinner from '@/components/Spinner/spinner';

import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

const Main = () => {

  const [loader, setLoader] = useState(false);

  const { state: { cart }, dispatch } = CartState();
  const { data: session, status } = useSession()

  let totalSum = 0;

  // Iterate over the cart and accumulate the prices
  cart.forEach((product) => {
    totalSum += product.product.price * product.qty;
  });


  const createCheckoutSession = async (event) => {
    setLoader(true);

    const  stripe = await stripePromise;
     
  
    
    // Call the backend (our own) to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: cart,
      email: session.user.email,
    })

    //Redirect to stripe checkout                 
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    setLoader(false);

    if(result.error) alert(result.error.message);

  };

  return (
    <>{loader && <Spinner/>}
      <div className={styles.main} >
        
        <h2>Shopping Bag</h2>
        {cart.length === 0 && (
          <div className={styles.emptyCartDiv}>
            <Image src='/assets/images/emptyCart.png' className={styles.cartImg} width={203} height={115} />
            <p>Your cart is empty</p>
            <Link href='/products' className={styles.a}>
              <button href="/products"
                className={styles.btn}>
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>)}

        <div className={styles.products}>
          {cart.map((product) => {
            return (
              <CartProductCard
                id={product.product.id}
                key={product.product.id}
                title={product.product.title}
                images={product.product.images}
                price={product.product.price}
                original_price={product.product.original_price}
                size={product.product.size}
                trending={product.product.trending}
                rating={product.product.rating}
                qty={product.qty}
              />
            )
          })}
        </div>
        {cart.length > 0 && (
          <div className={styles.checkOutDiv}>
            <h2>{`Subtotal (${cart.length} ${cart.length <= 1 ? 'item' : 'items'}): `}<span className={styles.totalSum}>{`$${totalSum}`}</span></h2>

            <button
              role='link'
          
              className={styles.checkoutBtn}
              onClick={createCheckoutSession}
            >
              CHECKOUT
            </button>


          </div>
        )}


      </div>

      <Footer />


    </>

  )
}

export default Main

