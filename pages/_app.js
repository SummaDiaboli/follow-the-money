import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar'
import Player from '../components/Player/Player'
// import Router from 'next/router'

// import '../components/Feed/Feed.css'
// import '../components/Messages/Messages.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
require('../static/assets/css/pages/Feed.css')
require('../static/assets/css/style.css')
require('../static/assets/css/bootstrap.min.css')
require('../static/assets/css/pages/Messages.css')
require('../static/assets/css/pages/friends.css')
require('../static/assets/css/pages/friend.css')

class MyApp extends App {
    state = {
        path: null
    }

    componentDidMount() {
        this.setState({
            path: window.location.pathname
        })
    }

    componentWillUnmount() {
        if (this.state.path != '/login' || this.state.path != '/sign-up') {
            this.setState({
                path: null
            })
        }
        this.setState({
            path: window.location.pathname
        })
    }

    render() {
        const { Component, pageProps } = this.props
        const { path } = this.state
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Backlinq enterprises | Creating innovative solutions, the only way we know how to think" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="stylesheet" href="static/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                    <title>Follow The Money</title>
                </Head>

                <Sidebar >
                    <Component {...pageProps} />
                    {
                        path == '/login' ||
                            path == '/sign-up' ||
                            path == '/analytics' ||
                            path == '/user-analytics' ||
                            path == null
                            ? null
                            : <Player />
                    }
                </Sidebar>


                <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="static/assets/js/bootstrap.js"></script>
                {/* <script src="static/assets/js/main.js"></script> */}
            </div>
        )
    }
}

export default MyApp