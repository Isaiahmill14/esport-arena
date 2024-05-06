const express = require('express')
const router = express.Router()
const forumsCtrl = require('../../controllers/api/forums')

// GET /api/forums
router.get('/', forumsCtrl.index)
// GET /api/forums
router.post('/', forumsCtrl.create)

module.exports = router