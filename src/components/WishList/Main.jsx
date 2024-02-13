import React from 'react'
import styles from './Main.module.css'
import { useWishlist } from '@/context/WishListContext';
import ProductCard from '@/components/WishList/ProductCard';
function Main() {

    
    const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
    console.log("wishlist",wishlistState.wishlist.length)
  return (
    <div className={styles.main}>
        <header className={styles.heading}>
            <h1>Wishlist - <span>{wishlistState.wishlist.length}</span></h1>
        </header>
        <div className={styles.products}>
            {wishlistState.wishlist.map((product) => {
                return(
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        images={product.images}
                        title={product.title}
                        trending={product.trending}
                        price={product.price}
                        original_price={product.original_price}
                        size={product.size}
                        rating={product.rating}/>
                )
            })}
        </div>
    </div>
  )
}

export default Main