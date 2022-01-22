
import cartReducer from '../components/Cart/CartSlice';
import productReducer from '../components/Products/ProductSlice';
import { ChangeEventHandler } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer : {
        cart : cartReducer , 
        products : productReducer
    }
})