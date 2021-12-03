const router = require('express').Router()
const stripe = require('stripe')

router.post('/payment', async (req, res) => {
  await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd'
    },
    (err, res) => {
      if (err) {
        res.status(500).json(err)
        console.log(err)
      } else {
        res.status(200).json(res)
      }
    }
  )
})

module.exports = router
