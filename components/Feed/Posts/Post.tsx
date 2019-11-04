import React from "react";
import UserComment from "./UserComment";
import Link from "next/link";

interface Params {
    userPhoto: string;
    pid: number;
    userName: string;
    name: string;
    time: Date;
    text?: string;
    image?: string;
    video?: string;
    likes?: number;
    comments?: number;
    shares?: number;
}

const Post: React.FC<Params> = ({
    userPhoto,
    pid,
    userName,
    name,
    time,
    text,
    image,
    video,
    likes,
    comments,
    shares
}) => {
    return (
        <Link href="/post/[pid]" as={`/post/${pid}`}>
            <a>
                <div className="card p-3 mt-3 post w-100">
                    <div className="w-100 d-flex flex-column">
                        <div className="user d-flex flex-row mb-2">
                            <img
                                src={userPhoto}
                                className="rounded-circle mr-3"
                                alt=""
                            />

                            <div className="d-flex flex-column">
                                <div
                                    className="d-flex flex-row"
                                    style={{
                                        alignContent: "start",
                                        justifyContent: "start"
                                    }}
                                >
                                    <Link
                                        href="/users/[id]"
                                        as={`/users/${userName}`}
                                    >
                                        <a className="username">
                                            <h5 className="small font-medium m-0">
                                                {name}
                                            </h5>
                                        </a>
                                    </Link>

                                    <i className="far ml-1 fa-check-circle color-red fa-sm"></i>
                                </div>

                                <span>{time}</span>
                            </div>
                        </div>
                        <div className="content">
                            {text && <p className="mt-3">{text}</p>}

                            {image && (
                                <img
                                    className="w-100 mt-2"
                                    src={image}
                                    alt=""
                                />
                            )}

                            {video && (
                                <video
                                    className="w-100 mt-2"
                                    src={video}
                                    autoPlay
                                    controls
                                ></video>
                            )}

                            <div className="d-flex flex-row actions mt-3">
                                <button className="m-0">
                                    <div className="d-flex flex-row vertical-align">
                                        <i className="far fa-heart"></i>
                                        <span className="ml-1">{likes}</span>
                                    </div>
                                </button>
                                <button className="m-0">
                                    <div className="d-flex flex-row vertical-align ml-3">
                                        <i className="far fa-comment"></i>
                                        <span className="ml-1">{comments}</span>
                                    </div>
                                </button>
                                <button className="m-0">
                                    <div className="d-flex flex-row vertical-align ml-3">
                                        <i className="fas fa-retweet"></i>
                                        <span className="ml-1">{shares}</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* <UserComment /> */}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Post;
