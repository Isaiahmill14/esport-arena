export default function ForumDetail({ forums }) {
    return (
        <div className="forum-card">
            <div className="content">{forums.content}</div>
            <div className="xAccount">{forums.xAccount}</div>
        </div>
    )
}