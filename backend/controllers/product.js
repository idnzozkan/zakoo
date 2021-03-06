const Product = require('../models/product')

// @desc      Creates a new product
// @route     POST /api/products
// @access    Admin
exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()

    res.status(201).json(savedProduct)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Updates a product
// @route     PUT /api/products/:id
// @access    Admin
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )

    res.status(200).json(updatedProduct)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Deletes a product
// @route     DELETE /api/products/:id
// @access    Admin
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json('Product has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets a product
// @route     GET /api/products/:id
// @access    Public
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets all products
// @route     GET /api/products
// @access    Public
exports.getProducts = async (req, res) => {
  const queryNew = req.query.new
  const queryCategory = req.query.category

  try {
    let products

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (queryCategory) {
      products = await Product.find({ categories: { $in: [queryCategory] } })
    } else {
      products = await Product.find()
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}
