const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      autopopulate: true
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],
    amount: {
      type: Number,
      required: true
    },
    address: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      default: 'pending'
    },
    paymentId: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
)

OrderSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Order', OrderSchema)
