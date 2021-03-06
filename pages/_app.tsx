import React from "react";
import App from "next/app";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import Player from "../components/Player/Player";
import Cookies from "js-cookie";
import Authenticate from "../components/Authentication/Auth";

// import '../components/Feed/Feed.css'
// import '../components/Messages/Messages.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
require("../static/assets/css/pages/Feed.css");
require("../static/assets/css/style.css");
// require('../static/assets/css/bootstrap.min.css')
require("../static/assets/css/pages/Messages.css");
require("../static/assets/css/pages/friends.css");
require("../static/assets/css/pages/friend.css");

class MyApp extends App {
    state = {
        path: null,
        isLoading: true,
        isSafari: false,
        authUser: null
    };

    componentDidMount() {
        const isSafari: boolean = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
        );
        this.setState({
            isSafari,
            isLoading: false,
            path: window.location.pathname,
            authUser: Cookies.getJSON("userData")
        });
        // console.log(this.state.authUser)
    }

    componentWillUnmount() {
        if (this.state.path != "/login" || this.state.path != "/sign-up") {
            this.setState({
                path: null
            });
        }
        this.setState({
            path: window.location.pathname
        });
    }

    render() {
        const { Component, pageProps } = this.props;
        const { path, isSafari, authUser, isLoading } = this.state;
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="Follow the Money | Online sharing platform"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="static/assets/css/style.css"
                    />


                    <title>Follow The Money</title>
                </Head>

                {isSafari == true ? (
                    <div
                        className="browser-message vertical-align"
                        id="browser-message"
                    >
                        <h3>
                            Please use either Chrome or Firefox to use this
                            application.
                        </h3>
                    </div>
                ) : //<Authenticate userData={authUser}>
                    isLoading ? (
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div
                                    className="spinner-grow text-danger"
                                    role="status"
                                    style={{ marginTop: "25%" }}
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <Authenticate userData={authUser}>
                                <div className="mobile">
                                    <div className="d-flex flex-column text-center">
                                        <i className="fas fa-ban text-white fa-2x"></i>
                                        <h5 className="text-white text-center pt-3">
                                            This is a desktop app.
                                    <br />
                                            Please use this on a laptop.
                                </h5>
                                    </div>
                                </div>
                                <Sidebar authUser={authUser}>
                                    <Component {...pageProps} />
                                    {path == "/login" ||
                                        path == "/sign-up" ||
                                        path == "/analytics" ||
                                        path == "/user-analytics" ||
                                        path == null ? null : (
                                            <Player />
                                        )}
                                </Sidebar>
                            </Authenticate>
                        )}



                <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-storage.js"></script>
                <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-analytics.js"></script>

                <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </div>
        );
    }
}

export default MyApp;
