import React from 'react'

const Post = ({ userImage, username, timeCreated, postText, postImage, likes, comments, shares }) => {
    return (
        <div className="card p-3 post w-100 mt-3">
            <div className="w-100 d-flex flex-column">
                <div className="user d-flex vertical-align flex-row">
                    <img src={userImage} className="rounded-circle mr-3" alt="" />
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row w-100">
                            <h5>{username}</h5>
                            <i className="far ml-1 fa-check-circle color-red fa-sm"></i>

                        </div>
                        <span>{timeCreated}</span>
                    </div>
                    <button onclick="showPostPopup(this)" className="ml-auto d-flex" id="post-popup-toggler"><i className="fas fa-ellipsis-h color-grey"></i></button>
                    <div className="card p-3 post-popup" id="post-popup">
                        <button className="">View More</button>
                    </div>
                </div>
                <div className="content">
                    <p className="mt-4">{postText}</p>
                    {
                        postImage && <img src={postImage} alt="" />
                    }
                    <div className="d-flex flex-row actions mt-3">
                        <a href="#">
                            <div className="d-flex flex-row vertical-align">
                                <i className="far fa-heart"></i>
                                <span className="ml-1">{likes}</span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="d-flex flex-row vertical-align ml-3">
                                <i className="far fa-comment"></i>
                                <span className="ml-1">{comments}</span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="d-flex flex-row vertical-align ml-3">
                                <i className="fas fa-retweet"></i>
                                <span className="ml-1">{shares}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
