import React from 'react'
import classes from "./FeaturedProducts.module.css";
import { featureProducts } from '../../constants/constants';
import ProductCard from '../ProductCard/ProductCard';


function FeaturedProducts() {
     console.log(featureProducts)
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <h2 className={classes.heading}>Explore new arrivals</h2>
            <div className={classes.products}>
                {featureProducts.map((product) => 
                    <ProductCard props={product} />
                )}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts