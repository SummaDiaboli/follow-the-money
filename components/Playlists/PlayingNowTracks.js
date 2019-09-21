import React from 'react'

const PlayingNowTracks = ({id, imageSrc, trackName, duration, guest}) => {
    const trackReference = React.createRef()

    let highlightTrack = () => {
        console.log("Playing now play button " + trackReference.current.id + " clicked.")
        // console.log(document.getElementsByClassName("now-playing-player").item(trackReference.current.id))
        
        if (document.getElementsByClassName("now-playing-player").item(trackReference.current.id-1).classList.contains("active")) {
            document.getElementsByClassName("now-playing-player").item(trackReference.current.id-1).classList.remove("active")
        } else {
            document.getElementsByClassName("now-playing-player").item(trackReference.current.id-1).classList.add("active")
        }
    }

    return (
        <li className="now-playing-player">
            <div className="d-flex flex-row vertical-align">
                <img src={imageSrc} alt="" />
                <div className="d-flex flex-column ml-2">
                    <h5 className="m-0 font-medium small">{trackName}</h5>
                    <p className="smaller mt-1 m-0 font-medium">{guest}</p>
                </div>
                <div className="d-flex ml-auto options vertical-align flex-row">
                    <span className="duration">{duration}</span>
                    <button><i id={id} className="fas fa-play ml-3" onClick={highlightTrack} ref={trackReference}></i></button>
                    <button><i className="fas fa-plus ml-3"></i></button>
                </div>
            </div>
        </li>
    )
}

export default PlayingNowTracks