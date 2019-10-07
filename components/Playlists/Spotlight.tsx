import React from 'react'

type Params = {
    date: string | Date,
    title: string,
    guest: string
}

const Spotlight: React.FC<Params> = ({ date, title, guest }) => {
    return (
        <div className="col-6 mt-2 mb-4">
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