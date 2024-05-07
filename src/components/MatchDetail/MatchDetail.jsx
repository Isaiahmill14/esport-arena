import { Link, useLocation } from 'react-router-dom'
import './MatchDetail.css'
import * as matchesAPI from '../../utilities/matches-api'

export default function MatchDetail({ ladderMatches, user, setToggle }) {
    const location = useLocation()

    const handleClick = async () => {
        await matchesAPI.deleteOne(ladderMatches._id)
        setToggle(prevToggle => !prevToggle)
    }
    console.log(ladderMatches.user)
    console.log(user)
    const isDetailPage = location.pathname === `/matches/${ladderMatches._id}`

    return (
        <div className='match-card-container'>
            <div className="match-card">
                <div className='match-card-content'>
                    <div className="game">{ladderMatches.game}</div>
                    <div className="date">{ladderMatches.date}</div>
                    <div className="type">{ladderMatches.type}</div>
                    <div className="gamerTag">Send invite to: {ladderMatches.gamerTag}</div>
                    
                    {!isDetailPage && (
                        <Link to={`/matches/${ladderMatches._id}`} className='play-link'>Play</Link>
                    )}
                    {ladderMatches.user === user._id && !isDetailPage && (
                        <button onClick={handleClick} className="delete-match">Delete</button>
                    )}
                </div>
            </div>
        </div>
    );
}