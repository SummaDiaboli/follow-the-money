import React, { useState } from 'react'
import { UserIcon } from './index'

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
        <div className="right d-flex ml-auto vertical-align">
            <a href="#">
                <div className="notifications mr-3" id="notifications-toggle" onClick={fadeNotifications}>
                    <i className="far fa-bell"></i>
                    <div className="amount">2</div>
                </div>
            </a>
            <UserIcon />
            <div className="notification-popup flex-column p-3" id="notifications-popup">
                <h6 className="font-semiBold heading m-0">Notifications</h6>
                <ul className="p-0 pt-2 w-100 d-flex flex-column">
                    <li>
                        <a href="#" className="m-0">
                            <div className="d-flex flex-row">
                                <div className="user d-flex vertical-align">
                                    <img src={require("../../static/assets/img/user/nasir.jpg")} alt="" />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <h6 className="notification-text m-0">Your friend <span className="tagged">Nasir Smith</span> liked your post "Seven rules of a good IT company"</h6>
                                    <span className="time pt-1">1 hour ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="m-0">
                            <div className="d-flex flex-row">
                                <div className="user d-flex vertical-align">
                                    <img src={require("../../static/assets/img/user/nwabuisi.jpg")} alt="" />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <h6 className="notification-text m-0">Your friend <span className="tagged">Nwabuisi Atiku</span> posted a new video "Hunting badgers"</h6>
                                    <span className="time pt-1">2 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="m-0">
                            <div className="d-flex flex-row">
                                <div className="user d-flex vertical-align">
                                    <img src={require("../../static/assets/img/user/yhasmeen.jpg")} alt="" />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <h6 className="notification-text m-0">It's <span className="tagged">Yhasmeen Kareem</span>'s' birthday today"</h6>
                                    <span className="time pt-1">4 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="m-0">
                            <div className="d-flex flex-row">
                                <div className="user d-flex vertical-align">
                                    <img src={require("../../static/assets/img/user/hanan.jpg")} alt="" />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <h6 className="notification-text m-0"> <span className="tagged">Haman Cho</span>added a new photo</h6>
                                    <span className="time pt-1">5 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="m-0">
                            <div className="d-flex flex-row">
                                <div className="user d-flex vertical-align">
                                    <img src={require("../../static/assets/img/user/hanan.jpg")} alt="" />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <h6 className="notification-text m-0"> <span className="tagged">Haman Cho</span>added a new photo</h6>
                                    <span className="time pt-1">5 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotificationIcon
