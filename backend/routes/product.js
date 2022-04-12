const router = require('express').Router()
const { verifyTokenAndAdmin } = require('../middlewares/verifications')
const { createProduct, deleteProduct, getProduct, getProducts, updateProduct } = require('../controllers/product')

router.post('/', verifyTokenAndAdmin, createProduct)
router.put('/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/:id', getProduct)
router.get('/', getProducts)

module.exports = router
