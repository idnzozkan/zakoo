const router = require('express').Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifications')
const { createUser, deleteUser, getUser, getUserStats, getUsers, updateUser } = require('../controllers/user')

router.patch('/:id', verifyTokenAndAuthorization, updateUser)
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)
router.post('/', verifyTokenAndAdmin, createUser)
router.get('/stats', verifyTokenAndAdmin, getUserStats)
router.get('/:id', verifyTokenAndAdmin, getUser)
router.get('/', verifyTokenAndAdmin, getUsers)

module.exports = router
