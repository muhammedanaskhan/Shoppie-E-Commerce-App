import { CartState } from '@/context/CartContext'
import React, { createContext, useEffect, useState } from 'react'
import CartProductCard from '@/components/Cart/CartProductCard';
import styles from './Main.module.css'

const Main = () => {

    const {state : {cart}, dispatch} = CartState();
    const [products,setProducts]= useState([]);

    useEffect(() => {
      setProducts(cart)
    },cart)
    
    console.log("products",products)


  return (
    <div className={styles.main}>
      <h2>Shopping Bag</h2>
      <div className={styles.products}>
        {products.map((product) => {
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
            />
          )
        })}
      </div> 
    </div>
  )
}

export default Main