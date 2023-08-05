import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  collection: [],
  focus: null,
  loading: false,
  error: null,
};


const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  },
});

export default stockSlice.reducer;
