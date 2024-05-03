const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  xAccount: { type: String,  }
}, {
  timestamps: true
});

module.export = mongoose.model('Forum', forumSchema)