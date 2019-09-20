import React from 'react'
import Playlists from '../components/Playlists/Playlists'
import Head from 'next/head'

const PlaylistsPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Backlinq enterprises | Creating innovative solutions, the only way we know how to think"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="stylesheet" href="static/assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css"/>
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/playlist.css"/>
                <title>Playlists | Follow the Money</title>
            </Head>

            <Playlists />

            <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="static/assets/js/main.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="static/assets/js/bootstrap.js"></script>
        </div>
    )
}

export default PlaylistsPage
