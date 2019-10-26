import React, { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'
import Router from 'next/router'

const NewCommunityButton = () => {
    const user = Cookies.getJSON('userData')
    const username = user.username
    const [modalOpen, setModalOpen] = useState(false);
    const [communityName, setCommunityName] = useState('')
    const [communityDescription, setCommunityDescription] = useState('')
    const [communityExists, setCommunityExists] = useState(false)
    let communitiesList = JSON.parse(sessionStorage.getItem('communities'))

    useEffect(() => {
        communitiesList = JSON.parse(sessionStorage.getItem('communities'))
    })

    const onChangeCommunityName = e => {
        setCommunityName(e.target.value)
    }

    const onChangeCommunityDescription = e => {
        setCommunityDescription(e.target.value)
    }

    const submitCommunity = e => {
        e.preventDefault()
        setCommunityExists(false)
        let exists = false
        communitiesList.map(community => {
            if (communityName === community.name) {
                exists = true
            }
        })
        if (!exists) {
            fetch('api/communities', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": communityName,
                    "description": communityDescription,
                    "username": username
                })
            }).then(res => {
                if (res.status === 201) {
                    setCommunityName('')
                    setCommunityDescription('')
                    // Router.push("/communities/[id]", `/communities/${communityName}`)
                    toggleModal()
                } else {
                    setCommunityExists(true)
                    return "Commmunity could not be created"
                }
            }).catch(error => {
                console.log(`Error: ${error}`)
            })
        } else {
            setCommunityExists(true)
        }
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            {modalOpen === true ? <div className="overlay"></div> : ""}

            {modalOpen === true ? (
                <div className="customModal">
                    <div className="modal-header p-3 d-flex vertical-align flex-row">
                        <div className="d-flex mr-auto">Add Community</div>
                        <div className="d-flex ml-auto">
                            <button onClick={toggleModal} className="m-0">
                                <h3>&times;</h3>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body p-3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Community Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="name"
                                    placeholder="Community Name"
                                    value={communityName}
                                    onChange={onChangeCommunityName}
                                />
                                <small
                                    hidden={!communityExists}
                                    className="form-text text-danger"
                                >
                                    This community already exists
                                </small>
                            </div>
                            <div className="form-group">
                                <textarea
                                    rows={5}
                                    className="form-control"
                                    placeholder="Community Description"
                                    value={communityDescription}
                                    onChange={onChangeCommunityDescription}
                                />
                            </div>
                            <div className="w-100 mt-2 text-center">
                                <button
                                    className="btn text-white bg-red"
                                    onClick={submitCommunity}
                                >
                                    Create Community
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                    ""
                )}

            <div className="ml-auto">
                <button className="addCommunity" onClick={toggleModal}>
                    <div className="d-flex vertical-align flex-row py-2 px-3">
                        <span className="mr-2">Add Community</span>
                        <i className="fas fa-plus" />
                    </div>
                </button>
            </div>

            <style jsx>{`
                .addCommunity {
                    color: rgba(69, 69, 69, 0.8);
                    background: #f1f1f5 !important;
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding: 0.5rem 0.8rem;
                    border-radius: 30px;
                }

                .addCommunity:hover {
                    background: #e4e4e4 !important;
                }

                .vertical-align{
                    align-items: center!important;
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
                    border-radius: 5px;
                    position: absolute;
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

                input {
                    outline: none;
                    box-shadow: none;
                }

                textarea {
                    outline: none;
                    box-shadow: none;
                    border: none;
                }

                .form-control {
                    outline: none !important;
                    box-shadow: none !important;
                    padding: 1.2rem 1rem !important;
                    font-size: 0.8rem;
                    border: 1px solid rgba(0,0,0,0.3)!important;
                    background: #fff !important;
                }

                ::-webkit-input-placeholder {
                    color: rgba(0, 0, 0, 0.37) !important;
                    font-family: "Montserrat", sans-serif;
                }

                ::-moz-placeholder {
                    color: rgba(0, 0, 0, 0.37) !important;
                    font-family: "Montserrat", sans-serif;
                }

                :-ms-input-placeholder {
                    color: rgba(0, 0, 0, 0.37) !important;
                    font-family: "Montserrat", sans-serif;
                }

                :-moz-placeholder {
                    color: rgba(0, 0, 0, 0.37) !important;
                    font-family: "Montserrat", sans-serif;
                }

                .btn {
                    padding: 0.8rem 2.3rem;
                    font-size: 0.8rem;
                    border-radius: 12px;
                    outline: none !important;
                    box-shadow: none !important;
                    border: none !important;
                }

                form .btn{
                    background: #D10000!important;
                }
            `}</style>
        </>
    );
};

export default NewCommunityButton;
