import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { FilterContextProvider } from '@/context/FilterContext';
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <FilterContextProvider>
        <Component {...pageProps} />
      </FilterContextProvider>
    </SessionProvider>
    

  );
}
