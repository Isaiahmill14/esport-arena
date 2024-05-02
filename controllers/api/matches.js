const Match = require('../../models/match')

module.exports = {
    index,
}

async function index(req, res) {
    const matches = await Match.find({}).sort('name')
    res.join(matches)
}
