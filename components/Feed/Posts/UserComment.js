import React, { useState } from 'react'

const UserComment = () => {
    const [userPhoto, setuserPhoto] = useState(require("../../../static/assets/img/user/user.jpg"))

    return (
        <div className="comment user-post d-flex pl-1 pt-0">
            <img className="rounded-circle mr-3" src={userPhoto} alt="" />
            <input type="text" className="w-50" placeholder="Add a comment..." />
            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                <a href="#">
                    <i className="far fa-star"></i>
                </a>
            </div>
        </div>
    )
}

export default UserComment
