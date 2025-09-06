import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface ProductState {
  productData: ProductType[];
  favoriteData: ProductType[];
  allProducts: ProductType[];
  userInfo: { name: string; email: string; image: string } | null;
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
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.quantity) {
          existingProduct.quantity = existingProduct.quantity + 1;
        }
      } else {
        state.productData = [...state.productData, action.payload];
      }
    },

    addToFavorite: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favoriteData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.quantity) {
          existingProduct.quantity = existingProduct.quantity + 1;
        }
      } else {
        state.favoriteData = [...state.favoriteData, action.payload];
      }
    },

    increaseQuantity: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );

      existingProduct && existingProduct.quantity && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct && existingProduct.quantity) {
        if (existingProduct.quantity === 1) {
          existingProduct.quantity = 1;
        } else {
          existingProduct.quantity--;
        }
      }
    },

    deleteProduct: (state, action: PayloadAction<ProductType>) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      );
    },

    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },

    resetFavoriteData: (state) => {
      state.favoriteData = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  deleteFavorite,
  resetCart,
  resetFavoriteData,
  addUser,
  removeUser,
} = productSlice.actions;
export default productSlice.reducer;
