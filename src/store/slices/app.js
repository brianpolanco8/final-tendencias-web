import { createSlice } from "@reduxjs/toolkit";
import { Logo1, Logo4, Logo5, Logo7, Logo8 } from "assets/images";

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
    articles: [
      {
        title: "Medicina 1",
        price: 150,
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: Logo1,
        imageText: "Image Text",
      },
      {
        title: "Medicina 2",
        price: 180,
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: Logo7,
        imageText: "Image Text",
      },
      {
        title: "Medicina 3",
        price: 120,
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: Logo8,
        imageText: "Image Text",
      },
      {
        title: "Medicina 4",
        price: 140,
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: Logo5,
        imageText: "Image Text",
      },
      {
        title: "Medicina 5",
        price: 200,
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: Logo4,
        imageText: "Image Text",
      },
    ],
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload.value;
    },
    addToCart: (state, action) => {
      state.cart = {
        count: state.cart.count + 1,
        items: action.payload.value,
      };
    },
    addArticle: (state, action) => {
      state.articles = action.payload.value;
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
        articles: action.payload.value,
      };
    },
  },
});

// export actions
export const {
  setIsAuth,
  addToCart,
  setUserData,
  clear,
  addArticle,
} = appSlice.actions;

// export state data
export const getAuthState = (state) => state.app.isAuth;
export const getCartCount = (state) => state?.app?.cart?.count;
export const getUserData = (state) => state.app.data;
export const getCartState = (state) => state.app.cart;
export const getArticlesState = (state) => state.app.articles;

export default appSlice.reducer;
