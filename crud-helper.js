// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Match = require('./models/match');
const Tournament = require('./models/tournament');
// const Forum = require('./models/forum');

// Local variables will come in handy for holding retrieved documents
let user, match, tournament, forum;
let users, matches, tournaments, forums;
