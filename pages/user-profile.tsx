import React from 'react'
import { UserProfile } from '../components/UserProfile'
import Head from 'next/head'

const FriendPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/friend.css" />
                <title>Profile | Follow the Money</title>
            </Head>

            <UserProfile id={null} />
        </>
    )
}

export default FriendPage
