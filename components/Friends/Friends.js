import React from 'react'
import { NotificationIcon } from '../User'
import { Searchbar } from '../Searchbar'
import FriendTile from './FriendTile'

const Friends = () => {
    return (
        <main>
            <div className="main" style={{ overflow: "hidden" }}>
                <nav>
                    <ul className="d-flex vertical-align">
                        <li>
                            <a href="#" className="active">All Friends</a>
                            <a href="#">Communities</a>
                            <a href="#">Following</a>
                            <a href="#">Nearby</a>
                            <a href="#">Recommendations</a>
                        </li>
                        <NotificationIcon />
                    </ul>
                    <hr className="w-100" />
                </nav>

                <div className="container-fluid content p-0 h-100">
                    <div className="row h-100 px-0 py-1 m-0 w-100">
                        <div className="col-12 h-100">
                            <div className="main-layout">
                                <Searchbar />
                                <div className="row m-0 mt-4 w-100 friends">
                                    <FriendTile
                                        userImage="static/assets/img/user/hamzat.jpg"
                                        username="Hamzat Lawal"
                                        userLocation="Abuja"
                                        userID="3774"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/yhasmeen.jpg"
                                        username="Yhasmeen Buba"
                                        userLocation="Lagos"
                                        userID="3244"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/nasir.jpg"
                                        username="Nasir Bukar Ibrahim"
                                        userLocation="Kenya"
                                        userID="2374"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/hanan.jpg"
                                        username="Christa Pinmi"
                                        userLocation="Abuja"
                                        userID="3475"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/nwabuisi.jpg"
                                        username="Nwabuisi Gospel"
                                        userLocation="Kano"
                                        userID="1353"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default Friends
