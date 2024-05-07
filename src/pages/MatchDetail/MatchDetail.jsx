import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as matchesAPI from '../../utilities/matches-api'
import MatchDetail from "../../components/MatchDetail/MatchDetail";
import EditMatchForm from "../../components/EditMatchForm/EditMatchForm";

export default function MatchDetails({ user }) {
    const [ladderMatch, setLadderMatch] = useState([])
    const {id} = useParams()
    const [editMatch, setEditMatch] = useState(true)

    useEffect(function() {
        async function getMatch() {
            const match = await matchesAPI.getById(id)
            setLadderMatch(match)
        }
        getMatch()
    }, [id, editMatch])

    return (
        <main className="LadderMatch">
            <h2>Match Details</h2>
            <MatchDetail ladderMatches={ladderMatch} user={user} />
            <hr />
            {ladderMatch.user === user._id && (
                <EditMatchForm setEditMatch={setEditMatch} id={id} />
            )}
        </main>
    )
}