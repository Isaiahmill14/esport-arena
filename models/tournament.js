const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tournamentSchema = new Schema({
    name: { type: String, required: true },
    game: { type: String, require: true },
    date: { type: Date, required: true},
    type: { type: String, required: true},
    matches: [{ type: Schema.Types.ObjectId, ref: 'Match'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Tournament', tournamentSchema)