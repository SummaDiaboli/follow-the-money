import React from 'react'

type Params = {
    isActive?: boolean,
    image: string,
    title: string,
    artistName: string,
    duration: string
}

const PlaylistTile: React.FC<Params> = ({ isActive, image, title, artistName, duration }) => {
    return (
        <li className={isActive ? "active" : null}>
            <div className="d-flex flex-row vertical-align p-2">
                <img src={image} alt="" />
                <a href="#"><div className="d-flex ml-2 flex-column">
                    <h6 className="title">{title}</h6>
                    <span className="artist pt-1">{artistName}</span>
                </div>
                </a>
                <div className="d-flex flex-row ml-auto vertical-align">
                    <span className="duration">{duration}</span>
                    <i className="fas fa-pause mx-4"></i>
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        </li>
    )
}

export default PlaylistTile
