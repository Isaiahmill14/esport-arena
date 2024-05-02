const express = require('express')
const router = express.Router()
const matchesCtrl = require('../../controllers/api/matches')

// Get /api/matches
router.get('/', matchesCtrl.index)

module.exports = router