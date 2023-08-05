import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  focus: null,
  loading: false,
  error: null,
};


const marketDataSlice = createSlice({
  name: "marketData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
  },
});

export default marketDataSlice.reducer;
