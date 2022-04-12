const router = require('express').Router()
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/verifications')
const { createCart, deleteCart, getAllCarts, getCart, updateCart } = require('../controllers/cart')

router.post('/:id', verifyTokenAndAuthorization, createCart)
router.put('/:cartId/user/:id', verifyTokenAndAuthorization, updateCart)
router.delete('/:cartId/user/:id', verifyTokenAndAuthorization, deleteCart)
router.get('/user/:id', verifyTokenAndAuthorization, getCart)
router.get('/', verifyTokenAndAdmin, getAllCarts)

module.exports = router
