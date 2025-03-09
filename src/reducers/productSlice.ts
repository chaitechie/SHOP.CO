import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductState } from "../Interface/Product";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
// Fetch products from an API
export const fetchProducts = createAsyncThunk<IProduct[]>(
  "products/fetch",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IProduct[];
  }
);
// product state
const initialState: ProductState = {
  items: [],
  filteredItems: [],
  status: "idle",
  error: "",
  caterBy: "",
  rateBy: 0,
  sortBy: "",
  productId: "",
  productDetail: {
    id: "",
    product_title: "",
    product_description: "",
    product_category: "",
    product_rating: 0,
    product_price: 0,
    product_image: "",
    category: ""
  },
};
// reducer for product slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter(state, action: PayloadAction<string | null>) {
      state.caterBy = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setRating(state, action: PayloadAction<number>) {
      state.rateBy = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setProductDetails(state, action: PayloadAction<string>) {
      state.productId = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    applyFilters(state) {
      let filtered = [...state.items];

      if (state.caterBy) {
        filtered = filtered.filter(
          (prod) => prod.product_category === state.caterBy
        );
      }

      if (state.sortBy === "LowToHigh") {
        filtered.sort((a, b) => a.product_price - b.product_price);
      } else if (state.sortBy === "HighToLow") {
        filtered.sort((a, b) => b.product_price - a.product_price);
      }
      if (state.rateBy) {
        filtered = filtered.filter(
          (prod) => prod.product_rating === state.rateBy
        );
      }

      if (filtered.length === 0) {
        state.filteredItems = state.items;
      }
      state.filteredItems = filtered;

      if (state.productId) {
        const detail = filtered.filter((prod) => prod.id === state.productId);
        state.productDetail = { ...detail[0] };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load products";
      });
  },
});
// Export actions
export const { setCategoryFilter, setSorting, setRating, setProductDetails } =
  productSlice.actions;
export default productSlice.reducer;
