import styles from "./Buttons.module.css";

const Buttons = ({
  // handleAddToCart,
  // handleWishlistButton,
  isInCart,
  // isWishlisted,
}) => {
  return (
    <div className={styles["container"]}>
      <button
        className={`btn btn-primary ${styles["btn"]}`}
        onClick={() => handleAddToCart()}
      >
        {!isInCart ? "Add to Cart" : "Go to Cart"}
      </button>
      <button
        className={`btn btn-secondary ${styles["btn"]}`}
        // onClick={handleWishlistButton}
      >Add to Wishlist
        {/* {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"} */}
      </button>
    </div>
  );
};

export default Buttons;
