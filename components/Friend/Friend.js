import React from 'react'
import { NotificationIcon } from '../User'
import AboutFriend from './AboutFriend'
import { TimelineCarousel } from './TimelineCarousel'
import { DirectMessage } from '.'
import FriendPosts from './FriendPosts/FriendPosts'

const Friend = () => {
    return (
        <>
            <main style={{ paddingTop: "0px" }}>
                <div className="main" id="main" style={{ paddingTop: "0px" }}>
                    <nav className="pt-3">
                        <ul className="d-flex vertical-align">
                            <NotificationIcon />
                        </ul>
                        <hr className="w-100" />
                    </nav>

                    <AboutFriend
                        userImage="static/assets/img/user/hamzat.jpg"
                        username="Hamzat Lawal"
                        description="Activist | Leading a Movement of Grassroots Campaigners in Rural Communities @4lowthemoney |Founder/CEO@Connected_dev | Board Member @AYICC #SDGs"
                    />

                    <nav className="pt-2">
                        <ul className="d-flex py-2 vertical-align">
                            <li>
                                <a href="#" className="active">Timeline</a>
                                <a href="#">Friends</a>
                                <a href="#">Photo</a>
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
                                                <DirectMessage userImage="static/assets/img/user/user.jpg" userFname="Hamzat" />
                                                <FriendPosts />
                                            </div>
                                        </div>
                                        <div className="col-4 pr-1">
                                            <div className="card py-3 px-0">
                                                <div className="row m-0 profile-details w-100">
                                                    <div className="col-3 text-center">
                                                        <h6 className="color-red">739k <span className="small">likes</span></h6>
                                                    </div>
                                                    <div className="col-3 text-center">
                                                        <h6 className="color-red">254k <span className="small">followers</span></h6>
                                                    </div>
                                                    <div className="col-3 text-center">
                                                        <h6 className="color-red">193 <span className="small">friends</span></h6>
                                                    </div>
                                                    <div className="col-3 text-center">
                                                        <h6 className="color-red">203 <span className="small">posts</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card sideTab mt-4 p-3" id="sideTab">
                                                <div className="mt-3 friend-requests">
                                                    <div className="d-flex flex-column">
                                                        <div className="flex-row d-flex">
                                                            <h6>Friend Requests</h6>
                                                            <span className="subheading-filter color-red ml-auto">All</span>
                                                        </div>
                                                        <div className="requests mt-1">
                                                            <div className="d-flex flex-row vertical-align">
                                                                <img src="static/assets/img/user/nasir.jpg" alt="" />
                                                                <div className="d-flex flex-column ml-2">
                                                                    <h5 className="color-grey m-0 font-medium small">Nasir Bukar Ibrahim</h5>
                                                                    <p className="smaller mt-1 m-0 color-grey font-medium">Abuja</p>
                                                                </div>
                                                                <div className="d-flex ml-auto flex-row">
                                                                    <i className="far fa-comment-alt"></i>
                                                                    <i className="fas fa-ellipsis-v ml-3"></i>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row mt-3 vertical-align">
                                                                <img src="static/assets/img/user/nwabuisi.jpg" alt="" />
                                                                <div className="d-flex flex-column ml-2">
                                                                    <h5 className="color-grey m-0 font-medium small">Nwabuisi Gospel</h5>
                                                                    <p className="smaller mt-1 m-0 color-grey font-medium">Kano</p>
                                                                </div>
                                                                <div className="d-flex ml-auto flex-row">
                                                                    <i className="far fa-comment-alt"></i>
                                                                    <i className="fas fa-ellipsis-v ml-3"></i>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row mt-3 vertical-align">
                                                                <img src="static/assets/img/user/yhasmeen.jpg" alt="" />
                                                                <div className="d-flex flex-column ml-2">
                                                                    <h5 className="color-grey m-0 font-medium small">Yhasmeen Buba</h5>
                                                                    <p className="smaller mt-1 m-0 color-grey font-medium">Zaria</p>
                                                                </div>
                                                                <div className="d-flex ml-auto flex-row">
                                                                    <i className="far fa-comment-alt"></i>
                                                                    <i className="fas fa-ellipsis-v ml-3"></i>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row mt-3 vertical-align">
                                                                <img src="static/assets/img/user/hamzat.jpg" alt="" />
                                                                <div className="d-flex flex-column ml-2">
                                                                    <h5 className="color-grey m-0 font-medium small">Hamzat Lawal</h5>
                                                                    <p className="smaller mt-1 m-0 color-grey font-medium">Abuja</p>
                                                                </div>
                                                                <div className="d-flex ml-auto flex-row">
                                                                    <i className="far fa-comment-alt"></i>
                                                                    <i className="fas fa-ellipsis-v ml-3"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-row mt-5 d-flex">
                                                            <h6>Favorite Playlists</h6>
                                                            <span className="subheading-filter color-red ml-auto">All</span>
                                                        </div>
                                                        <div className="playlists mt-1">
                                                            <ul className="p-0 d-flex flex-column">
                                                                <li>
                                                                    <div className="d-flex flex-row vertical-align">
                                                                        <img src="static/assets/img/playlists/playlist1.jpg" alt="" />
                                                                        <div className="d-flex flex-column ml-2">
                                                                            <h5 className="color-grey m-0 font-medium small">Battle Cry</h5>
                                                                            <p className="smaller mt-1 m-0 color-grey font-medium">Linkin Park</p>
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
                                                                            <h5 className="color-grey m-0 font-medium small">Space Oddity</h5>
                                                                            <p className="smaller mt-1 m-0 color-grey font-medium">David Bo</p>
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
                                                                            <h5 className="color-grey m-0 font-medium small">Animus Vox Cry</h5>
                                                                            <p className="smaller mt-1 m-0 color-grey font-medium">Glit Mob</p>
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
                                                                            <h5 className="color-grey m-0 font-medium small">Firefly</h5>
                                                                            <p className="smaller mt-1 m-0 color-grey font-medium">Ghe Sun</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <div className="modal fade postModal" tabindex="-1" role="dialog" aria-labelledby="postModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="d-flex flex-row w-100 h-100">
                            <div className="img-post">
                                <img src="static/assets/img/posts/post1-quality.jpg" className="img-post" alt="" />
                            </div>
                            <div className="h-100 px-0 py-3 right">
                                <div className="user-comment-wrapper">
                                    <div className="user-comment p-3">
                                        <div className="comment user-post d-flex">
                                            <img className="rounded-circle mr-3" src="static/assets/img/user/user.jpg" alt="" />
                                            <input type="text" className="w-50" placeholder="Add a comment..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="post source-post p-3 w-100">
                                    <div className="w-100 d-flex flex-column">
                                        <div className="user d-flex vertical-align flex-row">
                                            <img src="static/assets/img/user/hamzat.jpg" className="rounded-circle mr-3" alt="" />
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row w-100">
                                                    <h5>Hamzat Lawal</h5>
                                                    <i className="far ml-1 fa-check-circle color-red fa-sm"></i>

                                                </div>
                                                <span>8:15 PM, yesterday</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p className="mt-3">Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time  <span className="color-red">@UKinNigeria</span> High Commissioner <span className="color-red">@CatrionaLaing1</span>
                                                during <span className="color-red">#QBP19</span> She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring
                                                collaborations centered on innovation #SDGs
                                            </p>
                                            <div className="d-flex flex-row actions mt-3">
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align">
                                                        <i className="far fa-heart"></i>
                                                        <span className="ml-1">2.1k</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="far fa-comment"></i>
                                                        <span className="ml-1">201</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="fas fa-retweet"></i>
                                                        <span className="ml-1">1.2k</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments p-0 mt-4">
                                    <h6 className="heading px-3">All Comments</h6>
                                    <div className="post w-100 p-3">
                                        <div className="w-100 d-flex flex-column">
                                            <div className="user d-flex vertical-align flex-row">
                                                <img src="static/assets/img/user/nasir.jpg" className="rounded-circle mr-2" alt="" />
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex flex-row w-100">
                                                        <h5 className="mb-1">Nasir Bukar Ibrahim</h5>
                                                    </div>
                                                    <span>8:15 PM, yesterday</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p className="mt-2 mb-2">Hamzy, it was amazing! Every single word of your brilliant speech was fulﬁlled of inspiration
                                                </p>
                                                <div className="d-flex flex-row actions mt-1">
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align">
                                                            <i className="far fa-heart"></i>
                                                            <span className="ml-1">2.1k</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align ml-3">
                                                            <i className="far fa-comment"></i>
                                                            <span className="ml-1">201</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align ml-3">
                                                            <i className="fas fa-retweet"></i>
                                                            <span className="ml-1">1.2k</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post w-100 p-3">
                                        <div className="w-100 d-flex flex-column">
                                            <div className="user d-flex vertical-align flex-row">
                                                <img src="static/assets/img/user/yhasmeen.jpg" className="rounded-circle mr-2" alt="" />
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex flex-row w-100">
                                                        <h5 className="mb-1">Yhasmeen Buba</h5>
                                                    </div>
                                                    <span>8:30 AM</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p className="mt-2 mb-2">It’s really nice to see you on this conf. IMHO, was the only interesting speaker at all
                                                </p>
                                                <div className="d-flex flex-row actions mt-1">
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align">
                                                            <i className="far fa-heart"></i>
                                                            <span className="ml-1">2.1k</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align ml-3">
                                                            <i className="far fa-comment"></i>
                                                            <span className="ml-1">201</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="d-flex flex-row vertical-align ml-3">
                                                            <i className="fas fa-retweet"></i>
                                                            <span className="ml-1">1.2k</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .main{
                /* padding-top: 0px; */
                overflow-y: auto;
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
                position: absolute;
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
            `}</style>
        </>
    )
}

export default Friend
