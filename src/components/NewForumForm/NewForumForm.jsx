import { useState } from "react"
import * as forumsAPI from '../../utilities/forums-api'
import './NewForumForm.css'

export default function NewForumForm({ setBananas }) {
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

    async function handleAddForum(evt) {
        evt.preventDefault()
        await forumsAPI.addOne(newForum)
        setBananas(prevBananas => !prevBananas)
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
                    <input className="input-field" name="content" id="content" value={newForum.content} onChange={handleInputChange} />
                </label>
                <label htmlFor="xAccount">
                    xAccount:
                    <input className="input-field" name="xAccount" id="xAccount" value={newForum.xAccount} onChange={handleInputChange} />
                </label>
            </div>
            <button type="submit">ADD FORUM</button>
        </form>
    )
}