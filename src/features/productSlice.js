import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findProducts,
  findProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productAPI";

const initialState = {
  values: null,
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getProducts = createAsyncThunk("product/list", async () => {
  const response = await findProducts();
  return response.data;
});

export const getProduct = createAsyncThunk("product/detail", async (productId) => {
  const response = await findProduct(productId);

  return response.data;
});

export const addProduct = createAsyncThunk("product/create", async (product) => {
  const response = await createProduct(product);
  return response.data;
});

export const editProduct = createAsyncThunk("product/edit", async (product) => {
  const response = await updateProduct(product);
  return response.data;
});

export const removeProduct = createAsyncThunk("product/remove", async (productId) => {
  const response = await deleteProduct(productId);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Update states of get products action
      .addCase(getProducts.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })

      //Update states of get product action
      .addCase(getProduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of add product action
      .addCase(addProduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of edit product action
      .addCase(editProduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of remove product action
      .addCase(removeProduct.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = productSlice.actions;

export const selectLoading = (state) => state.product.loading;
export const selectError = (state) => state.product.error;
export const selectSuccess = (state) => state.product.success;
export const selectProductList = (state) => state.product.values;
export const selectProductDetail = (state) => state.product.value;
export const selectProductAdded = (state) => state.product.value;
export const selectProductEdited = (state) => state.product.value;
export const selectProductRemoved = (state) => state.product.value;

//Enhancement feature of product slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default productSlice.reducer;
