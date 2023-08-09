import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../interceptors/axiosInterceptor";
import { endopoints } from "../../../Utils/endopoints";

const initialState = {
  collection: [],
  focus: null,
  message: "",
  loading: false,
  error: null,
};

export const createPortfolioStock = createAsyncThunk(
  "portfolio_stock/createPortfolioStock",
  async ({ data, portfolio_id }, successCallback, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        endopoints.portfolioStock(portfolio_id),
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

export const fetchPortfolioStocks = createAsyncThunk(
  "portfolio_stock/fetchPortfolioStocks",
  async (portfolio_id, successCallback, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.portfolioStock(portfolio_id));

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

export const fetchAllPortfolioStocks = createAsyncThunk(
  "portfolio_stock/fetchAllPortfolioStocks",
  async ({user_id, successCallback}, thunkAPI) => {
    try {
      const response = await axiosInstance.get(endopoints.allPortfolioStocks(user_id));

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

const portfolioStockSlice = createSlice({
  name: "portfolioStock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPortfolioStock.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPortfolioStock.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(createPortfolioStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchPortfolioStocks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.collection = action.payload.details;
      })
      .addCase(fetchPortfolioStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllPortfolioStocks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPortfolioStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.collection = action.payload.details;
      })
      .addCase(fetchAllPortfolioStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default portfolioStockSlice.reducer;
