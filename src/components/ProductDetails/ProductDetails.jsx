import products from '@/constants/constants'
import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import StarIcon from "@mui/icons-material/Star";
import Buttons from '@/components/ProductDetails/Buttons';
import { CartState } from '@/context/CartContext';
import { useSession } from 'next-auth/react'; 
import { useRouter } from 'next/router';

import { useWishlist } from '@/context/WishListContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({productDetails}) {

  
    const router = useRouter();
    const { data: session, status } = useSession() 

    const [isInCart, setIsInCart] = useState(false);
    const { state: { cart }, dispatch } = CartState();
     
    
  const notifyAddToCart = () => toast("Added to Cart!");
  const notifyAddToWishlist = () => toast("Added to WishList!");
  const notifyRemoveFromWishlist = () => toast("Removed from WishList!");
  const notifyRemoveFromCart = () => toast("Removed from Cart!");

    const id = productDetails?._id;
    const title = productDetails?.title;
    const images = productDetails?.images;
    const original_price = productDetails?.original_price;
    const description = productDetails?.description;
    const trending = productDetails.trending;
    const price = productDetails.price;
    const size= productDetails.size;
    const payload_rating = productDetails.rating;

    const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
    const isProductInWishlist = wishlistState.wishlist.some(item => item.id === id);
  
  
    useEffect(() => {
      if (id && cart.some((p) => p.product.id === id)) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    }, [cart, id]);

    const handleAddToCart = () => {
      console.log("session",session);
      if(session){
          dispatch({
              type: "ADD_TO_CART",
              payload: {product: {id, title, images, trending, price, original_price, size, rating: payload_rating}}
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

  const handleWishlistButton = () => {
    if (isProductInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist();
    }
  }
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

    const rating = Math.trunc(Number(payload_rating));
    return (
        <div className={styles["container"]}>
          <div className={styles["image-container"]}>
            <div className={styles["first-image"]}>
              <img src={images[0]} alt={title} />
              {trending && <p className={styles["trending"]}>Trending</p>}
            </div>
            <img
              src={images[1]}
              alt={title}
              className={styles["secondary-image"]}
            />
          </div>
          <div className={styles["content"]}>
            <p className={`text-m text-300 ${styles["title"]}`}>{title}</p>
            <div className={styles["price-container"]}>
              <p className={`text-s`}>Rs. {price}</p>
              <p className={`text-s ${styles["original-price"]}`}>
                Rs. {original_price}
              </p>
            </div>
            <p className={`text-s`}>Size: {size}</p>
            <div className={styles["rating"]}>
              <div className={styles["stars"]}>
                {Array(rating)
                  .fill("")
                  .map((_, index) => (
                    <StarIcon key={index} className={styles["star"]} />
                  ))}
              </div>
              <p className={`text-s`}>{rating}</p>
            </div>
            <div className={styles["description"]}>
              <p className={`text-s`}>{description}</p>
            </div>
            <Buttons
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
               handleWishlistButton={handleWishlistButton}
              isInCart={isInCart}
               isWishlisted={isProductInWishlist}
            />
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
      );
}

export default ProductDetails