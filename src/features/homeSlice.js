import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../utils/customAxios";

const initialState = {
  heroImage: [],
  bestItems: [],
};

export const homePageImage = createAsyncThunk(
  "/home/hero",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/onLoad");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(homePageImage.fulfilled, (state, { payload }) => {
      state.heroImage = payload.hero;
      state.bestItems = payload.best;
    });
  },
});

export default homeSlice.reducer;
