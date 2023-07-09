import React from 'react'
import styles from './CartProductCard.module.css'

const CartProductCard = ({id,key,title,images,price,size,trending,rating}) => {

    console.log("cardtitle",title)
  return (
    <div className={styles.card}>
        <p>{id}</p>
        <p>{title}</p>
    </div>
  )
}

export default CartProductCard