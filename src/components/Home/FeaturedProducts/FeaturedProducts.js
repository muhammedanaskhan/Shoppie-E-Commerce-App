import React from 'react'
import classes from "./FeaturedProducts.module.css";
import { featureProducts } from '@/constants/constants';
import ProductCard from '@/components/Home/ProductCard/ProductCard';


function FeaturedProducts() {
     console.log(featureProducts)
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <h2 className={classes.heading}>Explore new arrivals</h2>
            <div className={classes.products}>
                {featureProducts.map((product, i) => 
                    <ProductCard props={product} key={i}/>
                )}
            </div>
        </div>
        <div>
            <button href="/shop" 
                className={classes.btn}>
                VIEW ALL PRODUCTS
            </button> 
        </div>
    </div>
  )
}

export default FeaturedProducts