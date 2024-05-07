const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    game: { type: String, required: true, default: 'Call of Duty MW3' },
    date: { type: Date, required: true },
    type: { type: String, required: true, default: '1v1' },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    gamerTag: { type: String, required: true, placeholder: 'Enter GamerTag' }
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema)