import React from 'react'
import styles from './CartProductCard.module.css'
import Image from 'next/image'

import { useSession } from 'next-auth/react';
import { CartState } from '@/context/CartContext';
import { useWishlist } from '@/context/WishListContext';

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const CartProductCard = ({ id, key, title, images, price, original_price, size, trending, rating, qty }) => {

  const router = useRouter();
  const { data: session, status } = useSession()
  const { state: { cart }, dispatch } = CartState();

  const notifyRemoveFromCart = () => toast("Removed from Cart!");
  const notifyAddToWishlist = () => toast("Added to WishList!");
  const notifyRemoveFromWishlist = () => toast("Removed from WishList!");

  const handleRemoveFromCart = () => {
    if (session) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { product: { id, title, images, trending, price, original_price, size, rating } }
      })
      notifyRemoveFromCart();
    } else {
      router.push('/signIn');
    }

  }

  const decreaseQuantity = () => {
    if (qty > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', payload: { product: { id, title, images, trending, price, original_price, size, rating } } });
    }
  };

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { product: { id, title, images, trending, price, original_price, size, rating } } });
  };

  const total = price * qty;

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
            <p className={styles.total}>Total: <span>{total}</span></p>
            <div className={styles.quantityAdjust}>
              <button onClick={decreaseQuantity}>-</button>
              <p>{qty}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={handleRemoveFromCart}>Remove From Cart</button>
          {isProductInWishlist ?
            <button onClick={removeFromWishlist}>Remove from Wishlist</button>
            :
            <button onClick={addToWishlist}>Add To Wishlist</button>
          }
        </div>
        <div className={styles.btnContainerMobile}>
          <button onClick={handleRemoveFromCart}>Remove</button>
          <div className={styles.wishlistDiv}>
            {isProductInWishlist ?
              <FavoriteIcon onClick={removeFromWishlist} className={styles.favourite} sx={{ color: "black" }}>Remove from Wishlist</FavoriteIcon>
              :
              <FavoriteBorderIcon onClick={addToWishlist} className={styles.favourite} sx={{ color: "black" }}>Add To Wishlist</FavoriteBorderIcon>
            }
          </div>

        </div>
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

export default CartProductCard