import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

// !INITIAL STATE
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
    };

// !CART SLICE
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((ite) => ite._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x,
        );
      } else {
        state.cartItems.push(item);
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, idx) => item._id !== action.payload,
      );
      return updateCart(state);
    },
  },
});
export const { addToCart , removeFromCart } = cartSlice.actions;

export default cartSlice;
