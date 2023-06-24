import React, { useState } from 'react'
import classes from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product({
    id,
    title,
    images,
    trending,
    price,
    size,
    rating,
  }) {

  const[productImage, setProductImage] = useState(images[0])

  function handleMouseEnter() {
    setProductImage(images[1])
  }

    function handleMouseLeave() {
    setProductImage(images[0])
    }
  return (
    <div className={classes.card}>
        <div 
            className={classes.image}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={`/`}>
            <img
                src={productImage}
                alt="product"
                className={classes.image}
            />
            </Link>
            {trending && <p className={classes.trending}>Trending</p>}
            <FavoriteBorderIcon className={classes.favourite} sx={{ color: "black" }} />
        </div>
        <div className={classes.bottom}>
            <div className={classes.productDetails}>
                     <div className={classes.title}>
                        {title}
                    </div>
                    <div className={classes.priceAndRating}>
                        <div className={classes.price}>
                            ${price}
                        </div>
                        <div className={classes.rating}>
                            {`⭐ ${rating}`}
                        </div>
                    </div>      
            </div>
            

        </div>
        <div className={classes.buttons}>
            <div className={classes.btn1}>
                ADD TO CART
            </div>
            <div className={classes.btn2}>
                BUY NOW
            </div>      
        </div>
    
    </div>
  )
}

export default Product