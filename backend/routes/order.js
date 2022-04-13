const router = require('express').Router()
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/verifications')
const {
  createOrder,
  deleteOrder,
  getIncome,
  getOrders,
  getSalesPerformance,
  getUserOrders,
  updateOrder,
  getCount,
  getOrder
} = require('../controllers/order')

router.post('/:id', verifyTokenAndAuthorization, createOrder)
router.put('/:id', verifyTokenAndAdmin, updateOrder)
router.delete('/:id', verifyTokenAndAdmin, deleteOrder)
router.get('/user/:id', verifyTokenAndAuthorization, getUserOrders)
router.get('/', verifyTokenAndAdmin, getOrders)
router.get('/income', verifyTokenAndAdmin, getIncome)
router.get('/sales-performance', verifyTokenAndAdmin, getSalesPerformance)
router.get('/count', verifyTokenAndAdmin, getCount)
router.get('/:id', verifyTokenAndAdmin, getOrder)

module.exports = router
