import React, { useState } from 'react'
import { UserPost, Post } from './Posts'
import { NotificationIcon } from '../User'

require('../../static/assets/css/pages/Feed.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import { SideTab } from './SideTab'

const Feed = () => {
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
                                <Post
                                    userPhoto={require("../../static/assets/img/user/hamzat.jpg")}
                                    username="Hamzat Lawal"
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
                                    time="6:09pm"
                                    text="He says he's a bad guy and that he belongs on World Star HipHop"
                                    image={require("../../static/assets/img/playlists/playlist1.jpg")}
                                />
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
