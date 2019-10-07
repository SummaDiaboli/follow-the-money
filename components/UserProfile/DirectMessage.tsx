import React from 'react'

type Params = {
    userImage: string,
    userFname: string
}

const DirectMessage: React.FC<Params> = ({ userImage, userFname }) => {
    return (
        <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
            <img className="rounded-circle mr-3" src={userImage} alt="" />
            <input type="text" className="w-50" placeholder={`Text something to ${userFname}`} />
            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                <button><i className="far fa-image"></i></button>
                <button><i className="far fa-user ml-3"></i></button>
                <button><i className="far fa-smile ml-3"></i></button>
                <div className="border mx-3"></div>
                <button className="m-0"><i className="fas fa-paper-plane color-red"></i></button>
            </div>
        </div>
    )
}

export default DirectMessage
