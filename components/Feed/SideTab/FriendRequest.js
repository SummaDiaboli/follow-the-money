import React from 'react'

const FriendRequest = ({ userPhoto, username, userLocation }) => {
    return (
        <div className="d-flex flex-row mt-3 vertical-align">

            <img src={userPhoto} alt="" />

            <div className="d-flex flex-column ml-2">
                <h5 className="color-grey m-0 font-medium small">{username}</h5>
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
