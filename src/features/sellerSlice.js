import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../utils/customAxios";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  orders: [],
  dashInfoCard: [],
  message: [],
  pcount: {},
  page: 1,
  limit: 8,
  totalPage: 1,
};

export const addProduct = createAsyncThunk(
  "/seller/addProduct",
  async (data, thunkAPI) => {
    try {
      const resp = await customFetch.post("/seller/product/add", data, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const inventory = createAsyncThunk(
  "/seller/inventory",
  async (query, thunkAPI) => {
    const page = query.pageCurrent ? query.pageCurrent : initialState.page;

    try {
      const resp = await customFetch.get(
        `/seller/product/${query.sort}/${page}/${initialState.limit}`,
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        }
      );

      return resp.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const sellerSlice = createSlice({
  name: "sellerSlice",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        console.log("pending");
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        // console.log(payload.message);
      })

      .addCase(addProduct.rejected, (state, { payload }) => {
        toast.error("Failed to upload");
        // toast.error(payload.response.data.message.split(";")[0]);
        // console.log(payload.response.data.message.split(";")[0]);
      })
      .addCase(inventory.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.pcount = payload.pcount;
        state.page = payload.page;
        state.totalPage = payload.totalPage;
      });
  },
});

export default sellerSlice.reducer;
