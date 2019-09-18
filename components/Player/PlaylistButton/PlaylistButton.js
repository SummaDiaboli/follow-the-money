import React, { useState } from 'react'

const PlaylistButton = () => {
    const [playlistPopup, setplaylistPop] = useState(false)

    const slidePlaylists = () => {
        if (playlistPopup === false) {
            document.getElementById("playlist-popup").animate([
                { bottom: '-90%' },
                { bottom: '10%' }
            ], {
                duration: 400,
                iterations: 1,
                easing: 'ease',
                fill: 'forwards'
            });
        } else {
            document.getElementById("playlist-popup").animate([
                { bottom: '10%' },
                { bottom: '-90%' }
            ], {
                duration: 400,
                iterations: 1,
                easing: 'ease',
                fill: 'forwards'
            });
        }
        document.getElementById("playlist-toggle").classList.toggle('active');
        setplaylistPop(!playlistPopup)
    }

    return (
        <>
            <div className="col-4 d-flex h-100">
                <div className="ml-auto flex-column h-100">
                    <div className="d-flex flex-row controls">
                        <i className="fas fa-music" id="playlist-toggle" onClick={slidePlaylists}></i>
                        <i className="fas fa-volume-up ml-4"></i>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PlaylistButton
