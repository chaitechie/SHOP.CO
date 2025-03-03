import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";
const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
