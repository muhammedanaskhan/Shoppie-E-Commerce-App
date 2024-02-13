import React, { useState } from 'react'
import classes from './Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CartState } from '@/context/CartContext';
import { useSession } from 'next-auth/react'; 
import { useRouter } from 'next/router';
import { useWishlist } from '@/context/WishListContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({
    id,
    title,
    images,
    trending,
    price,
    original_price,
    size,
    rating,
  }) {

    const notifyAddToWishlist = () => toast("Added to WishList!");
    const notifyRemoveFromWishlist = () => toast("Removed from WishList!");
    const notifyAddToCart = () => toast("Added to Cart!");
    const notifyRemoveFromCart = () => toast("Removed from Cart!");
    

    const router = useRouter();

const { data: session, status } = useSession()    //session = describe active session; loading = nextjs figuring out login

  const[productImage, setProductImage] = useState(images[0])

  function handleMouseEnter() {
    setProductImage(images[1])
  }

    function handleMouseLeave() {
    setProductImage(images[0])
    }

    const {state : {cart}, dispatch} = CartState();
    const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
    const isProductInWishlist = wishlistState.wishlist.some(item => item.id === id);

    const addToWishlist = () => {
        const productToAdd = {
            id,
            title,
            images,
            trending,
            price,
            original_price,
            size,
            rating,
          };
        wishlistDispatch({ type: 'ADD_TO_WISHLIST', product: productToAdd });
        notifyAddToWishlist();
      };

      const removeFromWishlist = productId => {
        wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', productId: id });
        notifyRemoveFromWishlist();
      };

    const handleAddToCart = () => {
        if(session){
            dispatch({
                type: "ADD_TO_CART",
                payload: {product: {id, title, images, trending, price, original_price, size, rating}}
            })
            notifyAddToCart();
        }else{
            router.push('/signIn'); 
        }
        
    }
    const handleRemoveFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {product: {id, title, images, trending, price, original_price, size, rating}}
        })
        notifyRemoveFromCart();
    }

    // console.log("cart",cart)
  return (
    <div className={classes.card}>
        <div 
            className={classes.image}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img
                src={productImage}
                alt="product"
                className={classes.image}
            />
            {trending && <p className={classes.trending}>Trending</p>}
            {size ? <p className={classes.size}>{size}</p> : null}
            {isProductInWishlist ? 
                <FavoriteIcon onClick={removeFromWishlist} className={classes.favourite} sx={{ color: "black" }} />
            : 
                <FavoriteBorderIcon onClick={addToWishlist} className={classes.favourite} sx={{ color: "black" }} />
            }
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
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          style={{
            fontSize: '15px',
            maxWidth: '75%', // Adjust the maximum width for mobile view
            // borderRadius: '8px', // Add rounded corners
            // bottom: '20px',
            // left: '30px',
            top: '1em',
          }}

          theme="dark"
        />
    </div>
  )
}

export default Product