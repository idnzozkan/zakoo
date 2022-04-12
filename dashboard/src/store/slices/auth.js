import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    loggedInUser: null,
    isFailed: false
  },
  reducers: {
    loginStart: state => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.loggedInUser = action.payload
    },
    loginFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    logoutSuccess: state => {
      state.loggedInUser = null
      // localStorage.removeItem('persist:auth')
    }
  }
})

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions
export default authSlice.reducer
