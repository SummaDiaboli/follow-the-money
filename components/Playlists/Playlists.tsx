import React, { useState, useEffect } from "react";
import Spotlight from "./Spotlight";
import Playlist from "./Playlist";
import { NotificationIcon } from "../User";
import PlayingNowTracks from "./PlayingNowTracks";
import Link from "next/link";

const Playlists = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    const [playlists, setPlaylists] = useState([
        {
            name: "Daily Playlist",
            tracks: "60"
        },
        {
            name: "Monthly Playlists",
            tracks: "10"
        },
        {
            name: "My Playlist",
            tracks: "859"
        },
        {
            name: "Daily Playlist",
            tracks: "60"
        },
        {
            name: "Monthly Playlists",
            tracks: "10"
        }
    ]);

    const [spotlights, setSpotlights] = useState([
        {
            date: "Yesterday",
            title: "Reimagine Schools",
            guest: "Dr. Greg Colns"
        },
        {
            date: "2 days ago",
            title: "Mania",
            guest: "Kevwe"
        }
    ]);

    const [playNow, setPlayNow] = useState([
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Battle Cry",
            duration: "3:15",
            artist: "Linkin Park"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Animus Vox Cry",
            duration: "4:19",
            artist: "Linkin Park"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        },
        {
            imageSrc: "static/assets/img/playlists/playlist1.jpg",
            trackName: "Reimagine Schools",
            duration: "4:20",
            artist: "Dr. Greg Colns"
        }
    ]);

    return (
        <div className="main" style={{ overflow: "hidden" }}>
            <nav>
                <ul className="d-flex vertical-align">
                    <li>
                        <a href="#" className="active">
                            Playlist
                        </a>
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
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Search Playlists"
                                    value={searchValue}
                                    onChange={handleChange}
                                />
                                <button>
                                    <i className="fas fa-search ml-auto"></i>{" "}
                                </button>
                            </div>
                            <div className="row m-0 mt-3 w-100 playlists">
                                {playlists.map((playlist, index) =>
                                    searchValue == "" ? (
                                        <Link
                                            href="#"
                                            key={index}
                                        // href="/communities/[id]"
                                        // as={`/communities/${community.name}`}
                                        >
                                            <Playlist
                                                key={index}
                                                name={playlist.name}
                                                tracks={playlist.tracks.length}
                                            />
                                        </Link>
                                    ) : playlist.name
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase()) ? (
                                                <Link
                                                    href="#"
                                                    // href="/communities/[id]"
                                                    // as={`/communities/${community.name}`}
                                                    key={index}
                                                >
                                                    <Playlist
                                                        key={index}
                                                        name={playlist.name}
                                                        tracks={playlist.tracks.length}
                                                    />
                                                </Link>
                                            ) : (
                                                ""
                                            )
                                )}
                            </div>

                            <div className="row m-0 w-100 playlists spotlights mt-4">
                                <h6 className="d-block w-100 pl-3">
                                    Spotlights
                                </h6>
                                {spotlights.map((spotlight, index) => (
                                    <Spotlight
                                        key={index}
                                        date={spotlight.date}
                                        title={spotlight.title}
                                        guest={spotlight.guest}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-4 h-100 pr-1">
                        <div className="card sideTab">
                            <div>
                                <h6 className="heading pt-3 pl-3 m-0">
                                    Playing Now
                                </h6>
                            </div>
                            <div className="playlists mt-3">
                                <ul className="p-0 d-flex flex-column">
                                    {playNow.map((song, index) => (
                                        <PlayingNowTracks
                                            id={index}
                                            imageSrc={song.imageSrc}
                                            trackName={song.trackName}
                                            duration={song.duration}
                                            artist={song.artist}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playlists;
