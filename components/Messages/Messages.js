import React, { useEffect } from 'react'
import { NotificationIcon } from '../User'
import MessageTile from './MessageTile'
import MessageDisplay from './MessageDisplay'

require('../../static/assets/css/pages/Messages.css')

const Messages = () => {
    useEffect(() => {
        const truncate = (id) => {
            let string = document.getElementById(id).innerHTML;
            var maxLength = 80;
            var result = string.substring(0, maxLength) + '...';
            document.getElementById(id).innerHTML = result;
        }
        truncate('truncate-text')
    })

    return (
        <main>
            <div className="main">
                <nav>
                    <ul className="d-flex vertical-align">
                        <NotificationIcon />
                    </ul>
                    <hr className="w-100" />
                </nav>
                <div className="container-fluid p-0 content">
                    <div className="row px-0 py-1 m-0 w-100 h-100">

                        <MessageDisplay />

                        <div className="col-4 pr-1"  style={{ height: "100%" }}>
                            <div className="card sideTab p-3">

                                <div className="d-flex w-100 search pb-3 px-1 flex-row vertical-align">
                                    <i className="fas fa-search"></i>
                                    <input type="text" placeholder="Search in all messages" className="ml-3 w-100" />
                                </div>

                                <ul className="nav nav-pills mb-3 py-1" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-unread-tab" data-toggle="pill" href="#pills-unread" role="tab" aria-controls="pills-unread" aria-selected="false">Unread</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-important-tab" data-toggle="pill" href="#pills-important" role="tab" aria-controls="pills-important" aria-selected="false">Important</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="pills-tabContent">

                                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                        <ul className="p-0">
                                            <MessageTile
                                                userPhoto="static/assets/img/user/nasir.jpg"
                                                username="Nasir Bukar Ibrahim"
                                                message="Doyin, are you here? Our partners from CODE are waiting for your presentation on the quantum spectrumetron in the space time of a quantum tunnel"
                                                timeSent="19:21"
                                                unreadCount="8"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/nwabuisi.jpg"
                                                username="Nwabuisi Ibrahim"
                                                message="Hey! What you think bout our presentation?"
                                                timeSent="6:09"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/yhasmeen.jpg"
                                                username="Yhasmeen Buba"
                                                message="You: Nice shot :)"
                                                timeSent="4:20"
                                                unreadCount="1"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            /><MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thanks a lot, bro"
                                                timeSent="22:01"
                                            />
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade" id="pills-unread" role="tabpanel" aria-labelledby="pills-unread-tab">
                                        <ul className="p-0">
                                            <MessageTile
                                                userPhoto="static/assets/img/user/nwabuisi.jpg"
                                                username="Nwabuisi Ibrahim"
                                                message="Hey! What you think bout our presentation?"
                                                timeSent="6:09"
                                                unreadCount="420"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/yhasmeen.jpg"
                                                username="Yhasmeen Buba"
                                                message="You: Nice shot"
                                                timeSent="23:59"
                                            />
                                            <MessageTile
                                                userPhoto="static/assets/img/user/hamzat.jpg"
                                                username="Hamzat Lawal"
                                                message="Thank you a lot"
                                                timeSent="19:08"
                                            />
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade" id="pills-important" role="tabpanel" aria-labelledby="pills-important-tab">
                                        <h6 className="color-grey">No important messages here.</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            body {
                font-family: 'Montserrat', sans-serif;
                background: #fff;
                color: #000;
                overflow-y: hidden;
            }

            a {
                text-decoration: none !important;
            }

            .font-segoe {
                font-family: 'Segoe UI', sans-serif;
            }

            .bg-red {
                background: #D10000;
            }

            .color-red {
                color: #D10000 !important;
            }

            .color-black {
                color: #000 !important;
            }

            .color-grey {
                color: #454545;
            }

            .smaller {
                font-size: 70%;
            }

            .pos-relative {
                position: relative;
            }

            .pos-absolute {
                position: absolute;
            }

            .vertical-align {
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
            }

            .main{
                background: #fff;
                padding: 1rem;
            }

            .vertical-align{
                display: flex;
                flex-flow: column;
                justify-content: start;
                align-items: center;
            }

            .middle-layout {
                height: 95%;
                overflow: auto;
            }

            .middle-layout.vertical-align{
                justify-content: center;
            }

            .middle-layout .no-selected{
                font-weight: 500;
                font-size: 1rem;
                color: #454545;
            }

            .card{
                border-radius: 0px;
            }

            .sideTab{
                border-left: 2px solid #EBEBEB;
                height: 95%;
            }

            .sideTab .nav-link{
                padding: 0rem;
                margin: 0rem 0.9rem;
                font-weight: 500;
                color: #000;
                font-size: 0.8rem;
            }

            .sideTab .nav-pills:after{
                content: '';
                background: #EBEBEB;
                width: 100%;
                height: 3px;
                position: absolute;
                top: 5.5rem;
                left: 0px;
                z-index: 1;
            }

            .sideTab .nav-link.active{
                background: white;
                color: #000;
                border-bottom: 2px solid #5085E8;
                padding-bottom: .5rem;
                position: relative;
                z-index: 2;
            }

            .sideTab .nav-link:nth-child(1){
                margin-left: 0rem;
            }

            .sideTab .search:after{
                content: '';
                background: #EBEBEB;
                width: 100%;
                height: 2px;
                position: absolute;
                top: 3rem;
                left: 0px;
            }

            .sideTab .search input::-webkit-input-placeholder {
                color: #454545!important;
                font-size: 0.9rem;
                font-weight: 500;
            }
            .sideTab .search input::-moz-placeholder {
                color: #454545!important;
                font-size: 0.8rem;
                font-weight: 500;
            }
            .sideTab .search input:-ms-input-placeholder {
                color: #454545!important;
                font-size: 0.8rem;
                font-weight: 500;
            }
            .sideTab .search input:-moz-placeholder {
                color: #454545!important;
                font-size: 0.8rem;
                font-weight: 500;
            }

            .sideTab .message{
                position: relative;
                list-style-type: none;
                cursor: pointer;
                margin: 1.5rem 0rem;
            }

            .sideTab .message:nth-child(1){
                margin-top: 0rem
            }

            .sideTab .message .message-content{
                font-size: 0.7rem;
                font-weight: 500;
            }

            .sideTab .message .time{
                font-size: 0.7rem;
                font-weight: 600;
            }

            .sideTab .message .amount{
                font-size: 0.6rem;
                font-weight: 600;
                color: #fff;
                background: #D10000;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
            }

            .sideTab .message img{
                border-radius: 50%;
                width: 44px;
                height: 44px;
            }

            .content{
                position: relative;
                top: -2rem;
                height: 100%;
            }
            `}</style>
        </main>
    )
}

export default Messages
