import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar'
import Player from '../components/Player/Player'
import Cookies from 'js-cookie'
import Authenticate from '../components/Authentication/Auth'

// import '../components/Feed/Feed.css'
// import '../components/Messages/Messages.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
require('../static/assets/css/pages/Feed.css')
require('../static/assets/css/style.css')
// require('../static/assets/css/bootstrap.min.css')
require('../static/assets/css/pages/Messages.css')
require('../static/assets/css/pages/friends.css')
require('../static/assets/css/pages/friend.css')

class MyApp extends App {
    state = {
        path: null
    }

    componentDidMount() {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        this.setState({
            isSafari,
            path: window.location.pathname,
            authUser: Cookies.getJSON('userData')
        })
        // console.log(this.state.authUser)
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
        const { path, isSafari, authUser } = this.state
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Backlinq enterprises | Creating innovative solutions, the only way we know how to think" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                    <title>Follow The Money</title>
                </Head>

                {
                    isSafari == true
                        ? <div class="browser-message vertical-align" id="browser-message">
                            <h3>Please use either Chrome or Firefox to use this application.</h3>
                        </div>
                        : <Authenticate userData={authUser}>
                            <Sidebar authUser={authUser}>
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
                        </Authenticate>
                }


                <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react-popper/1.3.4/index.umd.min.js"></script> */}
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                {/* <script src="static/assets/js/main.js"></script> */}
            </div>
        )
    }
}

export default MyApp