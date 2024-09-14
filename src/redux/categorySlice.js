import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../api/Service";

const initialState = {
    categories: [],
};

export const getCategories = createAsyncThunk('category', async () => {
    const response = await fetch(`${baseUrl}products/categories`);
    const data = response.json();
    return data;
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
});

export default categorySlice.reducer;