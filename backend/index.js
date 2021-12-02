const express = require('express')
const dontenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dontenv.config()
require('./mongo-connection')

const app = express()
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running!')
})
