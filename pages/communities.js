import React from 'react'
import Head from 'next/head'
import Communities from '../components/Communities'

const CommunitiesPage = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <title>Communities | Follow the Money</title>
            </Head>

            <Communities/>
        </>
    )
}

export default CommunitiesPage
