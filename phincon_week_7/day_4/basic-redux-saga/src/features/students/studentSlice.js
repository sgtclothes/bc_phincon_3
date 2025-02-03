import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "./studentAction";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        data: null,
        message: null,
        error: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.data;
                state.message = action.payload.message;
            });
    },
});

export default studentSlice.reducer;