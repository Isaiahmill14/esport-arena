import { Link, useLocation } from "react-router-dom";
import "./ForumDetail.css"; // Import the CSS file for styling
import * as forumsAPI from '../../utilities/forums-api'

export default function ForumDetail({ forums }) {
  const location = useLocation()

  const handleClick = async () => {
    forumsAPI.deleteOne(forums._id)
  }

  const isExcludedPage = location.pathname === `/forums/${forums._id}`
  console.log(isExcludedPage)

  return (
    <div className="forum-container">
        <div className="forum-card">
        <div className="content">{forums.content}</div>
        <div className="xAccount">{forums.xAccount}</div>
        {!isExcludedPage && (

        <Link to={`/forums/${forums._id}`} className="edit-link">
          ✏️
        </Link>
        )}
        <button onClick={handleClick} className="delete-forum">X</button>
        </div>
    </div>
  );
}