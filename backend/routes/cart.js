const router = require('express').Router()
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization
} = require('../middlewares/verifications')
const Cart = require('../models/cart')

// CREATE
router.post('/:id', verifyTokenAndAuthorization, async (req, res) => {
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
})

// UPDATE
router.put('/:cartId/user/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      { $set: req.body },
      { new: true }
    )

    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// DELETE
router.delete('/:cartId/user/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.cartId)

    res.status(200).json('Cart has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET USER CART
router.get('/user/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id })

    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET ALL CARTS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()

    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

module.exports = router
