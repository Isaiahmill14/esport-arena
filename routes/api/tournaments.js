const express = require('express')
const router = express.Router()
const tournamentsCtrl = require('../../controllers/api/tournaments')

// GET /api/tournaments
router.get('/tournament', tournamentsCtrl.index)

module.exports = router