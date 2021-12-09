import { publicRequest } from '../requestMethods'
import { loginFailure, loginStart, loginSuccess } from './user'

export const login = async (dispatch, userData) => {
  dispatch(loginStart())

  try {
    const response = await publicRequest.post('/auth/login', userData)
    dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
