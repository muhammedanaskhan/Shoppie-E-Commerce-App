import React from 'react'
import classes from './Products.module.css'
import Product from '@/components/AllProducts/Product'

function Products({products}) {
  return (
    <div className={classes.container}>
      {products.map((product) => {
        return (
          <Product
            id={product._id}
            key={product._id}
            images={product.images}
            title={product.title}
            trending={product.trending}
            price={product.price}
            original_price={product.original_price}
            size={product.size}
            rating={product.rating}
          />
        )
      })}
    </div>
  )
}

export default Products