import React from "react";
import { NotificationIcon } from "../User";
import { ImageUploader, Sidetab, Bio } from "./index";

const Settings = () => {
    return (
        <>
            <div className="main">
                <nav>
                    <ul
                        className="d-flex flex-row vertical-align"
                        role="tablist"
                        style={{ display: "flex" }}
                    >
                        <li className="nav-item font-segoe p-2">
                            <span>Settings</span>
                        </li>
                        <NotificationIcon />
                    </ul>
                    <hr className="w-100" />
                </nav>

                <div className="row m-0 w-100">
                    <div className="col-9 px-2" data-spy="scroll" data-target="#sidetab" data-offset="0">
                        <div className="account-section" id="account-section">
                            <h5 className="section-heading font-medium font-segoe">
                                Account
                            </h5>
                            <p className="section-description">
                                Edit your account here including your bio,
                                profile picture etc.
                            </p>
                            <ImageUploader />                            
                            <Bio />
                        </div>
                    </div>
                    <Sidetab />
                </div>
            </div>

            <style jsx>{`
                .section-heading {
                    font-size: 1.1rem;
                }

                .section-description {
                    font-size: 0.9rem;
                    color: rgba(0, 0, 0, 0.8);
                }
                
                .form-group label {
                    font-family: "Segoe UI";
                    color: #383838;
                    font-size: 0.9rem;
                }

                .form-control {
                    padding: 0.5rem 1rem !important;
                }

                .form-control::-webkit-input-placeholder {
                    font-size: 0.8rem!important;
                }
                .form-control::-moz-placeholder {
                    font-size: 0.8rem!important;                    
                }
                .form-control:-ms-input-placeholder {
                    font-size: 0.8rem!important;
                }
            `}</style>
        </>
    );
};

export default Settings;
