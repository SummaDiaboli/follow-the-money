import React from 'react'
import Link from 'next/link'

const FriendRequest = ({ userPhoto, name, userLocation, userName }) => {
    return (
        <div className="d-flex flex-row mt-3 vertical-align">

            <img src={userPhoto} alt="" />

            <div className="d-flex flex-column ml-2">
            <Link href="/users/[id]" as={`/users/${userName}`}>
                <a className="username" href="">
                    <h5 className="small font-medium m-0">{name}</h5>
                </a>
            </Link>
            <p className="smaller mt-1 m-0 color-grey font-medium">{userLocation}</p>
            </div>

            <div className="d-flex ml-auto flex-row">
                <i className="far fa-comment-alt"></i>
                <i className="fas fa-ellipsis-v ml-3"></i>
            </div>
        </div>
    )
}

export default FriendRequest
