const express = require('express')
const dontenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')

dontenv.config()
require('./mongo-connection')

const app = express()
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running!')
})
