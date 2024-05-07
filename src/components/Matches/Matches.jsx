import MatchDetail from '../MatchDetail/MatchDetail'

export default function Matches({ ladderMatches, user, setToggle, toggle }) {
  console.log(ladderMatches)
  const matches = ladderMatches.map(match =>
      <MatchDetail
        toggle={toggle}
        setToggle={setToggle}
        user={user}
        key={match._id}
        ladderMatches={match}
      />
  );

  return (
      <div className="Matches">
          {matches}
      </div>
  )
}