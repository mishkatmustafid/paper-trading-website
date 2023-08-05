import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  collection: [],
  focus: null,
  loading: false,
  error: null,
};


const portfolioStockSlice = createSlice({
  name: "portfolioStock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
  },
});

export default portfolioStockSlice.reducer;
