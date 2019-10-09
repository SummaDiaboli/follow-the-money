import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const AnalyticsSidebar = () => {
    const [navState, setNavState] = useState('analytics')

    const changeNav = (pathname: string) => {
        switch (pathname) {
            case '/analytics':
                return setNavState('analytics')
            case '/user-analytics':
                return setNavState('user-analytics')
        }
    }

    useEffect(() => {
        changeNav(window.location.pathname)
    })

    return (
        <div className="container-fluid p-0 h-100">
            <div className="row m-0 w-100 h-100">
                <div className="sidebar py-4 px-5">
                    <img src="static/assets/img/logo-red.png" className="logo" alt="" />
                    <p className="font-weight-bold user pt-4">Hi Admin Adedoyin</p>
                    <ul className="mt-2">
                        <li>
                            <Link href="/analytics">
                                <a className={navState == 'analytics' ? "active" : ""}>
                                    <i className="far fa-chart-bar mr-2 text-center"></i>
                                    <span>Statistics</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/user-analytics">
                                <a className={navState == 'user-analytics' ? "active" : ""}>
                                    <i className="fas fa-info mr-2 text-center"></i>
                                    <span>Users Info</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsSidebar
