import { useState, useEffect } from 'react';
import * as matchesAPI from '../../utilities/matches-api'
import Matches from '../../components/Matches/Matches';
import NewMatchForm from '../../components/NewMatchForm/NewMatchForm';

export default function LadderMatches({ user }) {
  const [ladderMatches, setLadderMatches] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(function() {
    async function getMatches() {
      const matches = await matchesAPI.getAll()
      setLadderMatches(matches)
    }
    getMatches()
  }, [toggle])
  
  function addMatch(match) {
    setLadderMatches({...ladderMatches, match})
  }

  return (
    <main className='LadderMatches'>
      <h2>Ladder Matches</h2>
      <NewMatchForm setToggle={setToggle} addMatch={addMatch} />
      <hr />
      <Matches ladderMatches={ladderMatches} user={user} toggle={toggle} setToggle={setToggle} />
    </main>
  );
}