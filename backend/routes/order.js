const router = require('express').Router()
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/verifications')
const Order = require('../models/order')
const moment = require('moment')

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
    const orders = query
      ? await Order.find().sort({ createdAt: -1 }).limit(4)
      : await Order.find().sort({ createdAt: -1 })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET INCOME STATS
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
  const twoMonthsAgo = moment().subtract(2, 'month').toDate()

  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: twoMonthsAgo } }
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

// GET SALES PERFORMANCE STATS OF A PRODUCT
router.get('/sales-performance', verifyTokenAndAdmin, async (req, res) => {
  const threeMonthsAgo = moment().subtract(3, 'month').toDate()
  const productId = req.query.product

  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: threeMonthsAgo }, products: { $elemMatch: { productId } } }
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

// GET ORDER COUNT STATS
router.get('/count', verifyTokenAndAdmin, async (req, res) => {
  const twoMonthsAgo = moment().subtract(2, 'month').toDate()

  try {
    const count = await Order.aggregate([
      {
        $match: { createdAt: { $gte: twoMonthsAgo } }
      },
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          numberOfOrders: { $sum: 1 }
        }
      }
    ])

    res.status(200).json(count)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET AN ORDER
router.get('/:orderId', verifyTokenAndAdmin, async (req, res) => {
  const { orderId } = req.params

  try {
    const order = await Order.findById(orderId).populate({
      path: 'products',
      populate: { path: 'productId' }
    })

    res.status(200).json(order)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

module.exports = router
