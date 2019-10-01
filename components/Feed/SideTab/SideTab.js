import React from 'react'
import FriendRequest from './FriendRequest'
import LiveRadio from './LiveRadio'
import { UpcomingEvents } from './UpcomingEvents'

const SideTab = () => {
    return (
        <div className="col-4 h-100 pr-0">
            <div className="card sideTab p-3" style={{ height: "90%" }}>
                <LiveRadio audioSource="https://backlinq.ng/ftm/ideas-radio-show.ogg"/>

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
                                name="Nasir Bukar Ibrahim"
                                userLocation="Abuja"
                                userName="nasir"
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/nwabuisi.jpg")}
                                name="Nwabuisi Gospel"
                                userLocation="Kano"
                                userName="nwabuisi"
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/yhasmeen.jpg")}
                                name="Yhasmeen Buba"
                                userLocation
                                userName="yhasmeen"
                            />

                            <FriendRequest
                                userPhoto={require("../../../static/assets/img/user/hamzat.jpg")}
                                name="Hamzat Lawal"
                                userLocation="Abuja"
                                userName="hamzat"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideTab
