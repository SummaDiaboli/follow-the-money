import React from 'react'
import Head from 'next/head'
import { Feed } from '../components/Feed'

require('../static/assets/css/pages/Feed.css')

const FeedPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <title>Feed | Follow the Money</title>
            </Head>

            <Feed />
        </>
    )
}

export default FeedPage
