import { useState } from "react";
import * as forumsAPI from '../../utilities/forums-api'

export default function EditForumForm({ id }) {
    const [editedForum, setEditedForum] = useState({
        content: '',
        xAccount: '',
    })

    function handleInputChange(evt) {
        const { name, value } = evt.target
        setEditedForum((prevForum) => ({
            ...prevForum,
            [name]: value,
        }))
    }

    function handleEditForum(evt) {
        evt.preventDefault()
        forumsAPI.editOne(id, editedForum)
    }
    console.log(id)
    return (
        <form className="NewForumForm" onSubmit={handleEditForum}>
            <div className="flex-ctr-ctr">
                <label htmlFor="content">
                    Content:
                    <input name="content" id="content" value={editedForum.content} onChange={handleInputChange} />
                </label>
                <label htmlFor="xAccount">
                    xAccount:
                    <input name="xAccount" id="xAccount" value={editedForum.xAccount} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">UPDATE FORUM</button>
        </form>
    )
}