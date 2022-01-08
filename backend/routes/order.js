const router = require('express').Router()
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/verifications')
const Order = require('../models/order')

// CREATE
router.post('/:id', verifyTokenAndAuthorization, async (req, res) => {
  const { id } = req.params
  const { products, amount, address, paymentId, status } = req.body

  const orderToCreate = {}

  orderToCreate.userId = id
  orderToCreate.products = products
  orderToCreate.amount = amount
  orderToCreate.address = address
  orderToCreate.paymentId = paymentId
  if (status) orderToCreate.status = status

  const newOrder = new Order(orderToCreate)

  try {
    const savedOrder = await newOrder.save()

    res.status(201).json(savedOrder)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// UPDATE
router.put('/:orderId/user/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      { $set: req.body },
      { new: true }
    )

    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// DELETE
router.delete('/:orderId/user/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.orderId)

    res.status(200).json('Order has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET USER ORDERS
router.get('/user/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new

  try {
    const orders = query ? await Order.find().sort({ createdAt: -1 }).limit(4) : await Order.find()

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET MONTHLY INCOME STATS
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } }
      },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount'
        }
      },
      {
        $group: {
          _id: '$month',
          totalIncome: { $sum: '$sales' }
        }
      }
    ])

    res.status(200).json(income)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

module.exports = router
