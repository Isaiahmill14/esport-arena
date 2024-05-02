const express = require('express')
const router = express.Router()
const matchesCtrl = require('../../controllers/api/matches')

// GET /api/matches
router.get('/', matchesCtrl.index)

module.exports = router