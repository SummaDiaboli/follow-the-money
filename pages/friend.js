import React from 'react'
import { Friend } from '../components/Friend'
import Head from 'next/head'

const FriendPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/friend.css" />
                <title>Friend | Follow the Money</title>
            </Head>

            <Friend />
        </>
    )
}

export default FriendPage
