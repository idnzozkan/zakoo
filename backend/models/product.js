const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    color: {
      type: String
    },
    isInStock: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
