const User = require('../models/user')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// @desc      Creates a new user
// @route     POST /api/auth/register
// @access    Public
exports.register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}

// @desc      Logs-in with an existing user
// @route     POST /api/auth/login
// @access    Public
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return res.status(401).json('Wrong credentials!')

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET)
    const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    if (req.body.password !== userPassword) return res.status(401).json('Wrong credentials!')

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    )

    // Don't send password to the client
    const { password, ...otherData } = user._doc

    res.status(200).json({ ...otherData, accessToken })
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err)
  }
}
