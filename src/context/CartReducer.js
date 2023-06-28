export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]};
        case 'REMOVE_FROM_CART':
            console.log("action payload id",action.payload.product.id);
            console.log("state.cart",state.cart);
            return {...state, cart: state.cart.filter(c => c.product.id !== action.payload.product.id)};
        default:
            return state;
    }
}