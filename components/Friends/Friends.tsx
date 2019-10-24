import React, { useState } from 'react'
import { NotificationIcon } from '../User'
import { Searchbar } from '../Searchbar'
import FriendTile from './FriendTile'

const Friends = () => {
    const [friends, setFriends] = useState(
        [
            {
                userImage: "static/assets/img/user/hamzat.jpg",
                name: "Hamzat Lawal",
                userName: "hamzat",
                userLocation: "Abuja"
            },
            {
                userImage: "static/assets/img/user/yhasmeen.jpg",
                name: "Yhasmeen Buba",
                userName: "yhasmeen",
                userLocation: "Lagos"
            },
            {
                userImage: "static/assets/img/user/nasir.jpg",
                name: "Nasir Ibrahim",
                userName: "nasir",
                userLocation: "Abuja"
            },
            {
                userImage: "static/assets/img/user/hanan.jpg",
                name: "Christa Pinmi",
                userName: "christa",
                userLocation: "Port Harcourt"
            },
            {
                userImage: "static/assets/img/user/nwabuisi.jpg",
                name: "Nwabuisi Gospel",
                userName: "nwabuisi",
                userLocation: "Adamawa"
            },
        ]
    )

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
                                    {friends.map((friend, index) => (
                                        <FriendTile
                                            userID={index}
                                            userImage={friend.userImage}
                                            name={friend.name}
                                            userName={friend.userName}
                                            userLocation={friend.userLocation}
                                        />
                                    ))}
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
