import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    isLoading: false,
    orders: [],
    isFailed: false
  },
  reducers: {
    getOrdersStart: state => {
      state.isLoading = true
    },
    getOrdersSuccess: (state, action) => {
      state.isLoading = false
      state.orders = action.payload
    },
    getOrdersFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    updateOrderStart: state => {
      state.isLoading = true
    },
    updateOrderSuccess: state => {
      state.isLoading = false
    },
    updateOrderFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },    
    deleteOrderStart: state => {
      state.isLoading = true
    },
    deleteOrderSuccess: (state, action) => {
      state.isLoading = false
      state.orders.splice(
        state.orders.findIndex(o => o._id === action.payload),
        1
      )
    },
    deleteOrderFailure: state => {
      state.isLoading = false
      state.isFailed = true
    }
  }
})

export const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,  
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure
} = ordersSlice.actions
export default ordersSlice.reducer
