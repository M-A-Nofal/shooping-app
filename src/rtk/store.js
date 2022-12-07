import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart-slice'
import kidsProductsSlice from './slices/kidsProducts-slice'
import menProductsSlice from './slices/menProducts-slice'
import womenProductsSlice from './slices/womenProducts-slice'


export const store = configureStore({
    reducer: {
        menProducts: menProductsSlice,
        womenProducts: womenProductsSlice,
        kidsProducts: kidsProductsSlice,
        cart: cartSlice,
    },
})