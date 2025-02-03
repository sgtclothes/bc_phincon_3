import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: null,
        message: null,
        error: null,
        isLoading: false,
    },
    reducers: {
        getAllProductsSuccess: (state, action) => {
            state.data = action.payload.data;
            state.message = action.payload.message;
        },
        getAllProductsFailed: (state, action) => {
            state.error = action.error.message;
        },
        getAllProductsPending: (state) => {
            state.isLoading = true;
        },
    },
});

export const { getAllProductsSuccess, getAllProductsFailed, getAllProductsPending } = productSlice.actions;
export default productSlice.reducer;
