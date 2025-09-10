import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
