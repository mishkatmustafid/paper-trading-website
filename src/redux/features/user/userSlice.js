import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endopoints } from "../../../Utils/endopoints";
import axiosInstance from "../../../interceptors/axiosInterceptor";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (user_id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(endopoints.getUserDetails(user_id));

      const { status, details } = response.data;
      

      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.details;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
