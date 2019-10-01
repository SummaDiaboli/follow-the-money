import React, { useEffect, useState } from 'react'
import { UserPost, Post } from './Posts'
import { NotificationIcon } from '../User'
require('../../static/assets/css/pages/Feed.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import { SideTab } from './SideTab'
import moment from 'moment-timezone'

const Feed = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        setInterval(async () => {
            const res = await fetch('api/posts')
            const json = await res.json()
            setPosts(json)
        }, 5000)
    }

    useEffect(() => {
        getPosts()
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
                                    posts.length == 0
                                        ? <div class="text-center" style={{ marginTop: "5%" }}>
                                            <div class="spinner-border" role="status" style={{ color: "#D00000" }}>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        : posts.map((post, index) => (
                                            <Post
                                                userID={post.id}
                                                key={index}
                                                userPhoto={require("../../static/assets/img/user/user.jpg")}
                                                text={post.content.text}
                                                username={post.username}
                                                time={moment(post.post_date).format('MMMM Do YYYY') /* + " " + post.post_date + post.post_time */}
                                            />
                                        ))
                                }
                                {/* <Post
                                    userPhoto={require("../../static/assets/img/user/hamzat.jpg")}
                                    username="Hamzat Lawal"
                                    userID="3774"
                                    time="8:15pm, yesterday"
                                    text="Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time  @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs"
                                    image={require("../../static/assets/img/posts/post1.jpg")}
                                    likes="2.1k"
                                    comments="201"
                                    shares="1.2k"
                                />

                                <Post
                                    userPhoto={require("../../static/assets/img/user/hanan.jpg")}
                                    username="Hanan Dilong"
                                    userID="2174"
                                    time="8:15pm, yesterday"
                                    text="Hello there. It’s my second serial social entrepreneurship course."
                                    image={null}
                                    likes="2.1k"
                                    comments="420"
                                    shares="96k"
                                />

                                <Post
                                    userPhoto={require("../../static/assets/img/user/nwabuisi.jpg")}
                                    username="Momoyioluwa Abioye"
                                    userID="3324"
                                    time="6:09pm"
                                    text="He says he's a bad guy and that he belongs on World Star HipHop"
                                    image={require("../../static/assets/img/playlists/playlist1.jpg")}
                                /> */}
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
