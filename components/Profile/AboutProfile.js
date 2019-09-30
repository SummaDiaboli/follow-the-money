import React from 'react'

const AboutFriend = ({ userImage, username, description }) => {
    return (
        <div className="w-100 d-flex px-3 pb-2 vertical-align profile d-flex flex-row">
            <img src={userImage} alt="" />
            <div className="flex-column d-flex pt-1">
                <div className="d-flex flex-row ml-3 vertical-align">
                    <h6 className="name m-0">{username}</h6>
                    <i className="far ml-2 fa-check-circle color-red fa-sm"></i>
                </div>
                <div className="description w-75 ml-3 mt-2">
                    {description}
                </div>
            </div>
            <div className="d-flex flex-row ml-auto options">
                <button><i className="far fa-comment-alt"></i></button>
                <button className="ml-4"><i className=" fas fa-ellipsis-v"></i></button>
            </div>
        </div>
    )
}

export default AboutFriend
