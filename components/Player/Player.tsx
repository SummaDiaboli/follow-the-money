import React, { createRef } from 'react'
import { PlaylistButton, PlaylistPopup } from './PlaylistButton';
import { PlayerControls } from './PlayerControls';
import { CurrentPlaying } from './CurrentPlaying';

const Player = () => {
    const playerReference: any = createRef()

    return (
        <footer>
            <div className="footer p-3 bg-red d-flex flex-row vertical-align">
                <div className="container-fluid p-0">
                    <div className="row m-0 w-100 flex-row vertical-align">

                        <CurrentPlaying />

                        <PlayerControls reference={playerReference} />

                        <PlaylistButton />

                    </div>
                </div>
            </div>

            <PlaylistPopup />

            <audio ref={playerReference} controls className="w-100 mt-1" style={{ visibility: "hidden" }}>
                <source src={"https://backlinq.ng/ftm/ideas-radio-show.ogg"} type="audio/ogg" />
                {/* <source src={audioSource} type="audio/mpeg" /> */}
                Your browser does not support the audio element.
            </audio>
        </footer>
    )
}

export default Player
