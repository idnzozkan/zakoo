import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    productCountInCart: 0,
    totalPrice: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.productCountInCart += action.payload.quantity
      state.products.push(action.payload)
      state.totalPrice += action.payload.price * action.payload.quantity
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
