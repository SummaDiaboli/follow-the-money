import React from 'react'

const DirectMessage = ({ userImage, userFname }) => {
    return (
        <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
            <img className="rounded-circle mr-3" src={userImage} alt="" />
            <input type="text" className="w-50" placeholder={`Text something to ${userFname}`} />
            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                <i className="far fa-image"></i>
                <i className="far fa-user ml-3"></i>
                <i className="far fa-smile ml-3"></i>
            </div>
        </div>
    )
}

export default DirectMessage
