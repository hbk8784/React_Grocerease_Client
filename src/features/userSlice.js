import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customAxios";
import {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage,
} from "../utils/localStorage";

const initialState = {
  user: getLocalStorage(),
  cartCount: getLocalStorage()?.cwCount?.inCart || 0,
  wishCount: getLocalStorage()?.cwCount?.inWishlist || 0,
  registerSuccess: false,
  userUpdateSuccess: false,
};

//log in for existing users
export const loginThunk = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/user/login", user);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

//registering new user
export const registerThunk = createAsyncThunk(
  "/user/registration",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/user/register", user);
      return resp.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

//updating the user profile
export const updateProfileThunk = createAsyncThunk(
  "/user/update",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/customer/profile", user, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.payload.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.cartCount = 0;
      state.wishCount = 0;
      clearLocalStorage();
      toast.success("Loged out");
    },
    statusOnUpdate: (state) => {
      state.userUpdateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        // console.log("in pending state");
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.cartCount = payload.user.cwCount.inCart;
        state.wishCount = payload.user.cwCount.inWishlist;
        state.user = payload.user;
        setLocalStorage(payload.user);
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(registerThunk.pending, (state) => {
        // console.log("registeration in pending state");
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        toast.success(payload);
        state.registerSuccess = true;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        toast.error(payload);
        state.registerSuccess = false;
      })
      .addCase(updateProfileThunk.pending, (state) => {
        toast.warning("updating please wait");
      })
      .addCase(updateProfileThunk.fulfilled, (state, { payload }) => {
        state.cartCount = payload.user.cwCount.inCart;
        state.wishCount = payload.user.cwCount.inWishlist;
        state.user = payload.user;
        setLocalStorage(payload.user);
        toast.success("Profile Updated");
        state.userUpdateSuccess = true;
      })
      .addCase(updateProfileThunk.rejected, (state, { payload }) => {
        toast.error(payload);
      });
  },
});
export const { logout, statusOnUpdate } = userSlice.actions;
export default userSlice.reducer;
