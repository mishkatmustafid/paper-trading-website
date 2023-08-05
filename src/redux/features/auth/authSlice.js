import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { endopoints } from "../../../Utils/endopoints";
import axiosInstance from "../../../interceptors/axiosInterceptor";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  full_name: localStorage.getItem("full_name"),
  user_id: localStorage.getItem("userId"),
  loading: false,
  error: null,
};

export const updateUserId = createAction('auth/updateUserId');
export const updateToken = createAction('auth/updateToken');


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, successCallback }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.signin, {
        email,
        password,
      });

      const { status, details } = response.data;

      localStorage.setItem("token", details.access_token);
      localStorage.setItem("userId", details.user_id);
      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }
      thunkAPI.dispatch(updateUserId(details.user_id));
      thunkAPI.dispatch(updateToken(details.access_token));
      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ full_name, email, password, successCallback }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(endopoints.signup, {
        full_name,
        email,
        password,
      });
      
      const { status, details } = response.data;

      localStorage.setItem("token", details.access_token);
      localStorage.setItem("userId", details.user_id);
      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }
      thunkAPI.dispatch(updateUserId(details.user_id));
      thunkAPI.dispatch(updateToken(details.access_token));
      return { status, details };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.full_name = null;
      state.token = null;
      state.user_id = null;
      localStorage.removeItem("token");
      localStorage.removeItem("full_name");
      localStorage.removeItem("userId");
    },
    updateFullName: (state, action) => {
        state.full_name = action.payload;
      },
      updateToken: (state, action) => {
        state.token = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user_id = action.payload.details.user_id
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user_id = action.payload.details.user_id
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
