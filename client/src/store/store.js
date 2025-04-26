import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductSlice from './admin/product-slice'
import shoppingProductSlice from './shop/products-slice'
import shoppingCartSlice from './shop/cart-slice'




const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProducts :adminProductSlice,
        shopProducts : shoppingProductSlice,
        shopCart : shoppingCartSlice,
    }
})

export default store ;