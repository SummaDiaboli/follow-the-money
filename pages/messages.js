import React from 'react'
import Head from 'next/head'
import { Messages } from '../components/Messages'

// import '../components/Messages/Messages.css'
require('../static/assets/css/pages/Messages.css')

const MessagesPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <title>Messages | Follow the Money</title>
            </Head>

            <Messages />
        </>
    )
}

export default MessagesPage
