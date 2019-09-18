import React from 'react'

const PlayerControls = () => {
    return (
        <div className="col-4 d-flex h-100">
            <div className="mx-auto flex-column h-100 pos-relative ">
                <div className="d-flex flex-row controls player">
                    <i className="fas fa-step-backward"></i>
                    <i className="fas active fa-pause mx-4"></i>
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
