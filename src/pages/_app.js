import CartProvider from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishListContext';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <WishlistProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </WishlistProvider>

    </SessionProvider>


  );
}
