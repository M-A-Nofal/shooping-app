import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';


export const fechMenProducts = createAsyncThunk ('menProductsSlice/fechMenProducts', async () => {

    const res = await axios.get('https://dummyjson.com/products/search?q=men');
    const data = await res.data.products;
    return data;

});

export const menProductsSlice = createSlice ({
    initialState: [],
    name: 'menProductsSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechMenProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = menProductsSlice.actions;

export default menProductsSlice.reducer;