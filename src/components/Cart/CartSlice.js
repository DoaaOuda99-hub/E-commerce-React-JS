import {createSlice} from '@reduxjs/toolkit';

export const slice  = createSlice({
    name : 'cart' , 
    initialState : {
        cartItems : []
    } , 
    reducers : {
        addItemToCart : (state , action) => {
            const pesudo = (new Date()).getTime();// generate ID for cart item

            state.cartItems.push({
                id : pesudo , 
                productId : action.payload.product.id , 
                quantity : action.payload.quantity , 
                totalPrice : action.payload.quantity * action.payload.product.price
            })
        } , 
        removeItemFormCart : (state , action) => {
            state.cartItems = state.cartItems.filter(
                cartItem =>  cartItem.id !== action.payload.cartItemId
            )
        }
    }
});
export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart , removeItemFormCart} = slice.actions;
export const getTotalPrice = state => state.cart.cartItems.reduce((total , cartItem) => {
    return cartItem.totalPrice + total

} , 0 );
export default slice.reducer; 