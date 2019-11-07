import React, { useState, useEffect, } from "react"
import UserPost from "./UserPost"
import CommentPost from "./CommentPost"
import fetch from 'isomorphic-unfetch'
import moment from 'moment-timezone'
import NewComment from "./NewComment"

const MiddleLayout = () => {
    const url = window.location.pathname
    let id = url.split('/')[2]

    // const [postId, setPostId] = useState()
    let cachedFeedComments = JSON.parse(sessionStorage.getItem(`cachedFeedComments${id}`))
    const [post, setPost]: any = useState([])
    const [comments, setComments] = useState(cachedFeedComments != null ? cachedFeedComments : [])

    const getPost = (pid: string) => {
        if (pid !== undefined) {
            fetch(`/api/posts/${pid}`, {
                method: 'get'
            }).then(res => {
                res.status === 200
                    ? res.json().then(data => {
                        setPost(data[0])
                    })
                    : console.log("Something went wrong fetching post")
            })
        }
    }

    const getComments = (pid: string) => {
        if (pid !== undefined) {
            fetch(`/api/comments/${pid}`, {
                method: 'get'
            }).then(res => {
                res.status === 200
                    ? res.json().then(data => {
                        sessionStorage.setItem(`cachedFeedComments${id}`, JSON.stringify(data))
                        setComments([...data])
                    })
                    : console.log("Something went wrong fetching comments")
            })
        }
    }


    useEffect(() => {
        getPost(id)
    }, [setPost])

    useEffect(() => {
        const url = window.location.pathname
        const id = url.split('/')[2]

        setInterval(() => {
            getComments(id)
        }, 5000);
    }, [setComments])

    return (
        <>
            <div className="col-8 h-100">
                <div className="middle-layout" style={{ height: "92%" }}>
                    {
                        post.length <= 0
                            ? <div className="text-center" style={{ marginTop: "5%" }}>
                                <div className="spinner-border" role="status" style={{ color: "#D00000" }}>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            : <div className="card p-3">
                                <UserPost
                                    // userImage={user.userImage}
                                    // userImage="../static/assets/img/user/user.jpg"
                                    userName={post.username}
                                    timeCreated={moment(post.post_date).format('MMMM Do YYYY')}
                                    postText={post.content.text}
                                    postImage={post.content.image}

                                // likes={user.likes}
                                // comments={user.comments}
                                // shares={user.shares}
                                // name={post.username}
                                />

                                <NewComment postId={post.id} />

                                <div className="pt-4 comments">
                                    <h6 className="mb-4">Comments</h6>
                                    {
                                        comments === []
                                            ? <div className="text-center" style={{ marginTop: "5%" }}>
                                                <div className="spinner-border" role="status" style={{ color: "#D00000" }}>
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                            : comments.length === 0
                                                ? <div>
                                                    There are no comments. Be the first to comment.
                                                </div>
                                                : comments.map((comment, index) => (
                                                    <CommentPost
                                                        key={index}
                                                        pid={comment.id}
                                                        userImage="../../../static/assets/img/user/user.jpg"
                                                        userName={comment.username}
                                                        timeCreated={moment(comment.comment_date).format('MMMM Do YYYY')}
                                                        postText={comment.comment}
                                                        postImage={comment.comment_photo}
                                                        postVideo={comment.comment_video}
                                                        // likes={commentPost.likes}
                                                        // comments={commentPost.comments}
                                                        // shares={commentPost.shares}
                                                        name={comment.username}
                                                    />
                                                ))
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>

            <style>{`
            `}</style>
        </>
    );
};

export default MiddleLayout;
