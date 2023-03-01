import PostItems from "./postItems.js";
import postsArray from "./posts.json";

const PostList = () => {
    return (

        <div className="">
            {
                postsArray.map(post =>
                    <PostItems
                        key={post} post={post}/>)
            }
        </div>

    );
}
export default PostList;