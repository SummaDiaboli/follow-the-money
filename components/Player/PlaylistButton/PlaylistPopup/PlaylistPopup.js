import React from 'react'
import PlaylistTile from './PlaylistTile'

const PlaylistPopup = () => {
    return (
        <div className="playlist bg-red p-3" id="playlist-popup">
            <h6 className="font-semiBold heading">Playlist</h6>
            <nav>
                <ul className="d-flex flex-row mt-3">
                    <li>
                        <a href="#" className="active">Recent Playlist</a>
                    </li>
                    <li>
                        <a href="#" className=" mx-4">Radio</a>
                    </li>
                    <li>
                        <a href="#" className="">Playlists</a>
                    </li>
                </ul>
            </nav>
            <div className="search px-3 py-2">
                <i className="fas fa-search"></i>
                <input type="text" className="w-50 ml-2" placeholder="What's on your mind?" />
            </div>
            <div className="recent-playlists">
                <ul className="p-0 mr-1">
                    <PlaylistTile
                        isActive
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Reimagine Schools"
                        artistName="Dr Greg Golns"
                        duration="3:11"
                    />
                    <PlaylistTile
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Island in the sun"
                        artistName="Kevwe"
                        duration="3:20"
                    />
                    <PlaylistTile
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Nico and the Niners"
                        artistName="Mukthar"
                        duration="3:37"
                    />
                    <PlaylistTile
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Wake"
                        artistName="Innocent Eteng"
                        duration="4:20"
                    />
                    <PlaylistTile
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Battle Cry"
                        artistName="Connected Students"
                        duration="3:11"
                    />
                    <PlaylistTile
                        image="static/assets/img/playlists/playlist1.jpg"
                        title="Thousand Years"
                        artistName="Moyi Abioye"
                        duration="3:11"
                    />
                </ul>
            </div>
        </div>
    )
}

export default PlaylistPopup
