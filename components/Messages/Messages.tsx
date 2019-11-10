import React, { useEffect, useState } from "react";
import { NotificationIcon } from "../User";
import Cookies from "js-cookie";
import MessageTile from "./MessageTile";
import MessageDisplay from "./MessageDisplay";

require("../../static/assets/css/pages/Messages.css");

type Message = ({
    userPhoto: any;
    name: string;
    userName: string;
    unreadCount?: string;
})[];

const Messages = () => {
    const user = Cookies.getJSON("userData");
    const username = user.username;
    const [users, setUsers] = useState([]);
    const [messages, setMessages]: any = useState(null);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const abortController: AbortController = new window.AbortController();
        const signal: AbortSignal = abortController.signal;

        const getUsers = () => {
            // setInterval(() => {
            fetch(`api/get_users`, { signal })
                .then(res => {
                    res.json().then(users => {
                        sessionStorage.setItem("users", JSON.stringify(users));
                        setUsers([...users]);
                    });
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        return "Promise Aborted";
                    } else {
                        return "Promise Rejected";
                    }
                });
            // }, 5000);
        };

        getUsers();

        return () => {
            abortController.abort();
        };
    });

    const changeSearch = e => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        // if (messages !== null) {
        //     // const truncate = id => {
        //     //     let string = document.getElementById(id).innerHTML;
        //     //     var maxLength = 80;
        //     //     var result = string.substring(0, maxLength) + "...";
        //     //     document.getElementById(id).innerHTML = result;
        //     // };
        //     // truncate("truncate-text");
        // }
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
                    {users === null ? (
                        <div className="d-flex vertical-align loading w-100 h-100">
                            <div
                                className="spinner-border"
                                role="status"
                                style={{
                                    color: "#D00000"
                                }}
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row px-0 m-0 w-100 h-100">
                            <div className="col-9 px-0 messages-container">
                                <div
                                    className="middle-layout" /* style={{ height: "50%" }} */
                                >
                                    <div
                                        className="tab-content h-100"
                                        id="tabContent"
                                    >
                                        {users.map((user, index) =>
                                            user.username !== username ? (
                                                index == 0 ? (
                                                    <MessageDisplay
                                                        key={index}
                                                        username={user.username}
                                                        active={true}
                                                    />
                                                ) : (
                                                    <MessageDisplay
                                                        key={index}
                                                        username={user.username}
                                                    />
                                                )
                                            ) : (
                                                ""
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-3 px-0"
                                style={{ height: "100%" }}
                            >
                                <div className="card sideTab">
                                    <div className="d-flex w-100 search p-3 flex-row vertical-align">
                                        <i className="fas fa-search"></i>
                                        <input
                                            type="text"
                                            placeholder="Search in all messages"
                                            className="ml-3 w-100"
                                            onChange={e => {
                                                changeSearch(e);
                                            }}
                                            value={searchText}
                                        />
                                    </div>

                                    <ul
                                        className="nav nav-pills px-3 mb-0 py-1"
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
                                                {users.map((user, index) =>
                                                    user.username !==
                                                    username ? (
                                                        searchText === "" ? (
                                                            index === 0 ? (
                                                                <MessageTile
                                                                    key={index}
                                                                    name={`${user.username}`}
                                                                    userName={
                                                                        user.username
                                                                    }
                                                                    active={
                                                                        true
                                                                    }
                                                                />
                                                            ) : (
                                                                <MessageTile
                                                                    key={index}
                                                                    name={`${user.username}`}
                                                                    userName={
                                                                        user.username
                                                                    }
                                                                    active={false}
                                                                />
                                                            )
                                                        ) : user.username
                                                              .toLowerCase()
                                                              .includes(
                                                                  searchText.toLowerCase()
                                                              ) ? (
                                                            index === 0 ? (
                                                                <MessageTile
                                                                    key={index}
                                                                    name={`${user.username}`}
                                                                    userName={
                                                                        user.username
                                                                    }
                                                                    active={
                                                                        true
                                                                    }
                                                                />
                                                            ) : (
                                                                <MessageTile
                                                                    key={index}
                                                                    name={`${user.username}`}
                                                                    userName={
                                                                        user.username
                                                                    }
                                                                    active={false}
                                                                />
                                                            )
                                                        ) : (
                                                            ""
                                                        )
                                                    ) : (
                                                        ""
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
                                            <ul className="p-0 color-grey">
                                                <li>No unread count.</li>
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
                    )}
                </div>
            </div>

            <style jsx>{`
                body {
                    font-family: "Montserrat", sans-serif;
                    background: #fff;
                    color: #000;
                    overflow-y: hidden;
                }

                .main {
                    padding: 1rem 0rem !important;
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
                    height: 100%;
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
                    border: none;
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
                    border-bottom: 2px solid #d10000;
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
                    font-size: 0.8rem;
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

                .sideTab .message {
                    position: relative;
                    list-style-type: none;
                    cursor: pointer;
                    width: 100%;
                    margin: 0rem;
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
                    top: calc(-2rem - 2px);
                    height: 95%;
                }

                .messages-container {
                    background: #bfbfbf6b;
                    background-size: cover;
                    height: 100%;
                    overflow: auto;
                    position: relative;
                }

                .loading {
                    justify-content: center;
                }
            `}</style>
        </main>
    );
};

export default Messages;
