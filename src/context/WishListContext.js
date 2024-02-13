import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state of the wishlist
const initialState = {
  wishlist: [],
};

// Create the context
const WishlistContext = createContext();

// Define a reducer function to handle state updates
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlist: [...state.wishlist, action.product] };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.productId),
      };
    default:
      return state;
  }
};

// Create a WishlistProvider component that wraps your app
export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Create a custom hook to access the context
export const useWishlist = () => {
  return useContext(WishlistContext);
};
