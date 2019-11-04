import React, { useEffect, useState } from "react";
import { NotificationIcon } from "../User";
import MessageTile from "./MessageTile";
import MessageDisplay from "./MessageDisplay";

require("../../static/assets/css/pages/Messages.css");

type Message = ({
    userPhoto: string;
    name: string;
    userName: string;
    message: string;
    timeSent: string;
    unreadCount?: string;
})[];

const Messages = () => {
    const permanentMessages: Message = [
        {
            userPhoto: "static/assets/img/user/nasir.jpg",
            name: "Nasir Bukar Ibrahim",
            userName: "nasir",
            message:
                "Doyin, are you here? Our partners from CODE are waiting for your presentation on the quantum spectrumetron in the space time of a quantum tunnel",
            timeSent: "19:21",
            unreadCount: "8"
        },
        {
            userPhoto: "static/assets/img/user/nwabuisi.jpg",
            name: "Nwabuisi Gospel",
            userName: "nwabuisi",
            message: "Hey! What you think bout our presentation?",
            timeSent: "08:11"
        }
    ];

    const [messages, setMessages]: any = useState(permanentMessages);

    useEffect(() => {
        const truncate = id => {
            let string = document.getElementById(id).innerHTML;
            var maxLength = 80;
            var result = string.substring(0, maxLength) + "...";
            document.getElementById(id).innerHTML = result;
        };
        truncate("truncate-text");
    });

    return (
        <main>
            <div className="main" style={{ overflow: "hidden" }}>
                <nav>
                    <ul className="d-flex vertical-align">
                        <NotificationIcon />
                    </ul>
                    <hr className="w-100" />
                </nav>
                <div className="container-fluid p-0 content">
                    <div className="row px-0 py-1 m-0 w-100 h-100">
                        <div className="col-8">
                            <div
                                className="middle-layout vertical-align" /* style={{ height: "50%" }} */
                            >
                                <div className="tab-content" id="tabContent">
                                    {messages.map((message, index) =>
                                        index == 0 ? (
                                            <MessageDisplay
                                                key={index}
                                                message={message.message}
                                                username={message.userName}
                                                active={true}
                                            />
                                        ) : (
                                            <MessageDisplay
                                                key={index}
                                                message={message.message}
                                                username={message.userName}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-4 pr-0" style={{ height: "100%" }}>
                            <div className="card sideTab p-3">
                                <div className="d-flex w-100 search pb-3 px-1 flex-row vertical-align">
                                    <i className="fas fa-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search in all messages"
                                        className="ml-3 w-100"
                                    />
                                </div>

                                <ul
                                    className="nav nav-pills mb-3 py-1"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="pills-all-tab"
                                            data-toggle="pill"
                                            href="#pills-all"
                                            role="tab"
                                            aria-controls="pills-all"
                                            aria-selected="true"
                                        >
                                            All
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="pills-unread-tab"
                                            data-toggle="pill"
                                            href="#pills-unread"
                                            role="tab"
                                            aria-controls="pills-unread"
                                            aria-selected="false"
                                        >
                                            Unread
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="pills-important-tab"
                                            data-toggle="pill"
                                            href="#pills-important"
                                            role="tab"
                                            aria-controls="pills-important"
                                            aria-selected="false"
                                        >
                                            Important
                                        </a>
                                    </li>
                                </ul>

                                <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-all"
                                        role="tabpanel"
                                        aria-labelledby="pills-all-tab"
                                    >
                                        <ul
                                            className="p-0 nav nav-tabs"
                                            id="tab"
                                            role="tablist"
                                        >
                                            {messages.map((message, index) =>
                                                index == 0 ? (
                                                    <MessageTile
                                                        key={index}
                                                        userPhoto={
                                                            message.userPhoto
                                                        }
                                                        name={message.name}
                                                        userName={
                                                            message.userName
                                                        }
                                                        message={
                                                            message.message
                                                        }
                                                        timeSent={
                                                            message.timeSent
                                                        }
                                                        unreadCount={
                                                            message.unreadCount
                                                        }
                                                        active={true}
                                                    />
                                                ) : (
                                                    <MessageTile
                                                        key={index}
                                                        userPhoto={
                                                            message.userPhoto
                                                        }
                                                        name={message.name}
                                                        userName={
                                                            message.userName
                                                        }
                                                        message={
                                                            message.message
                                                        }
                                                        timeSent={
                                                            message.timeSent
                                                        }
                                                        unreadCount={
                                                            message.unreadCount
                                                        }
                                                    />
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div
                                        className="tab-pane fade"
                                        id="pills-unread"
                                        role="tabpanel"
                                        aria-labelledby="pills-unread-tab"
                                    >
                                        <ul className="p-0">
                                            {messages.map((message, index) =>
                                                message.unreadCount ? (
                                                    <MessageTile
                                                        key={index}
                                                        userPhoto={
                                                            message.userPhoto
                                                        }
                                                        name={message.name}
                                                        userName={
                                                            message.userName
                                                        }
                                                        message={
                                                            message.message
                                                        }
                                                        timeSent={
                                                            message.timeSent
                                                        }
                                                        unreadCount={
                                                            message.unreadCount
                                                        }
                                                    />
                                                ) : (
                                                    ""
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div
                                        className="tab-pane fade"
                                        id="pills-important"
                                        role="tabpanel"
                                        aria-labelledby="pills-important-tab"
                                    >
                                        <h6 className="color-grey">
                                            No important messages here.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                body {
                    font-family: "Montserrat", sans-serif;
                    background: #fff;
                    color: #000;
                    overflow-y: hidden;
                }

                a {
                    text-decoration: none !important;
                }

                .font-segoe {
                    font-family: "Segoe UI", sans-serif;
                }

                .bg-red {
                    background: #d10000;
                }

                .color-red {
                    color: #d10000 !important;
                }

                .color-black {
                    color: #000 !important;
                }

                .color-grey {
                    color: #454545;
                }

                .smaller {
                    font-size: 70%;
                }

                .pos-relative {
                    position: relative;
                }

                .pos-absolute {
                    position: absolute;
                }

                .vertical-align {
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                }

                .main {
                    background: #fff;
                    padding: 1rem;
                }

                .vertical-align {
                    display: flex;
                    flex-flow: column;
                    justify-content: start;
                    align-items: center;
                }

                .middle-layout {
                    height: 95%;
                    overflow: auto;
                }

                .middle-layout.vertical-align {
                    justify-content: center;
                }

                .middle-layout .no-selected {
                    font-weight: 500;
                    font-size: 1rem;
                    color: #454545;
                }

                .card {
                    border-radius: 0px;
                }

                .sideTab {
                    border-left: 2px solid #ebebeb;
                    height: 95%;
                }

                .sideTab .nav-link {
                    padding: 0rem;
                    margin: 0rem 0.9rem;
                    font-weight: 500;
                    color: #000;
                    font-size: 0.8rem;
                }

                .sideTab .nav-pills:after {
                    content: "";
                    background: #ebebeb;
                    width: 100%;
                    height: 3px;
                    position: absolute;
                    top: 5.5rem;
                    left: 0px;
                    z-index: 1;
                }

                .sideTab .nav-link.active {
                    background: white;
                    color: #000;
                    border-bottom: 2px solid #5085e8;
                    padding-bottom: 0.5rem;
                    position: relative;
                    z-index: 2;
                }

                .sideTab .nav-link:nth-child(1) {
                    margin-left: 0rem;
                }

                .sideTab .search:after {
                    content: "";
                    background: #ebebeb;
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    top: 3rem;
                    left: 0px;
                }

                .sideTab .search input::-webkit-input-placeholder {
                    color: #454545 !important;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                .sideTab .search input::-moz-placeholder {
                    color: #454545 !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                .sideTab .search input:-ms-input-placeholder {
                    color: #454545 !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                .sideTab .search input:-moz-placeholder {
                    color: #454545 !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .sideTab .message {
                    position: relative;
                    list-style-type: none;
                    cursor: pointer;
                    margin: 0.7rem 0rem;
                    width: 100%;
                }

                .sideTab .message:nth-child(1) {
                    margin-top: 0rem;
                }

                .sideTab .message .message-content {
                    font-size: 0.7rem;
                    font-weight: 400;
                    color: #000;
                }

                .sideTab .message .time {
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: #000;
                }

                .sideTab .message .amount {
                    font-size: 0.6rem;
                    font-weight: 600;
                    color: #fff;
                    background: #d10000;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                }

                .sideTab .message img {
                    border-radius: 50%;
                    width: 44px;
                    height: 44px;
                }

                .content {
                    position: relative;
                    top: calc(-2rem + 2px);
                    height: 100%;
                }
            `}</style>
        </main>
    );
};

export default Messages;
