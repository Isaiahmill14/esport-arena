import { useState } from "react";
import * as matchesAPI from '../../utilities/matches-api';
import './EditMatchForm.css'

export default function EditMatchForm({ id, setEditMatch }) {
    const [editedMatch, setEditedMatch] = useState({
        game: 'Call of Duty MW3',
        date: '',
        type: '1v1',
        gamerTag: '',
    });

    function handleInputChange(evt) {
        const { name, value } = evt.target;
        setEditedMatch((prevMatch) => ({
            ...prevMatch,
            [name]: value,
        }));
    }

    async function handleEditMatch(evt) {
        evt.preventDefault();
        await matchesAPI.editOne(id, editedMatch)
        setEditMatch(prevEditMatch => !prevEditMatch)
        setEditedMatch({
            game: 'Call of Duty MW3',
            date: '',
            type: '1v1',
            gamerTag: '',
        })
    }
    console.log(id)
    return (
        <form className="EditMatchForm" onSubmit={handleEditMatch}>
            <div className="flex-ctr-ctr">
                <label htmlFor="game">
                    Game:
                    <select name="game" id="game" value={editedMatch.game} onChange={handleInputChange}>
                        <option value="Call of Duty MW3">Call of Duty MW3</option>
                        <option value="Halo Infinite">Halo Infinite</option>
                        <option value="Fortnite">Fortnite</option>
                    </select>
                </label>
                <label htmlFor="date">
                    Date:
                    <input name="date" id="date" value={editedMatch.date} onChange={handleInputChange} />
                </label>
                <label htmlFor="type">
                    Type:
                    <select name="type" id="type" value={editedMatch.type} onChange={handleInputChange}>
                        <option value="1v1">1v1</option>
                        <option value="2v2">2v2</option>
                        <option value="3v3">3v3</option>
                        <option value="4v4">4v4</option>
                    </select>
                </label>
                <label htmlFor="gamerTag">
                    GamerTag:
                    <input type="text" name="gamerTag" value={editedMatch.gamerTag} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">UPDATE MATCH</button>
        </form>
    );
}
