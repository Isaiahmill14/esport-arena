require('dotenv').config();
require('./config/database');

const Forum = require('./models/forum')
const Match = require('./models/match');

(async function() {
    await Match.deleteMany({})
    const matches = await Match.create([
        {
            game: 'MWIII',
            date: '05/05/2024',
            type: '2v2',
            user: '6633e23419001f2733e6f0e3'
        },
        {
            game: 'MWIII',
            date: '05/06/2024',
            type: '1v1',
            user: '6633e23419001f2733e6f0e3'
        },
        {
            game: 'Halo Infinite',
            date: '05/08/2024',
            type: '4v4',
            user: '6633e23419001f2733e6f0e3'
        },
        {
            game: 'Fortnite',
            date: '05/11/2024',
            type: '1v1',
            user: '6633e23419001f2733e6f0e3'
        },
    ])

    await Forum.deleteMany({})
    const forums = await Forum.create([
        {
            content: 'Need a team for the tournament next week',
            xAccount: '@Zay09_',
        },
        {
            content: 'To3 need a flex for matches',
            xAccount: '@Trev96',
        },
        {
            content: 'Anyone trying to hop in discord and plays some games together?',
            xAccount: '@iTrickshot-_-',
        },
    ])

    console.log(matches, forums)

    process.exit()

})()