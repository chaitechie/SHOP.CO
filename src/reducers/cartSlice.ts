import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICart, CartState } from "../Interface/Cart";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

// Fetch cart from an API
export const fetchCart = createAsyncThunk<ICart[]>("cart/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "carts"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ICart[];
});

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  status: "idle",
  error: null,
  cartId: "",
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    deleteCart(state, action: PayloadAction<{ CartId: string }>) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.CartId
      );
      if (index !== -1) {
        state.totalPrice -= state.cart[index].product_price * 1;
        state.cart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load products";
      });
  },
});

// Export actions
export const { deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
