import { useState } from "react"
import * as matchesAPI from '../../utilities/matches-api'
import './NewMatchForm.css'

export default function NewMatchForm({ setToggle }) {
    const [newMatch, setNewMatch] = useState({
        game: 'Call of Duty MW3',
        date: '',
        type: '1v1',
        gamerTag: '',
    })

    function handleInputChange(evt) {
        const { name, value } = evt.target
        setNewMatch((prevMatch) => ({
            ...prevMatch,
            [name]: value,
        }))
    }

    async function handleAddMatch(evt) {
        evt.preventDefault()
        await matchesAPI.addOne(newMatch)
        setToggle(prevToggle => !prevToggle)
        setNewMatch({
            game: '',
            date: '',
            type: '',
            gamerTag: '',
        })
    }

    return (
        <form className="NewMatchForm" onSubmit={handleAddMatch}>
            <div className="form-group">
                <label htmlFor="game">
                    Game:
                    <select name="game" id="game" value={newMatch.game} onChange={handleInputChange}>
                        <option value="Call of Duty MW3">Call of Duty MW3</option>
                        <option value="Halo Infinite">Halo Infinite</option>
                        <option value="Fortnite">Fortnite</option>
                    </select>
                </label>
                <label htmlFor="date">
                    Date:
                    <input name="date" id="date" value={newMatch.date} onChange={handleInputChange} />
                </label>
                <label htmlFor="type">
                    Type:
                    <select name="type" id="type" value={newMatch.type} onChange={handleInputChange}>
                        <option value="1v1">1v1</option>
                        <option value="2v2">2v2</option>
                        <option value="3v3">3v3</option>
                        <option value="4v4">4v4</option>
                    </select>
                </label>
                <label htmlFor="gamerTag">
                    GamerTag:
                    <input type="text" name="gamerTag" value={newMatch.gamerTag} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">ADD MATCH</button>
        </form>
    )
}