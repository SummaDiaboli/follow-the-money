import React from 'react'

const Playlist = ({type, name, tracks}) => {
    return (
        <div className="col-4 mt-3 mb-3">
            <div className="wrapper">
                <div className="overlay"></div>
                <div className="over-overlay">
                    <h6 className="mt-auto d-flex">{name}</h6>
                    { 
                        tracks > 1 ? <span>{tracks} tracks for you</span> : <span>{tracks} track for you</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Playlist