const Match = require('../../models/match')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const matches = await Match.find({})
    res.json(matches)
}

async function show(req, res) {
    const match = await Match.findById(req.params.id)
    res.json(match)
}

