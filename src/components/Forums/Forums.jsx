import ForumDetail from "../ForumDetail/ForumDetail";

export default function Forums({ forums, user, setBananas }) {
    console.log(forums)
    const forumPosts = forums ? forums.map(forum =>
        <ForumDetail
            setBananas={setBananas}
            user={user}
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