import { Link, useLocation } from "react-router-dom";
import "./ForumDetail.css"; // Import the CSS file for styling
import * as forumsAPI from '../../utilities/forums-api'

export default function ForumDetail({ forums, user, setBananas }) {
  const location = useLocation()

  const handleClick = async () => {
    await forumsAPI.deleteOne(forums._id)
    setBananas(prevBananas => !prevBananas)
  }

  const isExcludedPage = location.pathname === `/forums/${forums._id}`

  return (
    <div className="forum-container">
        <div className="forum-card">
        <div className="content">{forums.content}</div>
        <div className="xAccount">{forums.xAccount}</div>
        {forums.user === user._id && !isExcludedPage && (

        <Link to={`/forums/${forums._id}`} className="edit-link">
          ✏️
        </Link>
        )}
        {forums.user === user._id && !isExcludedPage && (
          <button onClick={handleClick} className="delete-forum">X</button>
        )}
        </div>
    </div>
  );
}