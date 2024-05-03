export default function MatchDetail({ ladderMatches }) {
    
    return (
        <div className="MatchDeatil">
            <div className="game">{ladderMatches.game}</div>
            <div className="date">{ladderMatches.date}</div>
            <div className="type">{ladderMatches.type}</div>
        </div>
    )
}