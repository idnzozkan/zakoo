import { publicRequest, userRequest } from '../requestMethods'
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from './slices/auth'
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} from './slices/products'
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure
} from './slices/orders'
import {
  addUserStart,
  addUserSuccess,
  addUserFailure,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure
} from './slices/users'

export const login = async (dispatch, userData) => {
  dispatch(loginStart())

  try {
    const response = await publicRequest.post('/auth/login', userData)
    if (response.data?.accessToken) {
      dispatch(loginSuccess(response.data))
    }
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const logout = dispatch => {
  dispatch(logoutSuccess())
}

export const getProducts = async dispatch => {
  dispatch(getProductsStart())

  try {
    const response = await publicRequest.get('/products')
    dispatch(getProductsSuccess(response.data))
  } catch (error) {
    dispatch(getProductsFailure())
  }
}

export const getProduct = async id => {
  try {
    const response = await publicRequest.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async (productId, updatedData) => {
  try {
    await userRequest.put(`/products/${productId}`, updatedData)
  } catch (error) {
    throw error
  }
}

export const addProduct = async (dispatch, productData) => {
  dispatch(addProductStart())

  try {
    const response = await userRequest.post('/products', productData)
    if (response.data?.accessToken) {
      dispatch(addProductSuccess(response.data))
    }
  } catch (error) {
    dispatch(addProductFailure())
  }
}

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart())

  try {
    await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (error) {
    dispatch(deleteProductFailure())
  }
}

export const getOrders = async dispatch => {
  dispatch(getOrdersStart())

  try {
    const res = await userRequest.get('/orders')
    dispatch(getOrdersSuccess(res.data))
  } catch (error) {
    dispatch(getOrdersFailure())
  }
}

export const updateOrder = async (dispatch, orderId, updatedData) => {
  dispatch(updateOrderStart())

  try {
    const res = await userRequest.put(`/orders/${orderId}`, updatedData)
    dispatch(updateOrderSuccess(res.data))
  } catch (error) {
    dispatch(updateOrderFailure())
  }
}

export const deleteOrder = async (dispatch, id) => {
  dispatch(deleteOrderStart())

  try {
    // await userRequest.delete(`/orders/${id}`)
    dispatch(deleteOrderSuccess(id))
  } catch (error) {
    dispatch(deleteOrderFailure())
  }
}

export const getUsers = async dispatch => {
  dispatch(getUsersStart())

  try {
    const response = await userRequest.get('/users')
    dispatch(getUsersSuccess(response.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

export const getUser = async id => {
  try {
    const response = await userRequest.get(`/users/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (userId, updatedData) => {
  try {
    await userRequest.patch(`/users/${userId}`, updatedData)
  } catch (error) {
    throw error
  }
}

export const addUser = async (dispatch, userData) => {
  dispatch(addUserStart())

  try {
    const response = await userRequest.post('/users', userData)
    dispatch(addUserSuccess(response.data))
  } catch (error) {
    dispatch(addUserFailure())
  }
}
