import React, { useState, useEffect } from "react";
import UserPopup from "./UserPopup";

const UserIcon = () => {
    const [userPopup, setUserPopup] = useState(false);

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
            setTimeout(function() {
                document.getElementById("user-popup").style.display =
                    "none";
            }, 200);
        }
        setUserPopup(!userPopup);
    };

    return (
        <>
            <button className="m-0" onClick={fadeUserPopup}>
                <img
                    className="user"
                    src={require("../../static/assets/img/user/user.jpg")}
                    alt=""
                />
            </button>

            <UserPopup />
        </>
    );
};

export default UserIcon;
