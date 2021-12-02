const express = require('express')
const dontenv = require('dotenv')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

dontenv.config()
require('./mongo-connection')

const app = express()
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running!')
})
