import React, { useState, useEffect, useLayoutEffect } from "react";

interface Params {
    parentCallback: Function;
}

const UserPost: React.FC<Params> = ({ parentCallback }) => {
    const [userPhoto, setuserPhoto] = useState(
        require("../../static/assets/img/user/user.jpg")
    );

    const [messageText, setMessageText] = useState("");
    const [sendMessageActive, setSendMessageActive] = useState(false);

    useLayoutEffect(() => {
        if (messageText != "") {
            setSendMessageActive(true);
        } else {
            setSendMessageActive(false);
        }
        // console.log(community_id[0])
    }, [messageText]);

    const onChangeText = e => {
        setMessageText(e.target.value);
    };

    const currentTime = () => {
        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes();

        return h + ":" + m;
    };

    const sendMessage = () => {
        parentCallback(messageText, new Date().getHours() + ':' + new Date().getMinutes());
        setMessageText('')
    };

    return (
        <>
            <div className="user-post vertical-align px-3 py-2 d-flex flex-row">
                <img
                    className="rounded-circle profileImg mr-3"
                    src={userPhoto}
                    alt=""
                />
                <input
                    type="text"
                    placeholder="Write a message..."
                    value={messageText}
                    onChange={onChangeText}
                ></input>
                <div className="ml-auto">
                    <button className="pr-2" onClick={sendMessage}>
                        <i
                            className={`fas fa-paper-plane ${
                                sendMessageActive ? "color-red" : "color-grey"
                            }`}
                        />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .user-post {
                    background: #fff;
                    position: fixed;
                    width: 60%;
                    bottom: 10%;
                }

                .user-post input {
                    font-size: 0.8rem;
                    color: #000;
                    width: 100%;
                    padding: 1.5rem 0rem;
                }

                .user-post .profileImg {
                    width: 48px;
                    height: 48px;
                }

                .user-post i {
                    font-size: 1.3em;
                    color: rgb(129, 129, 129);
                }

                .user-post .types i {
                    font-size: 1.3em;
                    color: #d10000;
                    opacity: 0.6;
                }

                .user-post .imagePreview {
                    height: auto;
                    border-radius: 10px;
                }

                .user-post .videoPreview {
                    height: auto;
                    border-radius: 10px;
                }

                .user-post input[type="file"] {
                    display: none;
                }

                .user-post .border {
                    height: 30px;
                    border: 1px solid #ebebeb;
                }

                .user-post ::-webkit-input-placeholder {
                    color: #5f5f5f !important;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 500;
                    font-size: 0.8rem;
                }

                .user-post ::-moz-placeholder {
                    color: #5f5f5f !important;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 500;
                    font-size: 0.8rem;
                }

                .user-post :-ms-input-placeholder {
                    color: #5f5f5f !important;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 500;
                    font-size: 0.8rem;
                }
            `}</style>
        </>
    );
};

export default UserPost;
