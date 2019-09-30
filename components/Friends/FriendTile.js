import React from 'react'
import Link from 'next/link'

const FriendTile = ({ userImage, username, userLocation, userID }) => {
    return (
        <div className="col-4">
            <div className="card p-0 d-flex vertical-align flex-row">
                <img src={userImage} alt="" style={{width: "100px"}}/>
                <div className="d-flex flex-column ml-3">
                    <h6 className="name">{username}</h6>
                    <span className="location">{userLocation}</span>
                </div>
                <button className="options d-flex ml-auto">
                    <Link href="/profile/[id]" as={`/profile/${userID}`}>
                        <i className="fas fa-ellipsis-v "></i>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default FriendTile
