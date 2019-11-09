import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Cookies from "js-cookie";

interface Params {
    convo: Array<any>;
}

const Message: React.FC<Params> = ({ convo }) => {
    const user = Cookies.getJSON("userData");
    const Username = user.username;
    // const [userPhoto, setuserPhoto] = useState(
    //     require("../../static/assets/img/user/user.jpg")
    // );
    const [conversation, setConversation] = useState(convo);

    useEffect(() => {
        setConversation(convo);
        // console.log(conversation)
    }, [convo]);

    const convertTimestamp = (time) => {
        let str = time.replace(/[^a-zA-Z0-9]/g, "")
        str = str/1000
        return moment.unix(str).format('LT')
    }

    return (
        <>
            {conversation.length < 1 ? (
                <div className="w-100 h-100 d-flex vertical-align no-messages">
                    <span className="font-montserrat color-grey font-medium ">
                        You haven't sent any messages to this user
                    </span>
                </div>
            ) : (
                conversation.map(message =>
                    message.sender === Username ? (
                        <div className="message-container right w-100 d-flex flex-row">
                            <div className="message">
                                <span className="">{message.message}</span>
                                <img
                                    className="triangle"
                                    src="../../static/assets/img/triangle.png"
                                ></img>
                                <span className="timestamp">
                                    {(message.time)}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="message-container left w-100 d-flex flex-row">
                            <div className="message">
                                <span className="">{message.message}</span>
                                <img
                                    className="triangle"
                                    src="../../static/assets/img/triangle.png"
                                ></img>
                                <span className="timestamp">
                                    {(message.time)}
                                </span>
                            </div>
                        </div>
                    )
                )
            )}

            <style jsx>{`
                .message-container .user {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    position: relative;
                    top: 5px;
                }

                .message {
                    width: 40%;
                    background: #fff;
                    border-radius: 10px;
                    position: relative;
                    padding: 1rem;
                    font-size: 0.8rem;
                    font-family: "Montserrat", sans-serif;
                    color: #000;
                    font-weight: 500;
                    word-break: break-word;
                }

                .message-container.left .timestamp {
                    position: absolute;
                    bottom: -25px;
                    right: 5px;
                    font-family: "Segoe UI", sans-serif;
                    font-weight: 400;
                }

                .message-container.right .timestamp {
                    position: absolute;
                    bottom: -25px;
                    left: 5px;
                    font-family: "Segoe UI", sans-serif;
                    font-weight: 400;
                }

                .message-container.left .triangle {
                    position: absolute;
                    left: 15px;
                    bottom: -10px;
                    height: 15px;
                }

                .message-container.right .triangle {
                    position: absolute;
                    bottom: -10px;
                    height: 15px;
                    right: 15px;
                }

                .message-container.right .message {
                    margin-left: auto;
                }

                .message-container {
                    margin: 1.3rem 0rem;
                }

                .no-messages {
                    justify-content: center;
                }

                .no-messages span {
                    color: #9c9c9c;
                    position: relative;
                    top: -50px;
                }
            `}</style>
        </>
    );
};

export default Message;
