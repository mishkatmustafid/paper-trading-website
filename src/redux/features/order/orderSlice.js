import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../interceptors/axiosInterceptor";
import { endopoints } from "../../../Utils/endopoints";

const initialState = {
  collection: [],
  loading: false,
  message: "",
  error: null,
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ data, portfolio_id , successCallback}, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        endopoints.order(portfolio_id),
        data
      );

      const { status, details, message } = response.data;

      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }

      return { status, message, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (portfolio_id, successCallback, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.order(portfolio_id));

      const { status, details } = response.data;

      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchOrders.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.collection = action.payload.details;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
