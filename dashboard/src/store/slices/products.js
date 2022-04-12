import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    products: [],
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
    addProductStart: state => {
      state.isLoading = true
    },
    addProductSuccess: (state, action) => {
      state.isLoading = false
      state.products.push(action.payload)
    },
    addProductFailure: state => {
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
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} = productsSlice.actions
export default productsSlice.reducer
