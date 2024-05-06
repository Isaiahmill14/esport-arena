import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as matchesAPI from '../../utilities/matches-api'
import MatchDetail from "../../components/MatchDetail/MatchDetail";
import EditMatchForm from "../../components/EditMatchForm/EditMatchForm";

export default function MatchDetails() {
    const [ladderMatch, setLadderMatch] = useState([])
    const {id} = useParams()

    useEffect(function() {
        async function getMatch() {
            const match = await matchesAPI.getById(id)
            setLadderMatch(match)
        }
        getMatch()
    }, [])

    return (
        <main className="LadderMatch">
            <h1>Match Details</h1>
            <MatchDetail ladderMatches={ladderMatch} />
            <EditMatchForm id={id} />
        </main>
    )
}