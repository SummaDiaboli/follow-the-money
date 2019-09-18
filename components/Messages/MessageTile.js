import React from 'react'

const MessageTile = ({ userPhoto, username, message, timeSent, unreadCount }) => {
    return (
        <li className="message">
            <div className="d-flex flex-row">
                <img src={userPhoto} alt="" />
                <div className="d-flex flex-column ml-2">
                    <h6 className="user m-0">{username} </h6>
                    <span className="pt-1 message-content" id="truncate-text">
                        {message}
                    </span>
                </div>
                <div className="d-flex flex-column ml-auto">
                    <span className="time">{timeSent}</span>
                    {
                        unreadCount &&
                        <div className="amount text-center ml-auto mt-2">
                            {unreadCount}
                        </div>
                    }
                </div>
            </div>
        </li>
    )
}

export default MessageTile
