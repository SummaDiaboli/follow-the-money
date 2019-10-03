import React, { useState, createRef } from 'react'

const Post = ({ userImage, username, timeCreated, postText, postImage, likes, comments, shares }) => {
    const [isVisible, setIsVisible] = useState(false)

    const reference = createRef()

    const showPostPopup = () => {
        // let popup = el.parentElement.querySelector("#post-popup");
        // let popup = document.getElementById("post-popup")
        let popup = reference.current
        // console.log(reference.current)

        if (isVisible) {
            popup.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1,
                easing: 'linear',
                fill: 'forwards'
            });

            setTimeout(function () {
                popup.style.opacity = 0;
            }, 200);

            setIsVisible(false)
        } else {
            popup.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1,
                easing: 'linear',
                fill: 'forwards'
            });

            setTimeout(function () {
                popup.style.opacity = 1;
            }, 200);
            setIsVisible(true)
        }
    }



    return (
        <>
            <div className="card p-3 post w-100">
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
                        <button onClick={showPostPopup} className="ml-auto d-flex" id="post-popup-toggler">
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
                                style={{ padding: 0, marginLeft: "left", color: "black" }}
                            >
                                View More
                            </button>
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

            <style jsx>{`
                .card{
                    margin-top: 1.5rem;
                }
            `}
            </style>
        </>
    )
}

export default Post
