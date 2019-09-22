import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'
// import nextCookie from 'next-cookies'

const Sidebar = ({ children, authUser }) => {
    /**
     * Setting active nav item
     */
    const [navState, setNavState] = useState('feed')

    // const [userData, setUserData] = useState(localStorage.getItem('userData'))

    const changeNav = (pathname) => {
        switch (pathname) {
            case '/feed':
                return setNavState('feed')
            case '/messages':
                return setNavState('messages')
            case '/friends':
                return setNavState('friends')
            case '/communities':
                return setNavState('communities')
            case '/playlists':
                return setNavState('playlists')
            case '/events':
                return setNavState('events')
            case '/settings':
                return setNavState('settings')
        }
    }

    // const [state, dispatch] = useReducer(changeNav, navState)

    // Fetch data from
    const [value, setValue] = useState(Cookies.getJSON('userData'))

    /**
     * Number of notifications
     */
    const [username, setUsername] = useState(authUser.username)
    const [messagesCount, setMessagesCount] = useState(8)
    const [friendsCount, setFriendsCount] = useState("1k")
    const [communitiesCount, setCommunitiesCount] = useState(1)
    const [eventsCount, setEventsCount] = useState(9)


    useEffect(() => {
        changeNav(window.location.pathname)
        // setValue(localStorage.getItem('userData'))
        return () => {
            setUsername(value != null || value != undefined ? value.username : '')
            // setValue(Cookies.getJSON('userData'))
            // console.log(value)
        }
    }, [changeNav], [username])

    return (
        <main>
            <div className="container-fluid p-0 h-100">
                <div className="sidebar py-4 px-5">
                    <img src="static/assets/img/logo-red.png" className="logo" alt="logo" />

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

                        <li>
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
                        </li>

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

                        <li>
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
                        </li>

                        <li>
                            <Link href="/settings">
                                <a className={navState == 'settings' ? "active" : ""}>
                                    <i className="fas fa-cog mr-2 text-center"></i>
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {children}
        </main>
    )
}

const fetchData = async () => {
    const userData = localStorage.getItem('userData')
    console.log(userData)
    const res = await fetch(`/api/users?username=${username}&password=${password}`)
    return console.log(res)
}

export default Sidebar