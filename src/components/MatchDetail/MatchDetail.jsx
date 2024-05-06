import { Link } from 'react-router-dom'
import './MatchDetail.css'

export default function MatchDetail({ ladderMatches }) {

    return (
        <div className='match-card-container'>
            <div className="match-card">
                <div className='match-card-content'>
                    <div className="game">{ladderMatches.game}</div>
                    <div className="date">{ladderMatches.date}</div>
                    <div className="type">{ladderMatches.type}</div>
                    <Link to={`/matches/${ladderMatches._id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}