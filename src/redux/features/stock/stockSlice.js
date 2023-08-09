import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../interceptors/axiosInterceptor";
import { endopoints } from "../../../Utils/endopoints";

const initialState = {
  collection: [],
  loading: false,
  message: "",
  error: null,
};

export const fetchStocks = createAsyncThunk(
  "stock/fetchStocks",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(endopoints.asset);

      const { status, details } = response.data;

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.collection = action.payload.details;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stockSlice.reducer;
