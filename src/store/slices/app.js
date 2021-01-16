import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAuth: false,
    data: {
      name: null,
      email: null,
    },
    cart: {
      count: 0,
      items: [],
    },
  },
  reducers: {
    setIsAuth: (state, action) => (state.isAuth = action.payload.value),
    increaseCart: (state, action) => (state.cart.count = state.cart.count + 1),
  },
});

// export actions
export const { setIsAuth, increaseCart } = appSlice.actions;

// export state data
export const isAuth = (state) => state.app.isAuth;
export const getCartCount = (state) => state.app.cart.count;

export default appSlice.reducer;
