import React, { useState, useEffect, Component } from 'react'
import './Sidebar.css'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'
import Router from 'next/router'
// import nextCookie from 'next-cookies'

interface Params {
    children: any,
    authUser: any
}

const Sidebar: React.FC<Params> = ({ children, authUser }) => {
    /**
     * Setting active nav item
     */
    const [navState, setNavState] = useState('')

    const changeNav = (pathname: string) => {
        /**
         * Do not mess with this!!!
         * This switch statement uses RegEx to
         * determine whether or not the pathname
         * contains whetever is being tested against
         */
        switch (true) {
            case /\/$/.test(pathname):
                return setNavState('feed')
            case /\/feed/.test(pathname):
                return setNavState('feed')
            case /\/messages/.test(pathname):
                return setNavState('messages')
            // case /\/friends/.test(pathname):
            //     return setNavState('friends')
            case /\/communities/.test(pathname):
                return setNavState('communities')
            case /\/playlists/.test(pathname):
                return setNavState('playlists')
            // case /\/events/.test(pathname):
            //     return setNavState('events')
            case /\/settings/.test(pathname):
                return setNavState('settings')
        }
    }

    // const [state, dispatch] = useReducer(changeNav, navState)

    // Fetch data from
    const [value, setValue] = useState(Cookies.getJSON('userData'))

    /**
     * Number of notifications
     */
    const [username, setUsername] = useState(authUser ? authUser.username : "")
    const [messagesCount, setMessagesCount] = useState(9)
    const [friendsCount, setFriendsCount] = useState(0)
    const [communitiesCount, setCommunitiesCount] = useState(0)
    const [eventsCount, setEventsCount] = useState(0)

    const signOut = () => {
        Router.reload()
        sessionStorage.clear()
        Cookies.remove('userData')
    }

    useEffect(() => {
        // setValue(localStorage.getItem('userData'))
        return () => {
            setUsername(value != null || value != undefined ? value.username : '')
            // setValue(Cookies.getJSON('userData'))
            // console.log(value)
        }
    }, [username])

    useEffect(() => {
        changeNav(window.location.pathname)
    }, [changeNav])

    return (
        <main>
            <div className="container-fluid p-0 h-100">
                <div className="sidebar py-4 px-5">
                    <img src="../static/assets/img/logo-red.png" className="logo" alt="logo" />

                    <p className="font-weight-bold user pt-4">Hi {username}</p>

                    <ul className="mt-2">
                        <li>
                            <Link href='/feed'>
                                <a className={navState == 'feed' ? "active" : ""}>
                                    <i className="far fa-newspaper mr-2 text-center"></i>
                                    <span>Feed</span>
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/messages">
                                <a className={navState == 'messages' ? "active" : ""}>
                                    <i className="fas fa-inbox mr-2 text-center"></i>
                                    <span>Messages</span>
                                    {
                                        messagesCount != 0
                                            ? <div className="amount ml-auto">
                                                <span>{messagesCount}</span>
                                            </div>
                                            : null
                                    }
                                </a>
                            </Link>
                        </li>

                        {/* <li>
                            <Link href="/friends">
                                <a className={navState == 'friends' ? "active" : ""}>
                                    <i className="fas fa-user mr-2 text-center"></i>
                                    <span>Friends</span>
                                    {
                                        friendsCount != 0
                                            ? <div className="amount ml-auto">
                                                <span>{friendsCount}</span>
                                            </div>
                                            : null
                                    }
                                </a>
                            </Link>
                        </li> */}

                        <li>
                            <Link href="/communities">
                                <a className={navState == 'communities' ? "active" : ""}>
                                    <i className="fas fa-user-friends mr-2 text-center"></i>
                                    <span>Communities</span>
                                    {
                                        communitiesCount != 0
                                            ? <div className="amount ml-auto">
                                                <span>{communitiesCount}</span>
                                            </div>
                                            : null
                                    }
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/playlists">
                                <a className={navState == 'playlists' ? "active" : ""}>
                                    <i className="fas fa-list-alt mr-2 text-center"></i>
                                    <span>Playlists</span>
                                </a>
                            </Link>
                        </li>

                        {/* <li>
                            <Link href="/events">
                                <a className={navState == 'events' ? "active" : ""}>
                                    <i className="far fa-calendar mr-2 text-center"></i>
                                    <span>Events</span>
                                    {
                                        eventsCount != 0
                                            ? <div className="amount ml-auto">
                                                <span>{eventsCount}</span>
                                            </div>
                                            : null
                                    }
                                </a>
                            </Link>
                        </li> */}

                        {/* <li>
                            <Link href="/settings">
                                <a className={navState == 'settings' ? "active" : ""}>
                                    <i className="fas fa-cog mr-2 text-center"></i>
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li> */}
                    </ul>                    
                </div>
            </div>
            {children}
        </main>
    )
}

/* const fetchData = async () => {
    const userData = localStorage.getItem('userData')
    console.log(userData)
    const res = await fetch(`/api/users?username=${username}&password=${password}`)
    return console.log(res)
}
 */
export default Sidebar
