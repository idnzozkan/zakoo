const User = require('../models/user')
const CryptoJS = require('crypto-js')

// @desc      Updates the user's particular information
// @route     PATCH /api/users/:id
// @access    Logged-in user
exports.updateUser = async (req, res) => {
  const { name, location, phone, image, username, email, password } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (location) dataToUpdate.location = location
  if (phone) dataToUpdate.phone = phone
  if (image) dataToUpdate.image = image
  if (username) dataToUpdate.username = username
  if (email) dataToUpdate.email = email
  if (password) dataToUpdate.password = CryptoJS.AES.encrypt(password, env.process.PASSWORD_SECRET).toString()

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: dataToUpdate
      },
      { new: true }
    )

    const { password, ...otherData } = updatedUser._doc

    res.status(200).json(otherData)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Deletes the user
// @route     DELETE /api/users/:id
// @access    Logged-in user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Creates a new user
// @route     POST /api/users
// @access    Admin
exports.createUser = async (req, res) => {
  const newUser = new User(req.body)

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets the count of registered users by month within a year
// @route     GET /api/users/stats
// @access    Admin
exports.getUserStats = async (req, res) => {
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
      },
      {
        $sort: { _id: 1 }
      }
    ])

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets a user without their password
// @route     GET /api/users/:id
// @access    Admin
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...otherData } = user._doc

    res.status(200).json(otherData)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Gets all users without their passwords
// @route     GET /api/users
// @access    Admin
exports.getUsers = async (req, res) => {
  const query = req.query.new

  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(4) : await User.find()
    const usersButPassword = users.map(({ _doc }) => _doc).map(({ password, ...otherData }) => otherData)

    res.status(200).json(usersButPassword)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}
