import React, { useState, useLayoutEffect } from "react";
import fetch from "isomorphic-unfetch";
import Cookies from "js-cookie";
import { Picker } from "emoji-mart";

interface Params {
    userImage: string;
    userFname: string;
    community_name: string;
}

const UserPost: React.FC<Params> = ({
    userImage,
    userFname,
    community_name
}) => {
    const user = Cookies.getJSON("userData");
    const username = user.username;
    const [userPhoto, setuserPhoto] = useState(
        require("../../static/assets/img/user/user.jpg")
    );

    const [postText, setPostText] = useState("");
    const [hasPhoto, setHasPhoto] = useState(false);
    const [hasAudio, setHasAudio] = useState(false);
    const [hasVideo, setHasVideo] = useState(false);
    const [hasEmbeddedUsernames, setHasEmbeddedUsernames] = useState(false);
    const [postTitle, setPostTitle] = useState("test");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [video, setVideo] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [emojiPickerOpen, setemojiPickerOpen] = useState(false);

    const [sendPostActive, setSendPostActive] = useState(false);

    useLayoutEffect(() => {
        if (postText != "") {
            setSendPostActive(true);
        } else {
            setSendPostActive(false);
        }
        // console.log(community_id[0])
    }, [postText]);

    const onChangeText = e => {
        setPostText(e.target.value);
    };

    const selectImage = () => {
        const imageFile = document.getElementById("image");
        imageFile.click();
    };

    const handleImageChange = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        setVideo(null);
        console.log(video);

        reader.onloadend = () => {
            setImage(file);
            setImagePreview(reader.result);
        };
    };

    const selectVideo = () => {
        const imageFile = document.getElementById("video");
        imageFile.click();
    };

    const handleVideoChange = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        setImage(null);
        console.log(image);

        reader.onloadend = () => {
            setVideo(file);
            setVideoPreview(reader.result);
        };
    };

    const triggerPicker = () => {
        setemojiPickerOpen(!emojiPickerOpen);
    };

    const addEmoji = emoji => {
        setPostText(postText + emoji.native);
    };

    const submitPost = () => {
        let communitiesList = JSON.parse(sessionStorage.getItem("communities"));
        communitiesList.map(community => {
            if (community.name === community_name) {
                if (postText != "") {
                    fetch("/api/posts", {
                        method: "POST",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: postTitle,
                            username: username,
                            has_photo: hasPhoto,
                            has_audio: hasAudio,
                            has_video: hasVideo,
                            type: "communities",
                            has_embedded_usernames: hasEmbeddedUsernames,
                            content: {
                                text: postText
                            }
                        })
                    })
                        .then(res => {
                            if (res.status === 201) {
                                /**
                                 * Post created successfully
                                 */
                                res.json().then(result => {
                                    addToCommunityPostTable(
                                        result.id,
                                        community.id
                                    );
                                });
                            } else {
                                /**
                                 * Post could not be created
                                 */
                            }
                            setPostText("");
                        })
                        .catch(error => {
                            console.log("Error occurred", error);
                        });
                }
            }
        });
    };

    const addToCommunityPostTable = (post_id, community_id) => {
        fetch("/api/community", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                post_id,
                community_id
            })
        }).then(res => {
            res.status === 201
                ? console.log("Created")
                : console.log("Not created");
        });
    };

    return (
        <>
            <div>
                <div className="card vertical-align user-post w-100 d-flex flex-column p-3">
                    <div className="w-100 d-flex flex-row">
                        <img
                            className="rounded-circle mr-3"
                            src={userPhoto}
                            alt=""
                        />
                        <div className="w-100 d-flex flex-column">
                            <div className="d-flex w-100 py-2 flex-row mr-auto">
                                <input
                                    type="text"
                                    className="w-75"
                                    placeholder="Post something to this community"
                                    value={postText}
                                    onChange={onChangeText}
                                />
                                <div className="ml-auto">
                                    <button onClick={submitPost}>
                                        <i
                                            className={`fas fa-paper-plane ${
                                                sendPostActive
                                                    ? "color-red"
                                                    : "color-grey"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="result py-2 px-4">
                                {image === null ? (
                                    ""
                                ) : (
                                    <img
                                        className="w-100 imagePreview"
                                        src={imagePreview}
                                    ></img>
                                )}

                                {video === null ? (
                                    ""
                                ) : (
                                    <video
                                        className="w-100 videoPreview"
                                        src={videoPreview}
                                        autoPlay
                                        controls
                                    ></video>
                                )}
                            </div>
                            <div
                                className="h-100 vertical-align types mr-auto mt-3 d-flex flex-row"
                                style={{
                                    position: "relative"
                                }}
                            >
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={e => handleImageChange(e)}
                                ></input>
                                <input
                                    type="file"
                                    id="video"
                                    accept="video/*"
                                    onChange={e => handleVideoChange(e)}
                                ></input>
                                <input type="file" id="emoji"></input>
                                <button>
                                    <i
                                        className={`far fa-image ${
                                            image === null ? "" : "opaque"
                                        }`}
                                        onClick={selectImage}
                                    ></i>
                                </button>
                                <button>
                                    <i
                                        className={`fas fa-video ml-4 ${
                                            video === null ? "" : "opaque"
                                        }`}
                                        onClick={selectVideo}
                                    ></i>
                                </button>
                                <button>
                                    <i
                                        className={`far fa-smile ml-4 ${
                                            emojiPickerOpen ? "opaque" : ""
                                        }`}
                                        onClick={triggerPicker}
                                    ></i>
                                </button>
                                <Picker
                                    style={{
                                        position: "absolute",
                                        top: "2rem",
                                        left: "0rem",
                                        zIndex: 2,
                                        display: emojiPickerOpen
                                            ? "inline-block"
                                            : "none"
                                    }}
                                    onSelect={emoji => {
                                        addEmoji(emoji);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                i.opaque {
                    opacity: 1;
                }
            `}</style>
        </>
    );
};

export default UserPost;
