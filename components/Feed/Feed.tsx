import React, { useEffect, useState } from "react";
import { UserPost, Post } from "./Posts";
import { NotificationIcon } from "../User";
require("../../static/assets/css/pages/Feed.css");
import "bootstrap/dist/css/bootstrap.min.css";
import { SideTab } from "./SideTab";
import moment from "moment-timezone";

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const abortController: AbortController = new window.AbortController();
        const signal: AbortSignal = abortController.signal;

        const getPosts = () => {
            setInterval(() => {
                fetch("api/posts", { signal })
                    .then(res => {
                        setIsLoading(false)
                        res.json().then(posts => {
                            if (posts !== null) {
                                sessionStorage.setItem(
                                    "feedPosts",
                                    JSON.stringify(posts)
                                );
                                setPosts([...posts]);
                            }
                        });
                    })
                    .catch(err => {
                        if (err.name === "AbortError") {
                            return "Promise Aborted";
                        } else {
                            return "Promise Rejected";
                        }
                    });
                // const json = await res.json()
                // setPosts(json)
            }, 8000);
        };
        getPosts();
        // console.table(posts)
        return () => {
            abortController.abort();
        };
        // console.log("Posts", posts)
    }, [posts]);

    useEffect(() => {
        const cachedFeedPosts = JSON.parse(sessionStorage.getItem("feedPosts"))
        if (cachedFeedPosts !== null) {
            setPosts(cachedFeedPosts)
            setIsLoading(false)
        }
    }, [setPosts, isLoading])

    return (
        <>
            <div className="main" style={{ overflow: "hidden" }}>
                <nav>
                    <ul
                        className="d-flex flex-row nav nav-tabs vertical-align"
                        role="tablist"
                        style={{ display: "flex" }}
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="all-tab"
                                data-toggle="tab"
                                href="#all"
                                role="tab"
                                aria-controls="all"
                                aria-selected="true"
                            >
                                Posts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="photos-tab"
                                data-toggle="tab"
                                href="#photos"
                                role="tab"
                                aria-controls="photos"
                                aria-selected="false"
                            >
                                Photos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="videos-tab"
                                data-toggle="tab"
                                href="#videos"
                                role="tab"
                                aria-controls="videos"
                                aria-selected="false"
                            >
                                Videos
                            </a>
                        </li>

                        <NotificationIcon />
                    </ul>
                    <hr className="w-100" />
                </nav>

                <div className="container-fluid h-100 p-0">
                    <div className="row px-0 py-1 h-100 m-0 w-100">
                        <div className="col-8 h-100">
                            <div
                                className="middle-layout"
                                style={{ height: "90%" }}
                            >
                                <UserPost />

                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="all"
                                        role="tabpanel"
                                        aria-labelledby="all-tab"
                                    >
                                        <div className="posts ">
                                            {posts !== null &&
                                                isLoading ? (
                                                    <div
                                                        className="text-center"
                                                        style={{ marginTop: "5%" }}
                                                    >
                                                        <div
                                                            className="spinner-border"
                                                            role="status"
                                                            style={{
                                                                color: "#D00000"
                                                            }}
                                                        >
                                                            <span className="sr-only">
                                                                Loading...
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : posts.length == 0
                                                    ? (
                                                        <></>
                                                    ) : (
                                                        posts.map((post, index) => (
                                                            <Post
                                                                userName={post.username}
                                                                key={index}
                                                                pid={post.id}
                                                                userPhoto={require("../../static/assets/img/user/user.jpg")}
                                                                text={post.content.text}
                                                                name={post.username}
                                                                time={
                                                                    moment(
                                                                        post.post_date
                                                                    ).format(
                                                                        "MMMM Do YYYY"
                                                                    ) /* + " " + post.post_date + post.post_time */
                                                                }
                                                            />
                                                        ))
                                                    )}
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="photos"
                                        role="tabpanel"
                                        aria-labelledby="photos-tab"
                                    >
                                        <div className="posts ">
                                            {posts === [] ? (
                                                <div
                                                    className="text-center"
                                                    style={{ marginTop: "5%" }}
                                                >
                                                    <div
                                                        className="spinner-border"
                                                        role="status"
                                                        style={{
                                                            color: "#D00000"
                                                        }}
                                                    >
                                                        <span className="sr-only">
                                                            Loading...
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : posts.length == 0 ? (
                                                <>
                                                    {/* <h2>There are no posts</h2> */}
                                                </>
                                            ) : (
                                                        posts.map((post, index) =>
                                                            post.has_photo === true ? (
                                                                <Post
                                                                    userName={
                                                                        post.username
                                                                    }
                                                                    key={index}
                                                                    pid={post.id}
                                                                    userPhoto={require("../../static/assets/img/user/user.jpg")}
                                                                    text={
                                                                        post.content
                                                                            .text
                                                                    }
                                                                    name={post.username}
                                                                    time={
                                                                        moment(
                                                                            post.post_date
                                                                        ).format(
                                                                            "MMMM Do YYYY"
                                                                        ) /* + " " + post.post_date + post.post_time */
                                                                    }
                                                                />
                                                            ) : (
                                                                    ""
                                                                )
                                                        )
                                                    )}
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="videos"
                                        role="tabpanel"
                                        aria-labelledby="videos-tab"
                                    >
                                        <div className="posts ">
                                            {posts === [] ? (
                                                <div
                                                    className="text-center"
                                                    style={{ marginTop: "5%" }}
                                                >
                                                    <div
                                                        className="spinner-border"
                                                        role="status"
                                                        style={{
                                                            color: "#D00000"
                                                        }}
                                                    >
                                                        <span className="sr-only">
                                                            Loading...
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : posts.length == 0 ? (
                                                <>
                                                    {/* <h2>There are no posts</h2> */}
                                                </>
                                            ) : (
                                                        posts.map((post, index) =>
                                                            post.has_video === true ? (
                                                                <Post
                                                                    userName={
                                                                        post.username
                                                                    }
                                                                    key={index}
                                                                    pid={post.id}
                                                                    userPhoto={require("../../static/assets/img/user/user.jpg")}
                                                                    text={
                                                                        post.content
                                                                            .text
                                                                    }
                                                                    name={post.username}
                                                                    time={
                                                                        moment(
                                                                            post.post_date
                                                                        ).format(
                                                                            "MMMM Do YYYY"
                                                                        ) /* + " " + post.post_date + post.post_time */
                                                                    }
                                                                />
                                                            ) : (
                                                                    ""
                                                                )
                                                        )
                                                    )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SideTab />
                    </div>
                </div>
            </div>

            <style>{`
            `}</style>
        </>
    );
};

export default Feed;
