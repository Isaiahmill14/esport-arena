import { Link } from "react-router-dom"

export default function ForumDetail({ forums }) {
    return (
        <div className="forum">
            <div className="content">{forums.content}</div>
            <div className="xAccount">{forums.xAccount}</div>
            <Link to={`/forums/${forums._id}`}>Edit</Link> 
        </div>
    )
}