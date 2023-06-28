import React, { useState } from 'react'
import classes from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CartState } from '@/context/CartContext';

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

    const {state : {cart}, dispatch} = CartState();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {product: {id, title, images, trending, price, size, rating}}
        })
    }
    const handleRemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {product: {id, title, images, trending, price, size, rating}}
        })
    }

    // console.log("cart",cart)
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
            {size ? <p className={classes.size}>{size}</p> : null}
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
            {cart.some((p) => p.product.id === id) ? (
                <div className={classes.btn3} onClick={handleRemoveFromCart}>
                REMOVE FROM CART
                </div>
            ) : (
                <div className={classes.btn1} onClick={handleAddToCart}>
                ADD TO CART
                </div>
            )}
            <Link href={`/products/${id}`}>
                <div className={classes.btn2}>BUY NOW</div>
            </Link>
            
        </div>

    
    </div>
  )
}

export default Product