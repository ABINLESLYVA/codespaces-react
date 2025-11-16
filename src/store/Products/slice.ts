import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
    products: { id: number; name: string; price: number }[];
    isLoading: boolean;
}

const initialState: ProductsState = {
    products: [],
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProductsAsync.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
    }
});

export const getProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = [
            { id: 1, name: "Product 1", price: 10.0 },
            { id: 2, name: "Product 2", price: 20.0 },
            { id: 3, name: "Product 3", price: 30.0 },
        ];
        return data;
    }
);

export default productsSlice.reducer;