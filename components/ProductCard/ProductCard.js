import React from 'react'
import styles from "/components/ProductCard/ProductCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

function ProductCard(props) {
    var product = props.props;

  return (
    <div className={styles.card}>
        <div  className={styles.imageDiv}>
            <Image 
                className={styles.img}
                src={product.image}
                width={448}
                height={470} 
                loading="lazy" 
                alt="Product Image" 
            />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{product.name}</h3>
            <span className={styles.price}>${product.price}</span>
        </div>

    </div>
  )
}

export default ProductCard
