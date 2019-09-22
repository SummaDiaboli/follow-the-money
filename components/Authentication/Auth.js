import React, { useState, useEffect } from 'react'
import Login from '../Login/Login'

import Cookies from 'js-cookie'

const Authenticate = ({ userData, children }) => {
    const [auth, setauth] = useState(userData)

    useEffect(() => {
        setauth(Cookies.getJSON('userData'))
    }, [])

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
