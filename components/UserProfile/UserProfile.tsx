import React from 'react'
import { NotificationIcon } from '../User'
import AboutProfile from './AboutProfile'
import { TimelineCarousel } from './TimelineCarousel'
import { DirectMessage } from '.'
import ProfilePosts from './ProfilePosts/ProfilePosts'
import InfoCard from './InfoCard'
import { SideTab } from './SideTab'

const UserProfile = () => {
    return (
        <>
            <main style={{ paddingTop: "0px" }}>
                <div className="main pt-3" id="main" style={{ paddingTop: "0px" }}>
                    <nav className="pt-3">
                        <ul className="d-flex vertical-align">
                            <NotificationIcon />
                        </ul>
                        <hr className="w-100" />
                    </nav>

                    <AboutProfile
                        userImage="../static/assets/img/user/hamzat.jpg"
                        username="Hamzat Lawal"
                        description="Activist | Leading a Movement of Grassroots Campaigners in Rural Communities @4lowthemoney |Founder/CEO@Connected_dev | Board Member @AYICC #SDGs"
                    />

                    <nav className="pt-2">
                        <ul className="d-flex py-2 vertical-align">
                            <li>
                                <a href="#" className="active">Timeline</a>
                                <a href="#">Friends</a>
                                <a href="#">Photos</a>
                                <a href="#">More</a>
                            </li>
                        </ul>
                        <hr className="w-100" />
                    </nav>

                    <div className="container-fluid content p-0">
                        <div className="row h-100 px-0 py-1 m-0 w-100">
                            <div className="col-12">
                                <div className="main-layout">
                                    <TimelineCarousel />

                                    <div className="row m-0 mt-4 w-100 friends">
                                        <div className="col-8 pl-0 h-100">
                                            <div className="middle-layout">
                                                <DirectMessage userImage="../static/assets/img/user/user.jpg" userFname="Hamzat" />
                                                <ProfilePosts />
                                            </div>
                                        </div>
                                        <div className="col-4 pr-1">
                                            <InfoCard
                                                likes="739k"
                                                followers="254k"
                                                friends="193"
                                                posts="203"
                                            />

                                            <SideTab />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>




            <style jsx>{`
            .main{
                /* padding-top: 0px; */
                overflow-y: auto;
                background: #fff;
            }

            .profile img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            .profile .name{
                font-weight: 600;
                color: #454545;
            }

            .profile .description p{
                font-size: 0.7rem;
            }

            .profile .options{
                font-size: 1.3em;
                color: #7e7e7e;
            }

            .profile .options button{
                padding: 0rem;
                background: transparent!important;
                outline: none!important;
                border: none!important;
                color: #636363;
            }

            button{
                padding: 0rem;
                background: transparent!important;
                outline: none!important;
                border: none!important;
            }

            .profile .options button:hover{
                opacity: .5;
            }

            .main-layout .images{
                overflow-x: auto;
            }

            .main-layout .images::-webkit-scrollbar {
                height: 6px;
                background-color: rgba(0, 0, 0, 0.2);
            }

            .main-layout .images::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 5px;
                padding: 1rem;
            }

            .main-layout .images::-moz-scrollbar {
                height: 6px;
                background-color: transparent;
            }

            .main-layout .images::-moz-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 5px;
                padding: 1rem;
            }


            .main-layout .images li{
                list-style-type: none;
            }

            .vertical-align{
                display: flex;
                flex-flow: column;
                justify-content: start;
                align-items: center;
            }

            .friend-requests .requests img{
                width: 48px;
                border-radius: 50%;
            }

            .friend-requests .requests i{
                font-size: 1em;
                color: #d6d6d6;
            }

            .sideTab{
                height: 100%;
                position: relative;
                transition: 0.2s top ease;
                -webkit-transition: 0.2s top ease;
                -moz-transition: 0.2s top ease;
                -ms-transition: 0.2s top ease;
            }

            .sticky {
                position: fixed;
                top: 0rem;
                right: 0rem;
                margin-right: 3.2rem;
                left: 73%;
                height: 81%;
            }

            .profile-details h6{
                font-size: 0.8rem;
            }

            .sideTab .playlists img{
                width: 44px;
                height: 44px;
                border-radius: 7px;
            }

            .sideTab .playlists i{
                color: #d6d6d6;
            }

            .sideTab .playlists .duration{
                color: #454545;
                font-size: 0.7rem;
            }

            .sideTab .playlists li{
                margin: .5rem 0rem;
                list-style-type: none;
            }

            .post-popup{
                position: absolute!important;
                right: 0px;
                background: #8a8a8a;
                color: white;
                font-size: 0.8rem;
                top: -29px;
                display: flex;
                opacity: 0;
            }

            .post-popup button{
                color: #fff;
            }
            
            nav{
                display:none!important;
            }

            @media only screen and (max-width: 1023px) {
                hr{
                    display:none;
                }
            }
            `}
            </style>
        </>
    )
}

export default UserProfile
