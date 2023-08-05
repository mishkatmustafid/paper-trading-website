import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  collection: [],
  focus: null,
  loading: false,
  error: null,
};


const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  
  },
});

export default transactionSlice.reducer;
