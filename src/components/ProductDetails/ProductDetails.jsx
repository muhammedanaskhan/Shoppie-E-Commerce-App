import products from '@/constants/constants'
import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import StarIcon from "@mui/icons-material/Star";
import Buttons from './Buttons';
import { CartState } from '@/context/CartContext';

function ProductDetails({productId}) {

    const product = products.find((product) => product._id === productId);
    const [isInCart, setIsInCart] = useState(false);
    const { state: { cart } } = CartState();

     useEffect(() => {
      if (productId && cart.some((p) => p.product.id === productId)) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    }, [cart, productId]);

    if (!product) {
      return <p>Loading...</p>; 
    }
    
    const rating = Math.trunc(Number(product.rating));
    return (
        <div className={styles["container"]}>
          <div className={styles["image-container"]}>
            <div className={styles["first-image"]}>
              <img src={product?.images[0]} alt={product.title} />
              {product.trending && <p className={styles["trending"]}>Trending</p>}
            </div>
            <img
              src={product.images[1]}
              alt={product.title}
              className={styles["secondary-image"]}
            />
          </div>
          <div className={styles["content"]}>
            <p className={`text-m text-300 ${styles["title"]}`}>{product.title}</p>
            <div className={styles["price-container"]}>
              <p className={`text-s`}>Rs. {product.price}</p>
              <p className={`text-s ${styles["original-price"]}`}>
                Rs. {product.original_price}
              </p>
            </div>
            <p className={`text-s`}>Size: {product.size}</p>
            <div className={styles["rating"]}>
              <div className={styles["stars"]}>
                {Array(rating)
                  .fill("")
                  .map((_, index) => (
                    <StarIcon key={index} className={styles["star"]} />
                  ))}
              </div>
              <p className={`text-s`}>{product.rating}</p>
            </div>
            <div className={styles["description"]}>
              <p className={`text-s`}>{product.description}</p>
            </div>
            <Buttons
            //   handleAddToCart={handleAddToCart}
            //   handleWishlistButton={handleWishlistButton}
              isInCart={isInCart}
            //   isWishlisted={isWishlisted}
            />
          </div>
        </div>
      );
}

export default ProductDetails