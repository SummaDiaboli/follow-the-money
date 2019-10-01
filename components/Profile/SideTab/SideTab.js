import React from 'react'
import { FriendRequest, PlaylistItem } from '.'

const SideTab = () => {
    return (
        <div className="card sideTab mt-4 p-3" id="sideTab">
            <div className="mt-3 friend-requests">
                <div className="d-flex flex-column">

                    <div className="flex-row d-flex">
                        <h6>Friend Requests</h6>
                        <span className="subheading-filter color-red ml-auto">All</span>
                    </div>

                    <div className="requests mt-1">
                        <FriendRequest
                            userImage="../static/assets/img/user/nasir.jpg"
                            username="Nasir Ibrahim"
                            userID="2939"
                            userLocation="Abuja"
                        />
                        <FriendRequest
                            userImage="../static/assets/img/user/nwabuisi.jpg"
                            username="Nwabuisi Gospel"
                            userLocation="Kano"
                            userID="2933"
                        />
                        <FriendRequest
                            userImage="../static/assets/img/user/yhasmeen.jpg"
                            username="Yhasmeen Buba"
                            userLocation="Zaria"
                            userID="2239"
                        />
                        <FriendRequest
                            userImage="../static/assets/img/user/hamzat.jpg"
                            username="Hamzat Lawal"
                            userLocation="Abuja"
                            userID="3224"
                        />
                    </div>
                    <div className="flex-row mt-5 d-flex">
                        <h6>Favorite Playlists</h6>
                        <span className="subheading-filter color-red ml-auto">All</span>
                    </div>
                    <div className="playlists mt-1">
                        <ul className="p-0 d-flex flex-column">
                            <PlaylistItem
                                image="../static/assets/img/playlists/playlist1.jpg"
                                title="Battle Cry"
                                artist="Linkin Park"
                                duration="3:51"
                            />
                            <PlaylistItem
                                image="../static/assets/img/playlists/playlist1.jpg"
                                title="Space Oddity"
                                artist="David Bo"
                                duration="2:30"
                            />
                            <PlaylistItem
                                image="../static/assets/img/playlists/playlist1.jpg"
                                title="Animus Vox Cry"
                                artist="Glit Mob"
                                duration="4:20"
                            />
                            <PlaylistItem
                                image="../static/assets/img/playlists/playlist1.jpg"
                                title="Firefly"
                                artist="Ghe Sun"
                                duration="3:15"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideTab