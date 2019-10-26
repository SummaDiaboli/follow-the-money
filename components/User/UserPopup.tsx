import React from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import Link from "next/link";

const UserPopup = () => {
    const signOut = () => {
        Cookies.remove("userData");
        Router.reload();
    };

    return (
        <>
            <div className="user-popup" id="user-popup">
                <ul className="w-100">
                    <li>
                        <a href="#">
                            <div className="d-flex flex-row vertical-align">
                                <i className="fas fa-user mr-2"></i>
                                <span>Profile</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <Link href="/settings">
                            <a>
                                <div className="d-flex flex-row vertical-align">
                                    <i className="fas fa-cog mr-2"></i>
                                    <span>Settings</span>
                                </div>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <button
                            className="m-0 w-100 text-left"
                            onClick={signOut}
                        >
                            <div className="d-flex flex-row vertical-align">
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                <span>Signout</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .user-popup {
                    background: #f1f1f5;
                    position: absolute;
                    right: 0px;
                    width: 150px;
                    border-radius: 0.35rem;
                    z-index: 5;
                    top: 45px;
                    overflow-y: auto;
                    display: none;
                    opacity: 1;
                    flex-flow: column;
                }

                .user-popup li a,
                .user-popup li button {
                    display: flex;
                    align-items: start;
                    padding: 0.7rem 1rem;
                    transition: 0.2s all ease;
                    -webkit-transition: 0.2s all ease;
                    -moz-transition: 0.2s all ease;
                    -ms-transition: 0.2s all ease;
                }

                .user-popup a {
                    padding: 0;
                    margin: 0;
                }

                .user-popup a:hover,
                .user-popup button:hover {
                    background: #e1e1e1 !important;
                }

                .user-popup a,
                .user-popup button {
                    color: #000;
                    font-size: 0.9rem !important;
                    text-align: left;
                    font-family: "Segoe UI" !important;
                    font-weight: 400;
                }
            `}</style>
        </>
    );
};

export default UserPopup;
