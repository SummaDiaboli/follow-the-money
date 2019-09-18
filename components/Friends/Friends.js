import React from 'react'
import { NotificationIcon } from '../User'
import { Searchbar } from '../Searchbar'
import FriendTile from './FriendTile'

const Friends = () => {
    return (
        <main>
            <div class="main">
                <nav>
                    <ul class="d-flex vertical-align">
                        <li>
                            <a href="#" class="active">All Friends</a>
                            <a href="#">Communities</a>
                            <a href="#">Following</a>
                            <a href="#">Nearby</a>
                            <a href="#">Recommendations</a>
                        </li>
                        <NotificationIcon />
                    </ul>
                    <hr class="w-100" />
                </nav>

                <div class="container-fluid content p-0 h-100">
                    <div class="row h-100 px-0 py-1 m-0 w-100">
                        <div class="col-12 h-100">
                            <div class="main-layout">
                                <Searchbar />
                                <div class="row m-0 mt-4 w-100 friends">
                                    <FriendTile
                                        userImage="static/assets/img/user/hamzat.jpg"
                                        username="Hamzat Lawal"
                                        userLocation="Abuja"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/yhasmeen.jpg"
                                        username="Yhasmeen Buba"
                                        userLocation="Lagos"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/nasir.jpg"
                                        username="Nasir Bukar Ibrahim"
                                        userLocation="Kenya"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/hanan.jpg"
                                        username="Christa Pinmi"
                                        userLocation="Abuja"
                                    />
                                    <FriendTile
                                        userImage="static/assets/img/user/nwabuisi.jpg"
                                        username="Nwabuisi Gospel"
                                        userLocation="Kano"
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
