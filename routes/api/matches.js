const express = require('express')
const router = express.Router()
const matchesCtrl = require('../../controllers/api/matches')

// GET /api/matches
router.get('/', matchesCtrl.index)
// GET /api/matches
router.post('/', matchesCtrl.create)
// GET /api/matches/details
router.get('/:id', matchesCtrl.show)


module.exports = router