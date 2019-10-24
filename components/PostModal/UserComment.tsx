import React from 'react'

interface Params {
    userImage: string
}

const UserComment: React.FC<Params> = ({ userImage }) => {
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
