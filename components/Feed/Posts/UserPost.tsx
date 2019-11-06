import React, { useState, useLayoutEffect } from "react";
import fetch from "isomorphic-unfetch";
import Cookies from "js-cookie";
import { Picker } from "emoji-mart";
import { loadFB } from '../../../utils/firebase'
// import './UserPost.css'

const UserPost = () => {
    const user = Cookies.getJSON("userData");
    const username = user.username;

    const [userPhoto, setuserPhoto] = useState(
        require("../../../static/assets/img/user/user.jpg")
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
        if (postText !== "" && ((image !== null || video !== null) || (image === null || video === null))) {
            setSendPostActive(true);
        } else {
            setSendPostActive(false);
        }
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
        // console.log(file.name);

        reader.onloadend = () => {
            setImage(file)
            setHasPhoto(true)
            setHasVideo(false)
            setImagePreview(reader.result)
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
        // console.log(file);

        reader.onloadend = () => {
            setVideo(file)
            setHasVideo(true)
            setHasPhoto(false)
            setVideoPreview(reader.result)
        };
    };

    const triggerPicker = () => {
        setemojiPickerOpen(!emojiPickerOpen);
    };

    const addEmoji = (emoji) => {
        setPostText(postText + emoji.native);
    }

    const submitPost = () => {
        if (((image !== null && hasPhoto !== false) || (video !== null && hasVideo !== false)) && postText !== "") {
            const firebase = loadFB()
            const storageRef = firebase.storage().ref()
            const fileName = hasPhoto === true ? image.name : video.name
            const storageLocation = hasPhoto === true
                ? storageRef.child(`photos/${username}${fileName}`)
                : storageRef.child(`videos/${username}${fileName}`)
            storageLocation.put(hasPhoto === true ? image : video)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL()
                        .then(url => {
                            console.log(hasPhoto)
                            console.log(hasVideo)
                            fetch("api/posts", {
                                method: "post",
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
                                    type: "user_post",
                                    has_embedded_usernames: hasEmbeddedUsernames,
                                    content: {
                                        text: postText,
                                        image: hasPhoto === true ? url : null,
                                        video: hasVideo === true ? url : null
                                    }
                                })
                            }).then(res => {
                                if (res.status === 201) {
                                    console.log("is working")
                                    setPostText("")
                                    setImage(null)
                                    setVideo(null)
                                    setHasPhoto(false)
                                    setHasVideo(false)
                                }
                            })
                        })
                })
            // // console.log(imageName)
        }

        if (postText !== "" && hasPhoto === false && hasVideo === false) {
            fetch("api/posts", {
                method: "post",
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
                    type: "user_post",
                    has_embedded_usernames: hasEmbeddedUsernames,
                    content: {
                        text: postText,
                        image: null,
                        video: null
                    }
                })
            })
                .then(res => {
                    res.status === 201
                        ? "Post created successfully"
                        : "Post could not be created";
                    setPostText("");
                })
                .catch(error => {
                    console.log("Error occurred", error);
                });
        }
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
                                    className="w-100"
                                    placeholder="What's on your mind?"
                                    value={postText}
                                    onChange={onChangeText}
                                />
                                <div className="ml-auto">
                                    <button onClick={submitPost} className="pl-2">
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
                                        className={`far fa-smile ml-4 ${emojiPickerOpen ? 'opaque' : ''}`}
                                        onClick={triggerPicker}
                                    ></i>
                                </button>
                                <Picker
                                    style={{
                                        position: "absolute",
                                        top: "2rem",
                                        left: "0rem",
                                        zIndex: 2,
                                        display: emojiPickerOpen ? 'inline-block' : 'none'
                                    }}

                                    onSelect={(emoji) => {
                                        addEmoji(emoji)
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
