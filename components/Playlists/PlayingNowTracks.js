import React, {useState} from 'react'

const PlayingNowTracks = ({imageSrc, trackName, guest}) => {

    return (
        <li>
            <div className="d-flex flex-row vertical-align">
                <img src={imageSrc} alt="" />
                <div className="d-flex flex-column ml-2">
                    <h5 className="m-0 font-medium small">{trackName}</h5>
                    <p className="smaller mt-1 m-0 font-medium">{guest}</p>
                </div>
                <div className="d-flex ml-auto options vertical-align flex-row">
                    <span className="duration">3:51</span>
                    <button><i className="fas fa-play ml-3"></i></button>
                    <button><i className="fas fa-plus ml-3"></i></button>
                </div>
            </div>
        </li>
    )
}

export default PlayingNowTracks