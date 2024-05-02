const Schema = require('mongoose').Schema

const matchSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true},
    type: { type: String, required: true}
}, {
    timestamps: true
})

module.exports = matchSchema