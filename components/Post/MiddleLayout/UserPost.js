import React /* { useState, createRef } */ from 'react'
import Link from 'next/link'

const UserPost = ({ userImage, userName, name, timeCreated, postText, postImage, likes, comments, shares }) => {
    /*  const [isVisible, setIsVisible] = useState(false)

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
     } */

    return (
        <>
            <div className="post w-100 mt-3">
                <div className="w-100 d-flex flex-column">
                    <div className="user d-flex vertical-align flex-row">
                        <img src={userImage} className="rounded-circle mr-3" alt="" />
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row w-100">
                                <Link href="/users/[id]" as={`/users/${userName}`}>
                                    <a className="username" href="">
                                        <h5>{userName}</h5>
                                    </a>
                                </Link>
                                <i className="far ml-1 fa-check-circle color-red fa-sm"></i>
                            </div>
                            <span>{timeCreated}</span>
                        </div>
                        {/* <button onClick={showPostPopup} className="ml-auto d-flex" id="post-popup-toggler">
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
                    </div> */}
                    </div>
                    <div className="content">
                        <p className="mt-4">{postText}</p>
                        {
                            postImage && <img src={postImage} className="mt-2" alt="" />
                        }
                        <div className="d-flex flex-row actions mt-3">
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align">
                                    <i className="far fa-heart"></i>
                                    <span className="ml-1">{likes}</span>
                                    <span className="pl-1">Likes</span>
                                </div>
                            </button>
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align ml-4">
                                    <i className="fas fa-retweet"></i>
                                    <span className="ml-1">{shares}</span>
                                    <span className="pl-1">Shares</span>
                                </div>
                            </button>
                            <button className="m-0">
                                <div className="d-flex flex-row vertical-align ml-4">
                                    <span className="ml-1">{comments}</span>
                                    <span className="pl-1">Comments</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .post .content img {
                height: auto;
                width: 100%;
            }
        `}</style>
        </>
    )
}

export default UserPost
