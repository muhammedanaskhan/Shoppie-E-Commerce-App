import Link from "next/link";
import styles from "./Buttons.module.css";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Buttons = ({
  handleAddToCart,
  handleRemoveFromCart,
  handleWishlistButton,
  isInCart,
  isWishlisted,
}) => {
  return (
    <div>
      <div className={styles["container"]}>
        {isInCart && (
          <div className={styles.btn1Div}>
            <button className={styles.btn1} onClick={handleRemoveFromCart}>
              {"Remove from Cart"}
            </button>
           </div>
        )}
        {!isInCart && (
          <div className={styles.btn3Div}>
            <button className={styles.btn3} onClick={() => handleAddToCart()}>
              {"Add to Cart"}
            </button>
           </div>)}
        <button
          className={styles.btn2}
          onClick={handleWishlistButton}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      

      </div>
      <div className={styles.mobileBtns}>
        <div className={styles.cartBtns}>
          {isInCart && (
            <RemoveShoppingCartIcon onClick={handleRemoveFromCart} className={styles.cartIcon} sx={{ color: "black" }} />
          )}
          {!isInCart && (
            <ShoppingCartIcon onClick={() => handleAddToCart()} className={styles.cartIcon} sx={{ color: "black" }} />
          )}
        </div>
        <div className={styles.wishlistBtns}>
          {isWishlisted ?
            <HeartBrokenIcon onClick={handleWishlistButton} className={styles.wishlistIcon} sx={{ color: "black" }} />
            :
            <FavoriteIcon onClick={handleWishlistButton} className={styles.wishlistIcon} sx={{ color: "black" }} />
          }
        </div>
      </div>
    </div>

  );
};

export default Buttons;
