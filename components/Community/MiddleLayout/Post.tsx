import React, { useState, createRef, useMemo } from "react";
import Link from "next/link";
import fetch from 'isomorphic-unfetch'

interface Params {
    // userImage: string;
    username: string;
    timeCreated: Date | string;
    postText?: string;
    postImage?: string;
    postVideo?: string;
    likes?: number | string;
    comments?: number | string;
    shares?: number | string;
    pid: number | string;
}

const Post: React.FC<Params> = ({
    // userImage,
    username,
    timeCreated,
    postText,
    postImage,
    postVideo,
    likes,
    comments,
    shares,
    pid
}) => {
    const [isVisible, setIsVisible]: any = useState("hidden");
    const [photo, setPhoto] = useState('')
    const reference: any = createRef();

    const showPostPopup = () => {
        // let popup = el.parentElement.querySelector("#post-popup");
        // let popup = document.getElementById("post-popup")
        let popup = reference.current;
        // console.log(reference.current)

        if (isVisible) {
            popup.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                iterations: 1,
                easing: "linear",
                fill: "forwards"
            });

            setTimeout(function () {
                popup.style.opacity = 0;
            }, 200);

            setIsVisible("hidden");
        } else {
            popup.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                iterations: 1,
                easing: "linear",
                fill: "forwards"
            });

            setTimeout(function () {
                popup.style.opacity = 1;
            }, 200);
            setIsVisible("visible");
        }
    };

    useMemo(() => fetch(`/api/change_photo/${username}`)
        .then(res => {
            res.status === 201 && res.json().then(data => {
                // console.log(data[0].photo)
                setPhoto(data[0].photo)
            })
        }), [photo])

    return (
        <>
            <Link href="/post/[pid]" as={`/post/${pid}`}>
                <a>
                    <div className="card p-3 post w-100">
                        <div className="w-100 d-flex flex-column">
                            <div className="user d-flex vertical-align mb-2 flex-row">
                                <img
                                    src={photo !== null ? photo : "../../static/assets/img/user/user.jpg"}
                                    className="rounded-circle mr-3"
                                    alt=""
                                />
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row w-100">
                                        <Link
                                            href="/users/[id]"
                                            as={`/users/${username}`}
                                        >
                                            <a className="username">
                                                <h5>{username}</h5>
                                            </a>
                                        </Link>
                                        <i className="far ml-1 fa-check-circle color-red fa-sm"></i>
                                    </div>
                                    <span>{timeCreated}</span>
                                </div>
                                {/* <button
                                onClick={showPostPopup}
                                className="ml-auto d-flex"
                                id="post-popup-toggler"
                            >
                                <i className="fas fa-ellipsis-h color-grey"></i>
                            </button>
                            <div
                                ref={reference}
                                className="card p-3 post-popup"
                                id="post-popup"
                                style={{ visibility: isVisible }}
                            >
                                <button
                                    className=""
                                    style={{
                                        padding: 0,
                                        marginLeft: "left",
                                        color: "black"
                                    }}
                                >
                                    View More
                                </button>
                            </div> */}
                            </div>
                            <div className="content">
                                <p className="mt-4">{postText}</p>
                                {postImage && (
                                    <img
                                        className="w-100 mt-2"
                                        src={postImage}
                                        alt=""
                                    />
                                )}
                                {postVideo && (
                                    <video
                                        className="w-100 mt-2"
                                        src={postVideo}
                                        autoPlay
                                        controls
                                    ></video>
                                )}

                                {/* <div className="d-flex flex-row actions mt-3">
                                        <a href="#">
                                            <div className="d-flex flex-row vertical-align">
                                                <i className="far fa-heart"></i>
                                                <span className="ml-1">
                                                    {likes}
                                                </span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="d-flex flex-row vertical-align ml-3">
                                                <i className="far fa-comment"></i>
                                                <span className="ml-1">
                                                    {comments}
                                                </span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="d-flex flex-row vertical-align ml-3">
                                                <i className="fas fa-retweet"></i>
                                                <span className="ml-1">
                                                    {shares}
                                                </span>
                                            </div>
                                        </a>
                                    </div> */}

                            </div>
                        </div>
                    </div>
                </a>
            </Link>

            <style jsx>
                {`
                    .card {
                        margin-top: 1.5rem;
                    }

                    a {
                        color: #000;
                    }

                    .username:hover {
                        text-decoration: underline;
                    }

                    .content a {
                        color: #7b7b7c;
                    }
                `}
            </style>
        </>
    );
};

export default Post;
