import React from 'react'
import Link from 'next/link'

interface Params {
    userPhoto: string,
    userName: string,
    name: string,
    message: string,
    timeSent: Date,
    unreadCount: number
}

const MessageTile: React.FC<Params> = ({ userPhoto, userName, name, message, timeSent, unreadCount }) => {
    return (
        <li className="message">
            <div className="d-flex flex-row">
                <img src={userPhoto} alt="" />
                <div className="d-flex flex-column ml-2">
                    <Link href="/users/[id]" as={`/users/${userName}`}>
                        <a className="username" href="">
                            <h5 className="small font-medium m-0">{name}</h5>
                        </a>
                    </Link>
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
