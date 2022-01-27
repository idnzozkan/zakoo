import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import productsReducer from './slices/products'
import ordersReducer from './slices/orders'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  orders: ordersReducer
})

const store = configureStore({
  reducer: {
    reducer: rootReducer
  }
})

export default store
