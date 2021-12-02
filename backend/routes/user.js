const router = require('express').Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifications')
const User = require('../models/user')
const CryptoJS = require('crypto-js')

// UPDATE
router.patch('/:id', verifyTokenAndAuthorization, async (req, res) => {
  const { username, email, password } = req.body

  const dataToUpdate = {}
  if (username) dataToUpdate.username = username
  if (email) dataToUpdate.email = email
  if (password)
    dataToUpdate.password = CryptoJS.AES.encrypt(password, env.process.PASSWORD_SECRET).toString()

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: dataToUpdate
      },
      { new: true }
    )

    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET A USER
router.get('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...otherData } = user._doc

    res.status(200).json(otherData)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET ALL USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new

  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
    const usersButPassword = users
      .map(({ _doc }) => _doc)
      .map(({ password, ...otherData }) => otherData)

    res.status(200).json(usersButPassword)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' }
        }
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }
        }
      }
    ])

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
})

module.exports = router
