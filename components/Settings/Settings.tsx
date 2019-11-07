import React, { useState } from "react";
import { NotificationIcon } from "../User";
import { ImageUploader, Sidetab, Bio, Password } from "./index";
import Cookies from 'js-cookie'
import Router from 'next/router'
import { loadFB } from '../../utils/firebase'


const Settings = () => {
    const value = Cookies.getJSON('userData')
    const username = value.username
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [bio, setBio] = useState("");

    const [isLoading, setIsLoading] = useState(false)

    const callBackPassword = passwords => {
        setCurrentPassword(passwords.current);
        setNewPassword(passwords.new);
        setConfirmNewPassword(passwords.confirm)
    };

    const callBackImage = image => {
        if (image !== null) {
            setImage(image);
            setImageName(image.name);
        }
    };

    const callBackBio = bio => {
        setBio(bio);
    };

    const handleSubmit = e => {
        if (image !== null && imageName !== null) {
            setIsLoading(true)
            const fb = loadFB()
            const storageRef = fb.storage().ref()
            storageRef.child(`${username}/${imageName}`).put(image)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL()
                        .then(url => {
                            fetch(`api/change_photo/${username}`, {
                                method: "PUT",
                                body: JSON.stringify({
                                    url
                                })
                            }).then(res => {
                                if (res.status === 200) {
                                    fetch(`api/change_photo/${username}`)
                                        .then(res => {
                                            if (res.status === 201) {
                                                res.json()
                                                    .then(data => {
                                                        // console.log(data[0])
                                                        setIsLoading(false)
                                                        const newData = JSON.parse(Cookies.get('userData'))
                                                        newData.photo = data[0].photo
                                                        Cookies.set('userData', newData, { expires: 7 })
                                                        Router.push('/feed')
                                                    })
                                            } else {
                                                setIsLoading(false)
                                                console.log("Not getting photo")
                                            }

                                        })
                                } else {
                                    console.log("Not working")
                                }
                            })
                        })
                })
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
            // const formData = new FormData()
            // // console.log(image)
            // // console.log(image.name)
            // console.log(image)
            // formData.append("file", image)
            // formData.append("fileName", image.name)
            // fetch(`api/change_photo/${username}`, {
            //     method: "PUT",
            //     body: formData
            // });
        }

        if (newPassword === confirmNewPassword && newPassword !== '' && currentPassword !== '') {
            setIsLoading(true)
            fetch(`api/change_password/${username}`, {
                method: "PUT",
                body: JSON.stringify({
                    newPassword,
                    currentPassword
                })
            }).then(res => {
                // res.status === 200
                //     ? console.log("Working")
                //     : console.log("Not working")

                // setIsLoading(false)
            }).catch(err => {
                // setIsLoading(false)
                // console.log(err)
            })
        }

        if (bio !== '') {
            setIsLoading(true)
            fetch(`api/change_bio/${username}`, {
                method: "PUT",
                body: JSON.stringify({
                    bio
                })
            }).then(res => {
                // res.status === 200 ? console.log("Working") : console.log("Not working")
            })/* .catch(err => {
                console.log(err)
            }) */
        }

        fetch(`api/users/${username}`, {
            method: "GET"
        }).then(res => {
            res.status === 200
                ? res.json().then(data => {
                    // Cookies.remove('userData')
                    Cookies.set('userData', data[0], { expires: 7 })
                    setIsLoading(false)
                })
                : "Something went wrong"
        })
    };

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
                    <div
                        className="col-9 px-2"
                        data-spy="scroll"
                        data-target="#sidetab"
                        data-offset="0"
                    >
                        <div className="account-section" id="account-section">
                            <h5 className="section-heading font-medium font-segoe">
                                Account
                            </h5>
                            <p className="section-description">
                                Edit your account here including your bio,
                                profile picture etc.
                            </p>
                            <ImageUploader parentCallback={callBackImage} />
                            <Password parentCallback={callBackPassword} />
                            <Bio parentCallback={callBackBio} />
                        </div>
                    </div>
                    <div className="col-3 py-2 px-0 sidetab">
                        <button
                            className="btn uploadButton text-white ml-0 mt-3"
                            onClick={handleSubmit}
                        >
                            {
                                isLoading === true
                                    ? <div className="text-center" style={{ marginTop: "5%" }}>
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            style={{ color: "#D00000" }}
                                        >
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>

                                    : <>Save Settings</>
                            }
                        </button>
                        <Sidetab />
                    </div>
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
                    font-size: 0.8rem !important;
                }
                .form-control::-moz-placeholder {
                    font-size: 0.8rem !important;
                }
                .form-control:-ms-input-placeholder {
                    font-size: 0.8rem !important;
                }
            `}</style>
        </>
    );
};

export default Settings;
