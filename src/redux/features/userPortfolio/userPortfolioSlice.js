import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endopoints } from "../../../Utils/endopoints";
import axiosInstance from "../../../interceptors/axiosInterceptor";
import { fetchUser } from "../user/userSlice";

const initialState = {
  collection: [],
  focus: null,
  loading: false,
  error: null,
  message: "",
};

export const createUserPortfolio = createAsyncThunk(
  "userPortfolio/createUserPortfolio",
  async ({ user_id, name, successCallback }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.portfolio(user_id), {
        name: name,
      });

      const { status, message,  details } = response.data;

      if (successCallback) successCallback();

      return { status,message, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserPortfolio = createAsyncThunk(
  "userPortfolio/deleteUserPortfolio",
  async (user_id, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.portfolio(user_id));

      const { status, details } = response.data;

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUserPortfolio = createAsyncThunk(
  "userPortfolio/updateUserPortfolio",
  async (user_id, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.portfolio(user_id));

      const { status, details } = response.data;

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserPortfolio = createAsyncThunk(
  "userPortfolio/fetchUserPortfolio",
  async (user_id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(endopoints.portfolio(user_id));

      const { status, details } = response.data;

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllUserPortfolio = createAsyncThunk(
  "userPortfolio/fetchAllUserPortfolio",
  async (user_id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(endopoints.portfolio(user_id));

      const { status, details } = response.data;

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userPortfoliio = createSlice({
  name: "userPortfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.focus = action.payload.details;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchAllUserPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUserPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.focus = action.payload.details;
      })
      .addCase(fetchAllUserPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createUserPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createUserPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userPortfoliio.reducer;
