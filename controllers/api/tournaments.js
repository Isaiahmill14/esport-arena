const Tournament = require('../../models/tournament')
// const Match = require('../../models/match)

module.exports = {
    index,
}

async function index(req, res) {
    const tournaments = await Tournament.find({})
    res.json(tournaments)
}