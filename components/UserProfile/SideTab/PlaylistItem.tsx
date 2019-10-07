import React from 'react'

type Params = {
    image: string,
    title: string,
    artist: string,
    duration: string
}

const PlaylistItem: React.FC<Params> = ({ image, title, artist, duration }) => {
    return (
        <li>
            <div className="d-flex flex-row vertical-align">
                <img src={image} alt="" />
                <div className="d-flex flex-column ml-2">
                    <h5 className="color-grey m-0 font-medium small">{title}</h5>
                    <p className="smaller mt-1 m-0 color-grey font-medium">{artist}</p>
                </div>
                <div className="d-flex ml-auto options vertical-align flex-row">
                    <span className="duration">{duration}</span>
                    <button><i className="fas fa-play ml-3"></i></button>
                    <button><i className="fas fa-plus ml-3"></i></button>
                </div>
            </div>
        </li>
    )
}

export default PlaylistItem
