import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
};

const calculateTotals = (items) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDiscount = items.reduce(
    (sum, item) =>
      sum +
      (item.price *
        item.quantity *
        (Math.round(item.discountPercentage) || 0)) /
        100,
    0
  );
  return {
    subtotal: Number(subtotal.toFixed(2)),
    total: subtotal - totalDiscount,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
        const totals = calculateTotals(state.items);
        state.subtotal = totals.subtotal;
        state.total = totals.total;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        const totals = calculateTotals(state.items);
        state.subtotal = totals.subtotal;
        state.total = totals.total;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartSubtotal = (state) => state.cart.subtotal;
export const selectCartTotal = (state) => state.cart.total;

export default cartSlice.reducer;
