import React, { useState } from 'react'

const UserPost = () => {
    const [userPhoto, setuserPhoto] = useState(require("../../../static/assets/img/user/user.jpg"))

    return (
        <div>
            <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
                <img className="rounded-circle mr-3" src={userPhoto} alt="" />
                <input type="text" className="w-50" placeholder="What's on your mind?" />
                <div className="ml-auto h-100 vertical-align d-flex flex-row">
                    <i className="far fa-image"></i>
                    <i className="far fa-user ml-3"></i>
                    <i className="far fa-smile ml-3"></i>
                    <div className="border mx-3"></div>
                    <i className="fas fa-camera-retro color-red"></i>
                    <div className="border mx-3"></div>
                    <i className="fas fa-video color-red"></i>
                </div>
            </div>
        </div>
    )
}

export default UserPost
