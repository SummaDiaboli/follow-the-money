import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { Settings } from '../components/Settings/index'

const SettingsPage = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <title>Settings | Follow the Money</title>
            </Head>

            <Settings />
        </>
    )
}

export default SettingsPage
