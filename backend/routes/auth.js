const router = require('express').Router()
const User = require('../models/user')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
})

router.post('/login', async (req, res) => {
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
    res.status(500).json(err)
    console.log(err)
  }
})

module.exports = router