import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiState {
  data: any;
  loading: boolean;
}

const initialState: ApiState = {
  data: null,
  loading: false,
};

export const fetchPostById = createAsyncThunk(
  "api/fetchPostById",
  async (id: string) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await axios.get(url); // Simulate API call
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default apiSlice.reducer;
