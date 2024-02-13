import React from 'react'
import styles from "@/components/Home/ProductCard/ProductCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

function ProductCard(props) {
    var product = props.props;

  return (
    <div className={styles.card}>
        <div  className={styles.imageDiv}>
            <Image 
                src={product.image} 
                alt="Product Image" 
                fill={true}
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
