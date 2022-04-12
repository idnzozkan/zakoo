import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/auth'
import productsReducer from './slices/products'
import ordersReducer from './slices/orders'
import usersReducer from './slices/users'

const persistConfig = {
  key: 'auth',
  version: 1,
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  orders: ordersReducer,
  users: usersReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export default store
