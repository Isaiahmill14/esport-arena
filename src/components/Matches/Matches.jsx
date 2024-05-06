import MatchDetail from '../MatchDetail/MatchDetail'

export default function Matches({ ladderMatches }) {
  console.log(ladderMatches)
  const matches = ladderMatches.map(match =>
      <MatchDetail
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