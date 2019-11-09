import React, { useState } from 'react'
import { UserIcon } from './index'
import NotificationPopup from './NotificationPopup'

const NotificationIcon = () => {
    const [notificationsPopup, setnotificationsPopup] = useState(false)

    const fadeNotifications = () => {
        if (notificationsPopup === false) {
            document.getElementById("notifications-popup").style.display = "flex";
            document.getElementById("notifications-popup").animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1,
                easing: 'linear',
                fill: 'forwards'
            });
            document.getElementById("notifications-toggle").classList.add('active');
        } else {
            document.getElementById("notifications-popup").animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1,
                easing: 'linear',
                fill: 'forwards'
            });
            setTimeout(function () {
                document.getElementById("notifications-popup").style.display = "none";
            }, 200);
        }
        setnotificationsPopup(!notificationsPopup);
    }

    return (
        <div className="right mr-2 pb-2 d-flex ml-auto vertical-align">
            <button className="m-0">
                <div className="notifications mr-3" id="notifications-toggle" onClick={fadeNotifications}>
                    <i className="far fa-bell"></i>
                    <div className="amount">2</div>
                </div>
            </button>

            <UserIcon />            
            <NotificationPopup />
        </div>
    )
}

export default NotificationIcon
