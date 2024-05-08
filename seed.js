require('dotenv').config();
require('./config/database');

const Forum = require('./models/forum')
const Match = require('./models/match');

(async function() {
    await Match.deleteMany({})
    const matches = await Match.create([
        
    ])

    await Forum.deleteMany({})
    const forums = await Forum.create([
        
    ])

    console.log(matches, forums)

    process.exit()

})()