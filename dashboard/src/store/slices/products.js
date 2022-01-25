import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    products: [],
    product: null,
    isFailed: false
  },
  reducers: {
    getProductsStart: state => {
      state.isLoading = true
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    getProductsFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    getProductStart: state => {
      state.isLoading = true
    },
    getProductSuccess: (state, action) => {
      state.isLoading = false
      state.product = action.payload
    },
    getProductFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    deleteProductStart: state => {
      state.isLoading = true
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false
      state.products.splice(
        state.products.findIndex(p => p._id === action.payload),
        1
      )
    },
    deleteProductFailure: state => {
      state.isLoading = false
      state.isFailed = true
    }
  }
})

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure
} = productsSlice.actions
export default productsSlice.reducer
