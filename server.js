const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
// Connect to db after the dotenv above
require('./config/database');

const app = express();

app.use(logger('dev'));
// Process data in body of request if 
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'))

const port = process.env.PORT || 3001;

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'));

// Protect all routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/matches', ensureLoggedIn, require('./routes/api/matches'))
app.use('/api/forums', ensureLoggedIn, require('./routes/api/forums'))

// "catch-all" route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
}); 