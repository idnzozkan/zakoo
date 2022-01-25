import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
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
    }
  }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
