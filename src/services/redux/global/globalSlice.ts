import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialGlobalState: any = {};

const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    getAllProduct: (state, action: PayloadAction<any>) => {
      const accessToken = action.payload.accessToken;
      state.accessToken = accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { getAllProduct } = globalSlice.actions;

export default globalSlice.reducer;
