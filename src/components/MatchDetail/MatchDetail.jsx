import { Link } from 'react-router-dom'
import './MatchDetail.css'
import * as matchesAPI from '../../utilities/matches-api'

export default function MatchDetail({ ladderMatches }) {
    const handleClick = async () => {
        matchesAPI.deleteOne(ladderMatches._id)
    }

    return (
        <div className='match-card-container'>
            <div className="match-card">
                <div className='match-card-content'>
                    <div className="game">{ladderMatches.game}</div>
                    <div className="date">{ladderMatches.date}</div>
                    <div className="type">{ladderMatches.type}</div>
                    <Link to={`/matches/${ladderMatches._id}`} className='join-link'>Join</Link>
                    <button onClick={handleClick} className="btn"></button>
                </div>
            </div>
        </div>
    )
}

