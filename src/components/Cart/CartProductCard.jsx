import React from 'react'
import styles from './CartProductCard.module.css'
import Image from 'next/image'

const CartProductCard = ({ id, key, title, images, price, original_price, size, trending, rating }) => {

  console.log("cardtitle", original_price)
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={images[0]}></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.details}>
          <div className={styles.productDetails}>
            <p className={styles.title}>{title}</p>
            <div className={styles.priceContainer}>
              <p className={styles.price}>{`$${price}`}</p>
              <p className={styles.original_price}>{`$${original_price}`}</p>
            </div>
            <p className={styles.size}>{`Size: ${size}`}</p>
          </div>
          <div className={styles.totalAndQuantity}>
            <p className={styles.total}>Total: <span>526</span></p>
            <div className={styles.quantityAdjust}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button>Remove From Cart</button>
          <button>Add To Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard