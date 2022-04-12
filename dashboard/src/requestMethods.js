import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

const getToken = () => {
  if (!localStorage.hasOwnProperty('persist:auth')) {
    return undefined
  }
  return JSON.parse(JSON.parse(localStorage.getItem('persist:auth'))?.loggedInUser)?.accessToken
}

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${getToken()}` }
})
