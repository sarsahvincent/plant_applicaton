import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState: any = {
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

const authSlice = createSlice({
  name: "user",
  initialState: initialAuthState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<any>) => {
      const accessToken = action.payload.accessToken;
      state.accessToken = accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { setUserCredentials } = authSlice.actions;

export default authSlice.reducer;
