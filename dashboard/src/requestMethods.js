import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

const userFromLocalStorage =
  localStorage.getItem('persist:root') &&
  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)

const TOKEN = userFromLocalStorage?.loggedInUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: `Bearer ${TOKEN}`
})
