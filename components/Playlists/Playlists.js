import React from 'react'
import Spotlight from './Spotlight'
import Playlist from './Playlist'

import { NotificationIcon } from '../User'
import PlayingNowTracks from './PlayingNowTracks'

const Playlists = () => {
    return (
        <div className="main" style={{ overflow: "hidden" }}>
            <nav>
                <ul className="d-flex vertical-align">
                    <li>
                        <a href="#" className="active">Playlist</a>
                        <a href="#">Podcast</a>
                        <a href="#">FTM Radio</a>
                    </li>
                    <NotificationIcon />
                </ul>
                <hr className="w-100" />
            </nav>

            <div className="container-fluid content h-100 p-0">
                <div className="row px-0 h-100 py-1 m-0 w-100">
                    <div className="col-8 h-100">
                        <div className="middle-layout">
                            <div className="search pl-0 pt-2">
                                <input type="text" className="" placeholder="Search Playlists" />
                                <button><i className="fas fa-search ml-auto"></i>  </button>
                            </div>
                            <div className="row m-0 mt-3 w-100 playlists">
                                <Playlist name="Daily Playlist" tracks="60" />
                                <Playlist name="Monthly Playlist" tracks="10" />
                                <Playlist name="My Playlist" tracks="859" />
                                <Playlist name="Daily Playlist" tracks="60" />
                                <Playlist name="Monthly Playlist" tracks="10" />
                                <Playlist name="My Playlist" tracks="859" />
                            </div>
                            <div className="row m-0 w-100 playlists spotlights mt-4">
                                <h6 className="d-block w-100 pl-3">Spotlights</h6>
                                <Spotlight date="Yesterday" title="Reimagine Schools" guest="Dr. Greg Colns" />
                                <Spotlight date="2 days ago" title="Mania" guest="Kevwe" />
                                <Spotlight date="Yesterday" title="Reimagine Schools" guest="Dr. Greg Colns" />
                                <Spotlight date="2 days ago" title="Mania" guest="Kevwe" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 h-100 pr-1">
                        <div className="card sideTab">
                            <div >
                                <h6 className="heading pt-3 pl-3 m-0">Playing Now</h6>
                            </div>
                            <div className="playlists mt-3">
                                <ul className="p-0 d-flex flex-column">
                                    <PlayingNowTracks
                                        id="1"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Battle Cry"
                                        duration="3:15"
                                        guest="Linkin Park" />

                                    <PlayingNowTracks
                                        id="2"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Reimagine Schools"
                                        duration="4:49"
                                        guest="Dr. Greg Colns" />

                                    <PlayingNowTracks
                                        id="3"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Space Oddity"
                                        duration="3:48"
                                        guest="David Bo" />

                                    <PlayingNowTracks
                                        id="4"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Animus Vox Cry"
                                        duration="4:19"
                                        guest="Dr. Greg Colns" />

                                    {/* <li className="active">
                                        <div className="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div className="d-flex flex-column ml-2">
                                                <h5 className="m-0 font-medium small">Reimagine Schools</h5>
                                                <p className="smaller mt-1 m-0 font-medium">Dr. Greg Colns</p>
                                            </div>
                                            <div className="d-flex ml-auto options vertical-align flex-row">
                                                <span className="duration">3:51</span>
                                                <button><i className="fas fa-pause ml-3"></i></button>
                                                <button><i className="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li> */}
                                    <PlayingNowTracks
                                        id="5"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Firefly"
                                        duration="3:18"
                                        guest="Ghe Sun" />

                                    <PlayingNowTracks
                                        id="6"
                                        imageSrc="static/assets/img/playlists/playlist1.jpg"
                                        trackName="Skydance"
                                        duration="4:12"
                                        guest="Vue Jay" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Playlists
