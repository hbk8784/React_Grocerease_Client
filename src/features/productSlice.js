import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../utils/customAxios";

const initialState = {
  products: [],
  category: "all",
  subCategory: "all",
  priceRange: 1000,
  brand: "all",
  status: "all",
  page: 1,
  totalPage: 1,
  limit: 9,
  searchNow: true,
};

// export const show = createAsyncThunk("just showing", async(_, thunkAPI));

export const getProducts = createAsyncThunk(
  "/products",
  async (_, thunkAPI) => {
    try {
      const { category, subCategory, priceRange, brand, status, page, limit } =
        thunkAPI.getState().products;

      const params = `${category}/${subCategory}/${priceRange}/${brand}/${status}/${page}/${limit}`;
      const resp = await customFetch.get(`/products/${params}`);

      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    clearFilter: (state) => {
      state.category = "all";
      state.subCategory = "all";
      state.priceRange = 5000;
      state.brand = "all";
      state.status = "all";
      state.page = 1;
      state.totalPage = 1;
      state.limit = 9;
    },
    setFilter: (state, { payload }) => {
      state[payload.name] = payload.value;
      console.log("this is from setFilter:", payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload.products;
      // state.brand = payload.brand;
      // state.category = payload.mainCat;
      // state.limit = payload.limit;
      // state.page = payload.page;
      // state.priceRange = payload.priceRange;
      state.totalPage = payload.totalPage;
      // state.subCategory = payload.subCat;
      state.searchNow = false;
    });
  },
});

export const { changePriceRange, autoCatogeryValue, clearFilter, setFilter } =
  ProductSlice.actions;

export default ProductSlice.reducer;
