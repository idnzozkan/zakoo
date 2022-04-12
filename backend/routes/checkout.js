const router = require('express').Router()
const { postPayment } = require('../controllers/checkout')

router.post('/payment', postPayment)

module.exports = router
