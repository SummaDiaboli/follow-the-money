import React, { useState, createRef, useMemo } from "react";
import Link from "next/link";

interface Params {
    userImage: string,
    userName: string,
    name: string,
    timeCreated: Date,
    postText?: JSON,
    postImage?: string,
    postVideo?: string,
    likes?: number,
    comments?: number,
    shares?: number,
    pid: number
}

const CommentPost: React.FC<Params> = ({
    userImage,
    userName,
    name,
    timeCreated,
    postText,
    postImage,
    postVideo,
    likes,
    comments,
    shares,
    pid
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [userPhoto, setuserPhoto] = useState('')

    const reference = createRef();

    const showPostPopup = () => {
        // let popup = el.parentElement.querySelector("#post-popup");
        // let popup = document.getElementById("post-popup")
        let popup: any = reference.current;
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

            setIsVisible(false);
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
            setIsVisible(true);
        }
    };

    useMemo(() => fetch(`/api/change_photo/${userName}`)
        .then(res => {
            res.status === 201 && res.json().then(data => {
                // console.log(data[0].photo)
                setuserPhoto(data[0].photo)
            })
        }), [userPhoto])

    return (
        <>
            {/* <Link href="/post/[pid]" as={`/post/${pid}`}> */}
            {/* <a href=""> */}
            <div className="post pt-3 w-100">
                <div className="w-100 d-flex flex-column">
                    <div className="user d-flex vertical-align flex-row">
                        <img
                            src={
                                userPhoto !== null
                                    ? userPhoto
                                    : "../../static/assets/img/user/user.jpg"
                            }
                            className="rounded-circle mr-3"
                            alt=""
                        />
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row w-100">
                                <Link
                                    href="/users/[id]"
                                    as={`/users/${userName}`}
                                >
                                    <a className="username">
                                        <h5>{name}</h5>
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
                                style={{ visibility: { isVisible } }}
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
                        {postImage && <img className="w-100 mt-2" src={postImage} alt="" />}
                        {postVideo && (
                            <video
                                className="w-100 mt-2"
                                src={postVideo}
                                autoPlay
                                controls
                            ></video>
                        )}
                        {/* <div className="d-flex flex-row actions mt-3">
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align">
                                    <i className="far fa-heart"></i>
                                    <span className="ml-1">
                                        {likes}
                                    </span>
                                </div>
                            </button>
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align ml-3">
                                    <i className="far fa-comment"></i>
                                    <span className="ml-1">
                                        {comments}
                                    </span>
                                </div>
                            </button>
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align ml-3">
                                    <i className="fas fa-retweet"></i>
                                    <span className="ml-1">
                                        {shares}
                                    </span>
                                </div>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* </a> */}
            {/* </Link> */}

            <style jsx>{`
                .post:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.3);
                }

                .post {
                    position: relative;
                }
            `}</style>
        </>
    );
};

export default CommentPost;
