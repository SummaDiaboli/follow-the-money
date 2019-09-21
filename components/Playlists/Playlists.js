import React from 'react'
import Spotlight from './Spotlight'
import { NotificationIcon } from '../User'

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
                            <div className="search pl-0 pt-2 mb-1">
                                <input type="text" className="" placeholder="Search Playlists" />
                                <button><i className="fas fa-search ml-auto"></i>  </button>
                            </div>
                            <div className="row m-0 mt-3 w-100 playlists">

                                <div className="col-4">
                                    <div className="wrapper">
                                        <div className="overlay"></div>
                                        <div className="over-overlay">
                                            <h6 className="mt-auto d-flex">Daily Playlist</h6>
                                            <span>60 tracks for you</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="wrapper">
                                        <div className="overlay"></div>
                                        <div className="over-overlay">
                                            <h6 className="mt-auto d-flex">Radio</h6>
                                            <span>Information on the go</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="wrapper">
                                        <div className="overlay"></div>
                                        <div className="over-overlay h-100">
                                            <h6 className="mt-auto d-flex">My playlists</h6>
                                            <span>859 tracks in 7 playlist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 w-100 playlists spotlights mt-4">
                                <h6 className="d-block w-100 pl-3">Spotlights</h6>
                                <Spotlight date="Yesterday" title="Reimagine Schools" guest="Dr. Greg Colns"/>
                                <Spotlight date="2 days ago" title="Mania" guest="Kevwe"/>
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
                                    <li>
                                        <div className="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div className="d-flex flex-column ml-2">
                                                <h5 className="m-0 font-medium small">Battle Cry</h5>
                                                <p className="smaller mt-1 m-0 font-medium">Linkin Park</p>
                                            </div>
                                            <div className="d-flex ml-auto options vertical-align flex-row">
                                                <span className="duration">3:51</span>
                                                <button><i className="fas fa-play ml-3"></i></button>
                                                <button><i className="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="active">
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
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div className="d-flex flex-column ml-2">
                                                <h5 className="m-0 font-medium small">Space Oddity</h5>
                                                <p className="smaller mt-1 m-0 font-medium">David Bo</p>
                                            </div>
                                            <div className="d-flex ml-auto options vertical-align flex-row">
                                                <span className="duration">3:51</span>
                                                <button><i className="fas fa-play ml-3"></i></button>
                                                <button><i className="fas fa-check ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div className="d-flex flex-column ml-2">
                                                <h5 className="m-0 font-medium small">Animus Vox Cry</h5>
                                                <p className="smaller mt-1 m-0 font-medium">Glit Mob</p>
                                            </div>
                                            <div className="d-flex ml-auto options vertical-align flex-row">
                                                <span className="duration">3:51</span>
                                                <button><i className="fas fa-play ml-3"></i></button>
                                                <button><i className="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div className="d-flex flex-column ml-2">
                                                <h5 className="m-0 font-medium small">Firefly</h5>
                                                <p className="smaller mt-1 m-0 font-medium">Ghe Sun</p>
                                            </div>
                                            <div className="d-flex ml-auto options vertical-align flex-row">
                                                <span className="duration">3:51</span>
                                                <button><i className="fas fa-play ml-3"></i></button>
                                                <button><i className="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
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
