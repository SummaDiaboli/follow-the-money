import React from 'react'
import Head from 'next/head'
import { Friends } from '../components/Friends'

const FriendsPage = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="static/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/friends.css" />
                <title>Friends | Follow the Money</title>
            </Head>

            <Friends />
        </div>
    )
}

export default FriendsPage
