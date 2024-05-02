const mongoose = require('mongoose')
const matchSchema = require('./matchSchema')

module.exports = mongoose.model('Match', matchSchema)