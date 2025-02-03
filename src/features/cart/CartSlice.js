import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  cartItems: [],
  totalQuantity: 0,

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartShow: (state) => {
      state.show = !state.show;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      // Check item is already exist or not
      const existingItem = state.cartItems?.find(
        (cartItem) => cartItem.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;

        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});
export const { toggleCartShow, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const totalCartItems = (state) => state.cart.cartItems;
export const totalQuantites = (state) => state.cart.totalQuantity;
