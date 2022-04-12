const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// @desc      Creates a new charge on Stripe
// @route     POST /api/checkout/payment
// @access    Logged-in user
exports.postPayment = async (req, res) => {
  await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd'
    },
    { apiKey: process.env.STRIPE_PRIVATE_KEY },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
        console.log(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
}
