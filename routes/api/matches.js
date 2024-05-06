const express = require('express')
const router = express.Router()
const matchesCtrl = require('../../controllers/api/matches')

// GET /api/matches
router.get('/', matchesCtrl.index)
// POST /api/matches
router.post('/', matchesCtrl.create)
// GET /api/matches/:id
router.get('/:id', matchesCtrl.show)
// PUT /api/matches/:id
router.put('/:id', matchesCtrl.update)
// DELETE /api/matches/:id
router.delete('/:id', matchesCtrl.delete)

module.exports = router