import React, { useEffect, useState } from 'react'
import { UserPost, Post } from './Posts'
import { NotificationIcon } from '../User'
require('../../static/assets/css/pages/Feed.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import { SideTab } from './SideTab'
import moment from 'moment-timezone'

const Feed = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const abortController: AbortController = new window.AbortController()
        const signal: AbortSignal = abortController.signal

        const getPosts = () => {
            setInterval(() => {
                fetch('api/posts', { signal })
                    .then(res => {
                        res.json().then((posts) => setPosts(posts))
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            return 'Promise Aborted'
                        } else {
                            return 'Promise Rejected'
                        }
                    })
                // const json = await res.json()
                // setPosts(json)
            }, 8000)
        }
        getPosts()
        // console.table(posts)
        return () => {
            abortController.abort()
        }
        // console.log("Posts", posts)
    }, [posts])

    return (
        <div className="main" style={{ overflow: "hidden" }}>
            <nav>
                <ul className="d-flex vertical-align"
                    style={{ display: "flex" }}>
                    <li>
                        <a href="#" className="active">Posts</a>
                        <a href="#">Photos</a>
                        <a href="#">Videos</a>
                        <a href="#">Communities</a>
                        <a href="#">Favourites</a>
                        <a href="#">Recommendations</a>
                    </li>

                    <NotificationIcon />

                </ul>
                <hr className="w-100" />
            </nav>

            <div className="container-fluid h-100 p-0">
                <div className="row px-0 py-1 h-100 m-0 w-100">
                    <div className="col-8 h-100">
                        <div className="middle-layout" style={{ height: "90%" }}>

                            <UserPost />

                            <div className="posts ">
                                {
                                    posts === null
                                        ? <div className="text-center" style={{ marginTop: "5%" }}>
                                            <div className="spinner-border" role="status" style={{ color: "#D00000" }}>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        : posts.length == 0
                                            ? <></>
                                            : posts.map((post, index) => (
                                                <Post
                                                    userName={post.username}
                                                    key={index}
                                                    pid={post.id}
                                                    userPhoto={require("../../static/assets/img/user/user.jpg")}
                                                    text={post.content.text}
                                                    name={post.username}
                                                    time={moment(post.post_date).format('MMMM Do YYYY') /* + " " + post.post_date + post.post_time */}
                                                />
                                            ))
                                }
                            </div>
                        </div>
                    </div>

                    <SideTab />
                </div>
            </div>
        </div>
    )
}

export default Feed
