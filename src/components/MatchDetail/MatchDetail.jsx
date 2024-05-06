import { Link } from 'react-router-dom'
import './MatchDetail.css'

export default function MatchDetail({ ladderMatches }) {

    const handleClick = async () => {
        try {

            const response = await fetch(`/api/matches/${ladderMatches._id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                
            } else {
                const errorMessage = await response.text()
                throw new Error(errorMessage)
            }
        } catch (error) {
            console.error('Error deleting match:', error)
        }
    }
        
    return (
        <div className='match-card-container'>
            <div className="match-card">
                <div className='match-card-content'>
                    <div className="game">{ladderMatches.game}</div>
                    <div className="date">{ladderMatches.date}</div>
                    <div className="type">{ladderMatches.type}</div>
                    <Link to={`/matches/${ladderMatches._id}`}>Details</Link>
                    <button onClick={handleClick} className="btn">X</button>
                </div>
            </div>
        </div>
    )
}

