import React from "react";

const PostItems = ({post = {}}) => {
    return (
        <div className="general-border">
            <div className="padding-top-20">
            </div>
            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className="ms-3 user-image" src={post.userPhoto}/>
                </div>
                <div className="col-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="fond-size-16">
                                <span className="fond-size-16 bold-text">{post.userName}
                                    <i className="fa fa-circle-check fa-1x"></i>
                                </span>
                        <span className="fond-size-16 color-gray">{post.at}</span>
                        <span className="fond-size-16 color-gray"> · {post.time}</span>
                        <span className="to-right font-size-22 padding-bottom-13 fa fa-ellipsis-h color-gray"></span>
                    </div>
                    <div className="padding-top-5 fond-size-16">
                        <span>{post.content}</span>
                        <span className="color-deepskyblue">{post.link_content}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>

                <div className="col-10 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="card-padding">
                        <div className="">
                            <img src={post.image} className="round-image" alt="..."/>
                        </div>
                    </div>
                </div>

                <div className="row text-padding-top-20 text-padding-bottom-25">
                    <div className="col-2 col-lg-2 col-xl-2 col-xxl-2">
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa-regular fa-comment"></i>
                        <span className="padding-left-10">{post.comments}</span>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa fa-retweet" style={{"color": "gray"}}></i>
                        <span className="padding-left-10">{post.share}</span>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <i className="fa-regular fa-heart"></i>
                        <span className="padding-left-10">{post.like}</span>
                    </div>
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        <i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItems;