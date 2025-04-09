import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductSlice from './admin/product-slice'
import shoppingProductSlice from './shop/products-slice'




const store = configureStore({
    reducer : {
        auth : authReducer,
        adminProducts :adminProductSlice,
        shopProducts : shoppingProductSlice,
    }
})

export default store ;