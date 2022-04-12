const Order = require('../models/order')
const moment = require('moment')

// @desc      Creates a new order for the user
// @route     POST /api/orders/:id
// @access    Logged-in user
exports.createOrder = async (req, res) => {
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
}

// @desc      Updates an order
// @route     PUT /api/orders/:id
// @access    Admin
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Deletes an order
// @route     DELETE /api/orders/:id
// @access    Admin
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)

    res.status(200).json('Order has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets all orders belong to the user
// @route     GET /api/orders/user/:id
// @access    Logged-in user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets all orders
// @route     GET /api/orders
// @access    Admin
exports.getOrders = async (req, res) => {
  const query = req.query.new

  try {
    const orders = query ? await Order.find().sort({ createdAt: -1 }).limit(4) : await Order.find().sort({ createdAt: -1 })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets income stats for the last two months
// @route     GET /api/orders/income
// @access    Admin
exports.getIncome = async (req, res) => {
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
}

// @desc      Gets sales performance of a product
// @route     GET /api/orders/sales-performance
// @access    Admin
exports.getSalesPerformance = async (req, res) => {
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
}

// @desc      Gets the count of orders for the last two months
// @route     GET /api/orders/count
// @access    Admin
exports.getCount = async (req, res) => {
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
}

// @desc      Gets an order
// @route     GET /api/orders/:id
// @access    Admin
exports.getOrder = async (req, res) => {
  const { id } = req.params

  try {
    const order = await Order.findById(id).populate({
      path: 'products',
      populate: { path: 'productId' }
    })

    res.status(200).json(order)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}
