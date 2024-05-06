const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const matchSchema = new Schema({
    game: { type: String, required: true, },
    date: { type: Date, required: true },
    type: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema)