import PostItem from "./PostItem.js";
import posts from "./posts.js";
import PostItemsNoImageContent from "./PostItemsNoImageContent.js";

const PostList = () => {
    return (`
        ${
        posts.map(post => {
            if (post.shared_content === "") {
                return (PostItemsNoImageContent(post));
            }
            return (PostItem(post));
        }).join('')
    }
    `);
}
export default PostList;