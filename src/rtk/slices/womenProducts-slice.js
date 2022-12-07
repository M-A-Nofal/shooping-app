import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fechWomenProducts = createAsyncThunk ('WomenProductsSlice/fechWomenProducts', async () => {
    
    const res = await axios.get('https://dummyjson.com/products/search?q=women');
    const data = await res.data.products;
    return data;

});

export const WomenProductsSlice = createSlice ({
    initialState: [],
    name: 'WomenProductsSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechWomenProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const {} = WomenProductsSlice.actions

export default WomenProductsSlice.reducer;