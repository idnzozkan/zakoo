import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: [],
    user: null,
    isFailed: false
  },
  reducers: {
    getUsersStart: state => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    },
    getUsersFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    getUserstart: state => {
      state.isLoading = true
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false
      state.user = action.payload
    },
    getUserFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    addUserStart: state => {
      state.isLoading = true
    },
    addUserSuccess: (state, action) => {
      state.isLoading = false
      state.users.push(action.payload)
    },
    addUserFailure: state => {
      state.isLoading = false
      state.isFailed = true
    },
    deleteUserStart: state => {
      state.isLoading = true
    },
    deleteUserSuccess: (state, action) => {
      state.isLoading = false
      state.users.splice(
        state.users.findIndex(p => p._id === action.payload),
        1
      )
    },
    deleteUserFailure: state => {
      state.isLoading = false
      state.isFailed = true
    }
  }
})

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure
} = usersSlice.actions
export default usersSlice.reducer
