import React from 'react'

const UserComment = ({ userImage }) => {
    return (
        <div className="user-comment p-3">
            <div className="comment user-post d-flex">
                <img className="rounded-circle mr-3" src={userImage} alt="" />
                <input type="text" className="w-50" placeholder="Add a comment..." />
            </div>
        </div>
    )
}

export default UserComment
