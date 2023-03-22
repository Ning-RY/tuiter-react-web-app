import React from "react";
//import PostSummaryItem from "./post-summary-item";
import TuitItem from "../tuits/tuitItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    /*const postsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post} post={post}/>)
            }
        </ul>
    );*/
    const postsArray = useSelector(state => state.homeTuits)
    return (
        <ul className="list-group">
            {
                postsArray.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default PostSummaryList;