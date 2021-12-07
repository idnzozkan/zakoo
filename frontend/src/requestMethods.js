import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTdmNjJkNDdhMzlkZDBhMTA3N2NjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg5NzA5OCwiZXhwIjoxNjM5MTU2Mjk4fQ.9rGdKby86_NFRQWO5cluEORYEnDmsHbiHkMvzPSokEg'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: `Bearer ${TOKEN}`
})
