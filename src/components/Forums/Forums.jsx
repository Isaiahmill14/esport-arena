import ForumDetail from "../ForumDetail/ForumDetail";

export default function Forums({ forums }) {
    console.log(forums)
    const forumPosts = forums ? forums.map(forum =>
        <ForumDetail
            key={forum._id}
            forums={forum}
        />
    ) : null

    return (
        <div className="Forums">
            {forumPosts}
        </div>
    )
}