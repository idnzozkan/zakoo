const Cart = require('../models/cart')

// @desc      Creates a cart for the user
// @route     POST /api/carts/:id
// @access    Logged-in user
exports.createCart = async (req, res) => {
  const { id } = req.params
  const { products } = req.body

  const cartToCreate = {}

  cartToCreate.userId = id
  cartToCreate.products = products

  const newCart = new Cart(req.body)

  try {
    const savedCart = await newCart.save()

    res.status(201).json(savedCart)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Updates user's cart
// @route     PUT /api/carts/:cartId/user/:id
// @access    Logged-in user
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, { $set: req.body }, { new: true })

    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Deletes user's cart
// @route     DELETE /api/carts/:cartId/user/:id
// @access    Logged-in user
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.cartId)

    res.status(200).json('Cart has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets the user's cart
// @route     GET /api/carts/user/:id
// @access    Logged-in user
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id })

    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets all carts
// @route     GET /api/carts
// @access    Admin
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()

    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}
