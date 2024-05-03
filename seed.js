require('dotenv').config();
require('./config/database');

const Match = require('./models/match');
const Tournament = require('./models/tournament');

(async function() {
    await Tournament.deleteMany({})
    const tournaments = await Tournament.create([
        {
            name: '05/05 $250 2v2 MWIII @ 5pm est',
            game: 'Call of Duty MWIII',
            date: '05/05/2024',
            type: '2v2',

        },
        {
            name: '05/07 $500 3v3 MWIII @ 12pm est',
            game: 'Call of Duty MWIII',
            date: '05/07/2024',
            type: '3v3',

        },
        {
            name: '05/08 $1000 4v4 Halo Infinite @ 2:30pm est',
            game: 'Halo Infininte',
            date: '05/08/2024',
            type: '4v4',

        }
    ])

    await Match.deleteMany({})
    const matches = await Match.create([
        {
            game: 'Call of Duty MWIII',
            date: '05/05/2024',
            type: '2v2',
        },
        {
            game: 'Call of Duty MWIII',
            date: '05/06/2024',
            type: '1v1',
        },
        {
            game: 'Halo Infinite',
            date: '05/08/2024',
            type: '4v4',
        },
    ])

    console.log(tournaments, matches)

    process.exit()

})()