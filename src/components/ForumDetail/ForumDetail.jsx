export default function ForumDetail({ forums }) {
    return (
        <div className="forum">
            <div className="content">{forums.content}</div>
            <div className="xAccount">{forums.xAccount}</div>
        </div>
    )
}