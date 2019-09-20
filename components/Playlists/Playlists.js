import React from 'react'
import { NotificationIcon } from '../User'

const Playlists = () => {
    return (
        <div class="main" style={{ overflow: "hidden" }}>
            <nav>
                <ul class="d-flex vertical-align">
                    <li>
                        <a href="#" class="active">Playlist</a>
                        <a href="#">Podcast</a>
                        <a href="#">FTM Radio</a>
                    </li>
                    <NotificationIcon />

                </ul>
                <hr className="w-100" />
            </nav>

            <div class="container-fluid content h-100 p-0">
                <div class="row px-0 h-100 py-1 m-0 w-100">
                    <div class="col-8 h-100">
                        <div class="middle-layout">
                            <div class="search pl-0 pt-2 mb-1">
                                <input type="text" class="" placeholder="Search Playlists" />
                                <button><i class="fas fa-search ml-auto"></i>  </button>
                            </div>
                            <div class="row m-0 mt-3 w-100 playlists">

                                <div class="col-4">
                                    <div class="wrapper">
                                        <div class="overlay"></div>
                                        <div class="over-overlay">
                                            <h6 class="mt-auto d-flex">Daily Playlist</h6>
                                            <span>60 tracks for you</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="wrapper">
                                        <div class="overlay"></div>
                                        <div class="over-overlay">
                                            <h6 class="mt-auto d-flex">Radio</h6>
                                            <span>Information on the go</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="wrapper">
                                        <div class="overlay"></div>
                                        <div class="over-overlay h-100">
                                            <h6 class="mt-auto d-flex">My playlists</h6>
                                            <span>859 tracks in 7 playlist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-0 w-100 playlists spotlights mt-4">
                                <h6 class="d-block w-100 pl-3">Spotlights</h6>
                                <div class="col-6 mt-2">
                                    <div class="wrapper">
                                        <div class="overlay"></div>
                                        <div class="over-overlay">
                                            <span class="date">Yesterday</span>
                                            <h6 class="mt-auto d-flex">Reimagine Schools</h6>
                                            <span>Dr. Greg Colns</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 mt-2">
                                    <div class="wrapper">
                                        <div class="overlay"></div>
                                        <div class="over-overlay">
                                            <span class="date">2 days ago</span>
                                            <h6 class="mt-auto d-flex">Mania</h6>
                                            <span>Kevwe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 h-100 pr-1">
                        <div class="card sideTab">
                            <div >
                                <h6 class="heading pt-3 pl-3 m-0">Playing Now</h6>
                            </div>
                            <div class="playlists mt-3">
                                <ul class="p-0 d-flex flex-column">
                                    <li>
                                        <div class="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div class="d-flex flex-column ml-2">
                                                <h5 class="m-0 font-medium small">Battle Cry</h5>
                                                <p class="smaller mt-1 m-0 font-medium">Linkin Park</p>
                                            </div>
                                            <div class="d-flex ml-auto options vertical-align flex-row">
                                                <span class="duration">3:51</span>
                                                <button><i class="fas fa-play ml-3"></i></button>
                                                <button><i class="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="active">
                                        <div class="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div class="d-flex flex-column ml-2">
                                                <h5 class="m-0 font-medium small">Reimagine Schools</h5>
                                                <p class="smaller mt-1 m-0 font-medium">Dr. Greg Colns</p>
                                            </div>
                                            <div class="d-flex ml-auto options vertical-align flex-row">
                                                <span class="duration">3:51</span>
                                                <button><i class="fas fa-pause ml-3"></i></button>
                                                <button><i class="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div class="d-flex flex-column ml-2">
                                                <h5 class="m-0 font-medium small">Space Oddity</h5>
                                                <p class="smaller mt-1 m-0 font-medium">David Bo</p>
                                            </div>
                                            <div class="d-flex ml-auto options vertical-align flex-row">
                                                <span class="duration">3:51</span>
                                                <button><i class="fas fa-play ml-3"></i></button>
                                                <button><i class="fas fa-check ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div class="d-flex flex-column ml-2">
                                                <h5 class="m-0 font-medium small">Animus Vox Cry</h5>
                                                <p class="smaller mt-1 m-0 font-medium">Glit Mob</p>
                                            </div>
                                            <div class="d-flex ml-auto options vertical-align flex-row">
                                                <span class="duration">3:51</span>
                                                <button><i class="fas fa-play ml-3"></i></button>
                                                <button><i class="fas fa-plus ml-3"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex flex-row vertical-align">
                                            <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                            <div class="d-flex flex-column ml-2">
                                                <h5 class="m-0 font-medium small">Firefly</h5>
                                                <p class="smaller mt-1 m-0 font-medium">Ghe Sun</p>
                                            </div>
                                            <div class="d-flex ml-auto options vertical-align flex-row">
                                                <span class="duration">3:51</span>
                                                <button><i class="fas fa-play ml-3"></i></button>
                                                <button><i class="fas fa-plus ml-3"></i></button>
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
