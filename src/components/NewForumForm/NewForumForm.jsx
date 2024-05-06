import { useState } from "react"
import * as forumsAPI from '../../utilities/forums-api'

export default function NewForumForm({ addForum }) {
    const [newForum, setNewForum] = useState({
        content: '',
        xAccount: '',
    })

    function handleInputChange(evt) {
        const { name, value } = evt.target
        setNewForum((prevForum) => ({
            ...prevForum,
            [name]: value,
        }))
    }

    function handleAddForum(evt) {
        evt.preventDefault()
        forumsAPI.addOne(newForum)
        setNewForum({
            content: '',
            xAccount: '',
        })
    }

    return (
        <form className="NewForumForm" onSubmit={handleAddForum}>
            <div className="flex-ctr-ctr">
                <label htmlFor="content">
                    Content:
                    <input name="content" id="content" value={newForum.content} onChange={handleInputChange} />
                </label>
                <label htmlFor="xAccount">
                    xAccount:
                    <input name="xAccount" id="xAccount" value={newForum.xAccount} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">ADD FORUM</button>
        </form>
    )
}