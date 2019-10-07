import React from 'react'

type Params = {
    audioSource: string
}

const LiveRadio: React.FC<Params> = ({ audioSource }) => {
    return (
        <div >
            <h6>Live Radio</h6>
            <div className="radio w-100 p-0">
                <span>Continue Listening</span>

                <audio controls className="w-100 mt-1">
                    <source src={audioSource} type="audio/ogg" />
                    <source src={audioSource} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}

export default LiveRadio
