import ForumDetail from "../ForumDetail/ForumDetail";

export default function Forums({ f }) {
    console.log(f)
    const forumPosts = f.map(forum =>
        <ForumDetail
            key={forum._id}
            f={forum}
        />
    )

    return (
        <div className="Forums">
            {forumPosts}
        </div>
    )
}