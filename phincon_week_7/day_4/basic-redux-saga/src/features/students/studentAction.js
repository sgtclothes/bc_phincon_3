import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    try {
        const response = await fetch(`${API_URL}/api/students`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
});
