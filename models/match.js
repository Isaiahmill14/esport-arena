const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const matchSchema = new Schema({
    game: { type: String, required: true, enum: ['MWIII', 'Halo Infinite', 'Fortnite'] },
    date: { type: Date, required: true},
    type: { type: String, required: true, enum: ['1v1', '2v2', '3v3', '4v4'] },
    tournament: { type: Schema.Types.ObjectId, ref: 'Tournament'},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema)