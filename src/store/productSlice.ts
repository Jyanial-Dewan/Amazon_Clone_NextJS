import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface ProductState {
  productData: ProductType[];
  favoriteData: ProductType[];
  allProducts: ProductType[];
  userInfo: { id: string; name: string } | null;
}

const initialState: ProductState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.productData = [...state.productData, action.payload];
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
