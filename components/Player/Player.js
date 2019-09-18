import React from 'react'
import { PlaylistButton, PlaylistPopup } from './PlaylistButton';
import { PlayerControls } from './PlayerControls';
import { CurrentPlaying } from './CurrentPlaying';

const Player = () => {
    return (
        <footer>
            <div className="footer p-3 bg-red d-flex flex-row vertical-align">
                <div className="container-fluid p-0">
                    <div className="row m-0 w-100 flex-row vertical-align">

                        <CurrentPlaying />

                        <PlayerControls />

                        <PlaylistButton />

                    </div>
                </div>
            </div>

            <PlaylistPopup />
        </footer>
    )
}

export default Player
