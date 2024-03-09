import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [],
  cart: [],
  wishList: [],
  orders: [],
};

const productSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
