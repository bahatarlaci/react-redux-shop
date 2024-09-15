import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../api/Service";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk('products', async () => {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    return data;
})

export const getProductDetail = createAsyncThunk('product', async (id) => {
    const response = await fetch(`${baseUrl}/products/${id}`);
    const data = await response.json();
    return data;
})

export const getCategoryProducts = createAsyncThunk('categoryProducts', async (category) => {
    const response = await fetch(`${baseUrl}/products/category/${category}`);
    const data = await response.json();
    return data;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCESS;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAILED;
        })
        .addCase(getProductDetail.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING;
        })
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload;
            state.productDetailStatus = STATUS.SUCCESS;
        })
        .addCase(getProductDetail.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAILED;
        })
        .addCase(getCategoryProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(getCategoryProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCESS;
        })
        .addCase(getCategoryProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAILED;
        })
    }
});

export default productSlice.reducer;