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
  userUid: "",
  filteredCart: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setFilteredCart(state, action: PayloadAction<string>) {
      state.userUid = action.payload;
      cartSlice.caseReducers.applyCart(state);
    },
    applyCart(state) {
      let userCart = [...state.cart];
      if (state.userUid) {
        userCart = userCart.filter((prod) => prod.userUid === state.userUid);
      }

      state.filteredCart = userCart;
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
export const { setFilteredCart } = cartSlice.actions;
export default cartSlice.reducer;
