import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer:{
        cartSlice : cartSlice,
        wishlistSlice : wishlistSlice
    }
})

export default store;