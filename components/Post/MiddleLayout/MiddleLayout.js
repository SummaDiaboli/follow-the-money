import React, { useState } from "react";
import UserPost from "./UserPost";
import CommentPost from "./CommentPost";

const MiddleLayout = () => {
    const [user, setUser] = useState({
        userImage: "../static/assets/img/user/hamzat.jpg",
        name: "Hamzat Lawal",
        userName: "hamzat",
        timeCreated: "8:15pm, yesterday",
        postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
        postImage: "../static/assets/img/posts/post1.jpg",
        likes: "2.1k",
        comments: "201",
        shares: "1.2k"
    });

    const [commentPosts, setCommentPosts] = useState([
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        },
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        },
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        },
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        },
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
            "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        }
    ]);

    return (
        <>
            <div className="col-8 h-100">
                <div className="middle-layout" style={{ height: "92%" }}>
                    <div className="card p-3">
                        <UserPost
                            userImage={user.userImage}
                            userName={user.userName}
                            timeCreated={user.timeCreated}
                            postText={user.postText}
                            postImage={user.postImage}
                            likes={user.likes}
                            comments={user.comments}
                            shares={user.shares}
                            name={user.name}
                        />
                        <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
                            <img
                                className="rounded-circle mr-3"
                                src={user.userImage}
                                alt=""
                            />
                            <input
                                type="text"
                                className="w-50"
                                placeholder="Add a comment"
                                value=""
                            />
                            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                                <button>
                                    <i className="far fa-image"></i>
                                </button>
                                <button>
                                    <i className="far fa-user ml-3"></i>
                                </button>
                                <button>
                                    <i className="far fa-smile ml-3"></i>
                                </button>
                                <div className="border mx-3"></div>
                                <button>
                                    <i className="fas fa-paper-plane color-red" />
                                </button>
                            </div>
                        </div>
                        <div className="pt-4 comments">
                            <h6 className="mb-4">Comments</h6>
                            {commentPosts.map((commentPost, index) =>(
                                <CommentPost
                                    userImage={commentPost.userImage}
                                    userName={commentPost.userName}
                                    timeCreated={commentPost.timeCreated}
                                    postText={commentPost.postText}
                                    likes={commentPost.likes}
                                    comments={commentPost.comments}
                                    shares={commentPost.shares}
                                    name={commentPost.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
            `}</style>
        </>
    );
};

export default MiddleLayout;
