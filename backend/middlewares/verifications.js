const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json('Invalid token!')

      req.user = user
      next()
    })
  } else {
    return res.status(401).json('You are not authenticated!')
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
      next()
    } else {
      return res.status(401).json("You don't have permission to do this!")
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return res.status(401).json("You don't have permission to do this!")
    }
  })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
