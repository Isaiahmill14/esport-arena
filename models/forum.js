const mongoose = require('mongoose');
const Schema = require('mongoose').Schema

const forumSchema = new Schema({
  content: { type: String, required: true },
  xAccount: { type: String },
}, {
  timestamps: true
});

module.export = mongoose.model('Forum', forumSchema)