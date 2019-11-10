import React, { useMemo, useState } from "react";
import Link from "next/link";

interface Params {
    userName: string;
    name: string;
    // message: string;
    //timeSent: Date;
    //unreadCount: number;
    active: boolean;
}

const MessageTile: React.FC<Params> = ({
    userName,
    name,
    // message,
    //timeSent,
    //unreadCount,
    active
}) => {
    const [userPhoto, setUserPhoto] = useState(null);

    useMemo(
        () =>
            fetch(`/api/change_photo/${userName}`).then(res => {
                res.status === 201 &&
                    res.json().then(data => {
                        setUserPhoto(data[0].photo);
                    });
            }),
        [userPhoto]
    );

    return (
        <>
            <li className="message m-0">
                <a
                    href={`#${userName}`}
                    className={active === true ? "tab-trigger active" : "tab-trigger"}
                    id={`${userName}-tab`}
                    data-toggle="tab"
                    role="tab"
                    aria-controls={`${userName}`}
                    aria-selected="true"
                >
                    <div className="d-flex vertical-align flex-row py-3 px-2">
                        <img
                            src={
                                userPhoto !== null
                                    ? userPhoto
                                    : "../../static/assets/img/user/user.jpg"
                            }
                            alt=""
                        />
                        <div className="d-flex flex-column ml-2">
                            <Link href="/users/[id]" as={`/users/${userName}`}>
                                <a className="username" href="">
                                    <h5 className="small font-medium m-0">
                                        {name}
                                    </h5>
                                </a>
                            </Link>
                            {/* <span
                            className="pt-1 message-content"
                            id="truncate-text"
                        >
                            {message}
                        </span> */}
                        </div>
                        {/* <div className="d-flex flex-column ml-auto">
                        <span className="time">{timeSent}</span>
                        {unreadCount && (
                            <div className="amount text-center ml-auto mt-2">
                                {unreadCount}
                            </div>
                        )}
                    </div> */}
                    </div>
                </a>
            </li>

            <style>{`
                .tab-trigger.active .flex-row{
                    background: #eee!important;
                }
            `}</style>
        </>
    );
};

export default MessageTile;
