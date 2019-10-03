import React, { useState, useEffect, } from 'react'
import Login from '../Login/Login'

import Cookies from 'js-cookie'

const Authenticate = ({ userData, children }) => {
    const [auth, setauth] = useState(userData)

    /**
     * Checks if the user token still exists
     */
    useEffect(() => {
        setInterval(() => {
            setauth(Cookies.getJSON('userData'))
        }, 2000);
        return () => {
            auth
        }
    }, [setauth])

    if (auth) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return <Login />
    }
}

export default Authenticate
