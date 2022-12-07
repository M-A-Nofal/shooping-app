import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fechKidsProducts = createAsyncThunk ('kidsProductsSlice/fechKidsProducts', async () => {
    
    const res = await axios.get('https://dummyjson.com/products/search?q=kid');
    const data = await res.data.products;
    return data;

});

export const kidsProductsSlice = createSlice ({
    initialState: [],
    name: 'kidsProductsSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechKidsProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const {} = kidsProductsSlice.actions

export default kidsProductsSlice.reducer;