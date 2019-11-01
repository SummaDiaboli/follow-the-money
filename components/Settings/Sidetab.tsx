import React from "react";

const Sidetab = () => {
    return (
        <>
            <div className="navigation mt-3 pl-3 pt-1 pb-3">
                <ul className="p-0">
                    <li>
                        <a className="active" href="#account-section">
                            Account
                        </a>
                    </li>
                    <li>
                        <a className="" href="#notifications-section">
                            Notifications
                        </a>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .sidetab {
                    position: sticky;
                    -webkit-sticky: sticky;
                }

                .navigation {
                    border-left: 1px solid #b3b3b3;
                }

                ul li {
                    list-style-type: none;
                    margin: 0.5rem 0rem;
                }

                ul li a {
                    font-size: 0.9rem;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.5);
                }

                ul li a.active {
                    color: rgba(0, 0, 0, 1);
                    font-weight: 500;
                }
            `}</style>
        </>
    );
};

export default Sidetab;
