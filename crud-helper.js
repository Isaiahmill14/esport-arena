// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Forum = require('./models/forum');
const Match = require('./models/match');
// const Forum = require('./models/forum');

// Local variables will come in handy for holding retrieved documents
let user, match, forum;
let users, matches, forums;
