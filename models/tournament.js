const mongoose = require('mongoose')
const Schema = mongoose.Schema
const matchSchema = require('./matchSchema')

const tournamentSchema = new Schema({
    name: { type: String, required: true },
    game: { type: String, require: true },
    date: { type: Date, required: true},
    type: { type: String, required: true},
    matches: matchSchema
}, {
    timestamps: true
})

module.exports = tournamentSchema