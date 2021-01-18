import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAuth: false,
    data: {
      nombre: null,
      email: null,
    },
    cart: {
      count: 0,
      items: [],
    },
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload.value;
    },
    addToCart: (state, action) => {
      console.log("reducer", [...state.cart.items, ...action.payload.value]);
      state.cart = {
        count: state.cart.count + 1,
        items: action.payload.value,
      };
    },
    setUserData: (state, action) => {
      state.data = action.payload.value;
    },
    clear: () => (state, action) => {
      state = {
        isAuth: false,
        data: {
          nombre: null,
          email: null,
        },
        cart: {
          count: 0,
          items: [],
        },
      };
    },
  },
});

// export actions
export const { setIsAuth, addToCart, setUserData, clear } = appSlice.actions;

// export state data
export const getAuthState = (state) => state.app.isAuth;
export const getCartCount = (state) => state?.app?.cart?.count;
export const getUserData = (state) => state.app.data;
export const getCartState = (state) => state.app.cart;

export default appSlice.reducer;
