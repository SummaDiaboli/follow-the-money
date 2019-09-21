import React from 'react'

const Spotlight = ({ date, title, guest }) => {
    return (
        <div className="col-6 mt-2">
            <div className="wrapper">
                <div className="overlay"></div>
                <div className="over-overlay">
                    <span className="date">{date}</span>
                    <h6 className="mt-auto d-flex">{title}</h6>
                    <span>{guest}</span>
                </div>
            </div>
        </div>
    )
}

export default Spotlight