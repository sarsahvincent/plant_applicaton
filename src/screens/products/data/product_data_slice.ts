import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialProductState: any = {
  accessToken: null,
  user: {
    contactName: null,
    email: null,
    id: null,
    loggedIn: false,
    role: "user",
    username: null,
    supplierId: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    getAllProduct: (state, action: PayloadAction<any>) => {
      const accessToken = action.payload.accessToken;
      state.accessToken = accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { getAllProduct } = productSlice.actions;

export default productSlice.reducer;
