const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const movieRouter = require('./movie')

router.use('/user', userRouter)
router.use('/movies', movieRouter)

module.exports = router