import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import homeSlice from "./features/homeSlice";
import sellerSlice from "./features/sellerSlice";
import productSlice from "./features/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    homePage: homeSlice,
    seller: sellerSlice,
    products: productSlice,
  },
});

export default store;
