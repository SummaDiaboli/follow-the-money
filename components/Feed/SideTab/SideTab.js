import React from 'react'
import FriendRequest from './FriendRequest'
import LiveRadio from './LiveRadio'
import { UpcomingEvents } from './UpcomingEvents'

const SideTab = () => {
    return (
        <div className="col-4 h-100 pr-1">
            <div className="card sideTab p-3" style={{ height: "90%" }}>
                <LiveRadio audioSource={null}/>

                <UpcomingEvents />

                <div className="mt-3 friend-requests">
                    <div className="d-flex flex-column">
                        <div className="flex-row d-flex">

                            <h6>Friend Requests</h6>
                            <span className="subheading-filter color-red ml-auto">All</span>

                        </div>

                        <div className="requests mt-1">

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/nasir.jpg")}
                                username="Nasir Bukar Ibrahim"
                                userLocation="Abuja"
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/nwabuisi.jpg")}
                                username="Nwabuisi Gospel"
                                userLocation="Kano"
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/yhasmeen.jpg")}
                                username="Yhasmeen Buba"
                                userLocation
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/hamzat.jpg")}
                                username="Hamzat Lawal"
                                userLocation="Abuja"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideTab
