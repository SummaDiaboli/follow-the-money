import React from 'react'
import Link from 'next/link'

const FriendRequest = ({ userImage, username, userID, userLocation }) => {
    return (
        <div className="d-flex flex-row mt-3 vertical-align">
            <img src={userImage} alt="" />
            <div className="d-flex flex-column ml-2">
                <Link href="/profile/[id]" as={`/profile/${userID}`}><a className="username"><h5 className="color-grey m-0 font-medium small">{username}</h5></a></Link>
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
