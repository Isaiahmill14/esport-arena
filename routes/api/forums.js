const express = require('express')
const router = express.Router()
const forumsCtrl = require('../../controllers/api/forums')

// GET /api/forums
router.get('/', forumsCtrl.index)
// POST /api/forums
router.post('/', forumsCtrl.create)
// GET /api/forums/:id
router.get('/:id', forumsCtrl.show)
// PUT /api/forums/:id
router.put('/:id', forumsCtrl.update)

module.exports = router