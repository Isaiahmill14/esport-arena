const Match = require('../../models/match')

module.exports = {
    index,
    show,
    new: newMatch,
    create,
    edit,
    update,
    delete: deleteMatch,
}

async function index(req, res) {
    const matches = await Match.find({})
    res.json(matches)
}

async function show(req, res) {
    const match = await Match.findById(req.params.id)
    res.json(match)
}

async function newMatch(req, res) {
    const matches = await Match.find({})
    res.json(matches)
}

async function create(req, res) {
    try {
        req.body.user = req.user
        const match = await Match.create(req.body)
        res.json(match)
    } catch (err) {
        console.log(err)
    }
}

async function edit(req, res) {
    const match = await Match.findById(req.params.id)
    res.json(match)
}

async function update(req, res) {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body)
    res.json(match)
}

async function deleteMatch(req, res) {
    const match = await Match.findByIdAndDelete(req.params.id, req.body)
    res.json(match)
}