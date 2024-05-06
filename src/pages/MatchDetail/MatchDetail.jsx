import { useState, useEffect } from "react";
import * as matchesAPI from '../../utilities/matches-api'
import MatchDetail from "../../components/MatchDetail/MatchDetail";
import EditMatchForm from "../../components/EditMatchForm/EditMatchForm";

export default function MatchDetails() {
    const [ladderMatch, setLadderMatch] = useState([])

    useEffect(function() {
        async function getMatch() {
            const match = await matchesAPI.getById()
            setLadderMatch(match)
        }
        getMatch()
    }, [])

    function editMatch(match) {
    
    }

    return (
        <main className="LadderMatch">
            <h1>Match Details</h1>
            <MatchDetail ladderMatch={ladderMatch} />
            <EditMatchForm editMatch={editMatch} />
        </main>
    )
}