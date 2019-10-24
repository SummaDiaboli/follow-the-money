import React, { Component, useState, useEffect } from "react";

interface Params {
    title: string;
    show: boolean;
}

const Modal: React.FC<Params> = ({ title, children, show }) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);
    useEffect(() => {
        setShowModal(show)
    }, [show])

    useEffect(() => {
        toggle()
    }, [show])

    return (
        <>
            {showModal === true ? <div className="overlay"></div> : ""}

            {showModal === true ? (
                <div className="customModal">
                    <div className="modal-header d-flex vertical-align flex-row">
                        <div className="d-flex mr-auto">{title}</div>
                        <div className="d-flex ml-auto">
                            <button onClick={toggle} className="m-0">
                                <h3>&times;</h3>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            ) : (
                ""
            )}

            <style jsx>{`
                .vertical-align{
                    align-items: center;
                }
                
                .overlay {
                    background: rgba(0, 0, 0, 0.5);
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                    z-index: 10;
                    opacity: 0
                    -webkit-animation-name: fade;
                    -webkit-animation-duration: 0.5s;
                    -moz-animation-name: fade;
                    -moz-animation-duration: 0.5s;
                    animation-duration: 0.5s;
                    animation-name: fade;
                    animation-fill-mode: forwards;
                }

                .customModal {
                    top: 10%;
                    background: #fff;
                    width: 50%;
                    border-radius: 10px;
                    position: absolute;
                    padding: 1rem;
                    left: calc(50% - 25%);
                    z-index: 11;
                    -webkit-animation-name: slide;
                    -webkit-animation-duration: 0.5s;
                    -moz-animation-name: slide;
                    -moz-animation-duration: 0.5s;
                    animation-duration: 0.5s;
                    animation-name: slide;
                    animation-fill-mode: forwards;
                    display: block !important;
                }

                @-webkit-keyframes slide {
                    from {
                        top: 10%;
                    }
                    to {
                        top: 15%;
                    }
                }

                @-moz-keyframes slide {
                    from {
                        top: 10%;
                    }
                    to {
                        top: 15%;
                    }
                }

                @keyframes slide {
                    from {
                        top: 10%;
                    }
                    to {
                        top: 15%;
                    }
                }
            `}</style>
        </>
    );
};

export default Modal;
