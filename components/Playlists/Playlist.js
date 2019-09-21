import React from 'react'

const Playlist = ({name, tracks}) => {
    return (
        <div className="col-4">
            <div className="wrapper">
                <div className="overlay"></div>
                <div className="over-overlay">
                    <h6 className="mt-auto d-flex">{name}</h6>
                    <span>{tracks} tracks for you</span>
                </div>
            </div>
        </div>
    )
}

export default Playlist