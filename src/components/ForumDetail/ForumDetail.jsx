import { Link } from "react-router-dom";
import "./ForumDetail.css"; // Import the CSS file for styling

export default function ForumDetail({ forums }) {
  return (
    <div className="forum-container">
        <div className="forum-card">
        <div className="content">{forums.content}</div>
        <div className="xAccount">{forums.xAccount}</div>
        <Link to={`/forums/${forums._id}`} className="edit-link">
            Edit
        </Link>
        </div>
    </div>
  );
}