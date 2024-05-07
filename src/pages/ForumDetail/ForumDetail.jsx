import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as forumsAPI from '../../utilities/forums-api'
import ForumDetail from "../../components/ForumDetail/ForumDetail";
import EditForumForm from "../../components/EditForumForm/EditForumForm";

export default function ForumDetails({ user }) {
    const [forum, setForum] = useState([])
    const {id} = useParams()
    const [editForum, setEditForum] = useState(true)

    useEffect(function() {
        async function getForum() {
            const forum = await forumsAPI.getById(id)
            setForum(forum)
        }
        getForum()
    }, [id, editForum])

    return (
        <main className="Forum">
            <h2>Edit Forum</h2>
            <ForumDetail forums={forum} user={user} />
            <hr />
            {forum.user === user._id && (
                <EditForumForm setEditForum={setEditForum} id={id} />
            )}
        </main>
    )
}