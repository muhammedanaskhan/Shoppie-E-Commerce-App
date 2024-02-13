export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(c => c.product.id !== action.payload.product.id) };


        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload.product.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                ),
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload.product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            }; default:
            return state;
    }
}