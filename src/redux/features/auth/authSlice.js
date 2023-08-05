import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../Utils/endopoints";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  full_name: localStorage.getItem("full_name"),
  loading: false,
  error: null,
};

export const updateFullName = createAction('auth/updateFullName');
export const updateToken = createAction('auth/updateToken');


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, successCallback }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signin`, {
        email,
        password,
      });

      const { status, details } = response.data;

      localStorage.setItem("token", details.access_token);
      localStorage.setItem("full_name", details.full_name);
      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }
      thunkAPI.dispatch(updateFullName(details.full_name));
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
      const response = await axios.post(`${BASE_URL}/users/signup`, {
        full_name,
        email,
        password,
      });
      
      const { status, details } = response.data;

      localStorage.setItem("token", details.access_token);
      localStorage.setItem("full_name", details.full_name);
      if (successCallback && typeof successCallback === "function") {
        successCallback();
      }
      thunkAPI.dispatch(updateFullName(details.full_name));
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
      localStorage.removeItem("token");
      localStorage.removeItem("full_name");
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
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
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
