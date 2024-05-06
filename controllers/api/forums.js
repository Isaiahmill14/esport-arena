const Forum = require('../../models/forum')

module.exports = {
    index,
    show,
    new: newForum,
    create,
    edit,
    update,
    delete: deleteForum,
}

async function index(req, res) {
    const forums = await Forum.find({})
    res.json(forums)
}

async function show(req, res) {
    const forum = await Forum.findById(req.params.id)
    res.json(forum)
}

async function newForum(req, res) {
    const forums = await Forum.find({})
    res.json(forums)
}

async function create(req, res) {
    try {
        const forum = await Forum.create(req.body)
        res.json(forum)
    } catch (err) {
        console.log(err)
    }
}

async function edit(req, res) {
    const forum = await Forum.findById(req.params.id)
    res.json(forum)
}

async function update(req, res) {
    const forum = await Forum.findByIdAndUpdate(req.params.id, req.body)
    res.json(forum)
}

async function deleteForum(req, res) {
    const forum = await Forum.findByIdAndDelete(req.params.id, req.body)
    res.json(forum)
}