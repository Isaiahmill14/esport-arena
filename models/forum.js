const mongoose = require('mongoose');
const Schema = mongoose.Schema

const forumSchema = new Schema({
  content: { type: String, required: true },
  xAccount: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Forum', forumSchema)