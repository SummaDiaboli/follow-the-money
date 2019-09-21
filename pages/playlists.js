import React from 'react'
import Playlists from '../components/Playlists/Playlists'
import Head from 'next/head'

const PlaylistsPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Backlinq enterprises | Creating innovative solutions, the only way we know how to think"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css"/>
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/playlist.css"/>
                <title>Playlists | Follow the Money</title>
            </Head>

            <Playlists />

            <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="static/assets/js/main.js"></script>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react-popper/1.3.4/index.umd.min.js"></script> */}
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </div>
    )
}

export default PlaylistsPage
