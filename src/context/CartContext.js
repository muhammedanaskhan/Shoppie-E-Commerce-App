import products from '@/constants/constants';
import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './CartReducer';
import { useFilter } from './FilterContext';

const CartContext = createContext();  

const CartProvider = ({children}) => { //Context 

    const {test, filteredProducts} = useFilter();

    const [state, dispatch] = useReducer(cartReducer,{
        products: filteredProducts,
        cart: [],
    });

  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export const CartState = () => {
    return useContext(CartContext);
}
