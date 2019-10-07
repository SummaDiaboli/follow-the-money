import React, { useState } from 'react'

type Params = {
    reference: React.RefObject<any>
}

const PlayerControls: React.FC<Params> = ({ reference }) => {
    const [audioState, setAudioState] = useState('fa-play')

    const toggle = () => {
        if (reference.current.paused === true) {
            reference.current.play()
            setAudioState('fa-pause')
        } else {
            reference.current.pause()
            setAudioState('fa-play')
        }
    }

    return (
        <div className="col-4 d-flex h-100">
            <div className="mx-auto flex-column h-100 pos-relative ">
                <div className="d-flex flex-row controls player">
                    <i className="fas fa-step-backward"></i>
                    <i id="audio-state" className={`fas active ${audioState} mx-4`} onClick={toggle}></i>
                    <i className="fas active fa-step-forward"></i>
                </div>
                <div className="progressbar mt-3">
                    <div className="loaded"></div>
                </div>
            </div>
        </div>
    )
}

export default PlayerControls
