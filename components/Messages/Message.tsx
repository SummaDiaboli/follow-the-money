import React, { useState, useEffect } from "react";

interface Params {
    message: string;
}

const Message: React.FC<Params> = ({ message }) => {
    const [userPhoto, setuserPhoto] = useState(
        require("../../static/assets/img/user/user.jpg")
    );

    return (
        <>
            <div className="message-container left w-100 d-flex flex-row">
                {/* <img
                    className="user"
                    src="../../static/assets/img/user/hamzat.jpg"
                ></img> */}
                <div className="message">
                    <span className="">{message}</span>
                    <img
                        className="triangle"
                        src="../../static/assets/img/triangle.png"
                    ></img>
                    <span className="timestamp">19: 06</span>
                </div>
            </div>
            <div className="message-container right w-100 d-flex flex-row">
                <div className="message">
                    <span className="">{message}</span>
                    <img
                        className="triangle"
                        src="../../static/assets/img/triangle.png"
                    ></img>
                    <span className="timestamp">19: 06</span>
                </div>
            </div>
            <div className="message-container right w-100 d-flex flex-row">
                <div className="message">
                    <span className="">{message}</span>
                    <img
                        className="triangle"
                        src="../../static/assets/img/triangle.png"
                    ></img>
                    <span className="timestamp">19: 06</span>
                </div>
            </div>
            <div className="message-container right w-100 d-flex flex-row">
                <div className="message">
                    <span className="">{message}</span>
                    <img
                        className="triangle"
                        src="../../static/assets/img/triangle.png"
                    ></img>
                    <span className="timestamp">19: 06</span>
                </div>
            </div>

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
                }
                
                .message-container.left .timestamp{
                    position: absolute;
                    bottom: -25px;
                    right: 5px;
                    font-family: 'Segoe UI', sans-serif;
                    font-weight: 400;
                }

                .message-container.right .timestamp{
                    position: absolute;
                    bottom: -25px;
                    left: 5px;
                    font-family: 'Segoe UI', sans-serif;
                    font-weight: 400;
                }

                .message-container.left .triangle{
                    position: absolute;
                    left: 15px;
                    bottom: -10px;
                    height: 15px;
                }
                
                .message-container.right .triangle{
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
            `}</style>
        </>
    );
};

export default Message;
