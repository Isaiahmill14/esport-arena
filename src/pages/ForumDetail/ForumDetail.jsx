import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as forumsAPI from '../../utilities/forums-api'
import ForumDetail from "../../components/ForumDetail/ForumDetail";
import EditForumForm from "../../components/EditForumForm/EditForumForm";

export default function ForumDetails() {
    const [forum, setForum] = useState([])
    const {id} = useParams()

    useEffect(function() {
        async function getForum() {
            const forum = await forumsAPI.getById(id)
            setForum(forum)
        }
        getForum()
    }, [id])

    return (
        <main className="Forum">
            <h1>Forum Details</h1>
            <ForumDetail forums={forum} />
            <hr />
            <EditForumForm id={id} />
        </main>
    )
}