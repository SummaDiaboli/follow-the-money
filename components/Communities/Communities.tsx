import React, { useState, useEffect } from "react";
import { NotificationIcon } from "../User";
import { CommunitiesList, NewCommunityButton } from ".";

const Communities = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <main>
                <div className="main">
                    <nav>
                        <ul className="d-flex vertical-align">
                            <NotificationIcon />
                        </ul>
                        <hr className="w-100" />
                    </nav>
                    <div className="w-100 d-flex flex-row vertical-align mb-4">
                        <div className="search mr-auto pl-0 pt-0">
                            <input
                                type="text"
                                className=""
                                placeholder="Search Communities"
                                value={searchValue}
                                onChange={handleChange}
                            />
                            <button>
                                <i className="fas fa-search ml-auto"></i>{" "}
                            </button>
                        </div>
                        <NewCommunityButton />
                    </div>

                    
                    <CommunitiesList searchValue={searchValue} />
                </div>
            </main>
            <style jsx>{`
                h1,
                h2,
                h3,
                h4,
                h5,
                span,
                p {
                    font-family: "Montserrat";
                }

                .font-segoe {
                    font-family: "Segoe UI", sans-serif;
                }

                .main {
                    background: #fff;
                }

                .search input {
                    background: transparent;
                    position: relative;
                    font-size: 0.8rem;
                    font-weight: 500;
                    width: 300px;
                }

                .search {
                    position: relative;
                }

                .search button {
                    padding: 0rem;
                    background: transparent !important;
                    outline: none !important;
                    border: none !important;
                }

                .search i:after {
                    content: "";
                    position: absolute;
                    left: 0rem;
                    bottom: -0.5rem;
                    width: calc(300px + 2rem);
                    background: rgba(69, 69, 69, 0.4);
                    height: 1px;
                }

                .search input::-webkit-input-placeholder {
                    color: rgba(69, 69, 69, 0.4) !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding-left: 10px;
                }
                .search input::-moz-placeholder {
                    color: rgba(69, 69, 69, 0.4) !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding-left: 10px;
                }
                .search input:-ms-input-placeholder {
                    color: rgba(69, 69, 69, 0.4) !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding-left: 10px;
                }

            `}</style>
        </>
    );
};

export default Communities;
