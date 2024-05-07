import { Link, useLocation } from 'react-router-dom'
import './MatchDetail.css'
import * as matchesAPI from '../../utilities/matches-api'

export default function MatchDetail({ ladderMatches }) {
    const location = useLocation()

    const handleClick = async () => {
        matchesAPI.deleteOne(ladderMatches._id)
    }

    const handleJoin = async () => {
        
    }
    
    const isExcludedPage = location.pathname === `/matches/${ladderMatches._id}`

    return (
        <div className='match-card-container'>
            <div className="match-card">
                <div className='match-card-content'>
                    <div className="game">{ladderMatches.game}</div>
                    <div className="date">{ladderMatches.date}</div>
                    <div className="type">{ladderMatches.type}</div>
                    
                    {!isExcludedPage && (
                        <Link to={`/matches/${ladderMatches._id}`} className='play-link'>Play</Link>
                    )}
                    <button onClick={handleClick} className="delete-match"></button>
                    <button onClick={handleJoin} className='append-user'></button>
                </div>
            </div>
        </div>
    );
}