const express = require('express')
const authentication = require('../middleware/authentication')
const { MovieController } = require('../controllers/movieController')
const router = express.Router()

router.use(authentication)
router.get('/', MovieController.fetchMovies)
router.get('/:id', MovieController.fetchMovieById)

module.exports = router