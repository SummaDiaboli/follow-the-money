import React, { useState, useLayoutEffect } from "react";
import UserPopup from "./UserPopup";
import Cookies from 'js-cookie'

const UserIcon = () => {
    const [userPopup, setUserPopup] = useState(false);
    const [data, setData] = useState(Cookies.getJSON('userData'))
    const [photo, setPhoto] = useState('')

    const fadeUserPopup = () => {
        if (userPopup === false) {
            document.getElementById("user-popup").style.display =
                "flex";
            document
                .getElementById("user-popup")
                .animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 200,
                    iterations: 1,
                    easing: "linear",
                    fill: "forwards"
                });
        } else {
            document
                .getElementById("user-popup")
                .animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration: 200,
                    iterations: 1,
                    easing: "linear",
                    fill: "forwards"
                });
            setTimeout(function () {
                document.getElementById("user-popup").style.display =
                    "none";
            }, 200);
        }
        setUserPopup(!userPopup);
    };

    useLayoutEffect(() => {
        // setInterval(() => {
        setPhoto(data !== null || data !== undefined ? data.photo : '')
        // }, 500)
    }, [photo])

    return (
        <>
            <button className="m-0" onClick={fadeUserPopup}>
                <img
                    className="user"
                    src={photo !== null && photo !== undefined ? photo : "../../static/assets/img/user/user.jpg"}
                    // src={"../../static/assets/img/user/user.jpg"}
                    alt=""
                />
            </button>

            <UserPopup />
        </>
    );
};

export default UserIcon;
