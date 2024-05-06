import { useState, useEffect } from 'react';
import * as matchesAPI from '../../utilities/matches-api'
import Matches from '../../components/Matches/Matches';
import NewMatchForm from '../../components/NewMatchForm/NewMatchForm';
import * as userService from '../../utilities/users-service'

export default function LadderMatches() {
  const [ladderMatches, setLadderMatches] = useState([])

  useEffect(function() {
    async function getMatches() {
      const matches = await matchesAPI.getAll()
      setLadderMatches(matches)
    }
    getMatches()
  }, [])

  async function handleCheckToken() {
    const expDate = await userService.checkToken()
    console.log(expDate)
  }
  
  function addMatch(match) {
    setLadderMatches({...ladderMatches, match})
  }

  return (
    <main className='LadderMatches'>
      <h1>Matches</h1>
      <Matches ladderMatches={ladderMatches} />
      <hr />
      <NewMatchForm addMatch={addMatch} />
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}