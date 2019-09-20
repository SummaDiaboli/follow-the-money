import React from 'react'
import Link from 'next/link'

const Login = () => {
    return (
        <main>
            <div className="container-fluid p-0 window">
                <div className="overlay"></div>

                <div className="content h-100">
                    <img src="assets/img/logo.png" className="logo-brand" alt="" />

                    <div className="caption">
                        <h1 className="text-white font-weight-bold">Welcome</h1>

                        <h5 className="text-white font-medium">
                            We are a Network of Grassroots Citizens Who are Dedicated to Track Government and International Aid Spending
                        </h5>
                    </div>

                    <div className="form-container vertical-align h-100 mr-md-5">
                        <div className="form">

                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    {/* <Link href="/login"> */}
                                    <a href="#pills-signup" className="nav-link active" id="pills-login-tab" data-toggle="pill" role="tab" aria-controls="pills-login" aria-selected="true">
                                        Log In
                                    </a>
                                    {/* </Link> */}
                                </li>

                                <li className="nav-item">
                                    {/* <Link href="/sign-up"> */}
                                    <a href="#pills-signup" className="nav-link" id="pills-signup-tab" data-toggle="pill" role="tab" aria-controls="pills-signup" aria-selected="false">
                                        Sign Up
                                    </a>
                                    {/* </Link> */}
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active pt-0 mx-auto" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                                    <form action="" className="px-3 py-4">

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                aria-describedby="email"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                aria-describedby="email"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div className="d-flex w-100 options">
                                            <Link href="/forgot-password">
                                                <a>
                                                    Forgot Password
                                                </a>
                                            </Link>

                                            <div className="form-check ml-auto">
                                                <input type="checkbox" className="form-check-input" id="rememberCheck" />

                                                <label className="form-check-label" htmlFor="rememberCheck">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="d-block text-center">
                                            {/* <Link href="/"> */}
                                            <a
                                                href="/"
                                                className="btn bg-red mx-auto text-white mt-5 font-semiBold"
                                                role="button"
                                                style={{ backgroundColor: "#D10000" }}
                                            >
                                                Continue
                                            </a>
                                            {/* </Link> */}
                                        </div>

                                        <hr className="w-100" />

                                        <div className="d-block text-center">
                                            <a href="#!" className="btn bg-white mx-auto mt-3 font-semiBold" role="button">
                                                <i className="fab fa-google mr-2"></i>
                                                Continue
                                            </a>
                                        </div>

                                        <div className="d-block text-center">
                                            <a href="#!" className="btn bg-white mx-auto mt-3 font-semiBold" role="button">
                                                <i className="fab fa-twitter mr-2"></i>
                                                Continue
                                            </a>
                                        </div>

                                        <div className="d-block text-center">
                                            <a href="#!" className="btn bg-white mx-auto mt-3 font-semiBold" role="button">
                                                <i className="fab fa-facebook mr-2"></i>
                                                Continue
                                            </a>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                                    ...
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <style jsx>{`
.window {
    height: 100vh;
    width: 100%;
    background: url("../../static/assets/img/home-bg.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
}

.window .overlay {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.window .content {
    position: relative;
    z-index: 2;
}

.window .logo-brand {
    width: 64px;
    position: relative;
    top: 2rem;
    left: 3rem;
}

.window .content .caption {
    width: 40%;
    position: absolute;
    left: 10rem;
    top: 50%;
}

.window .content .caption h1 {
    font-size: 3.5rem;
}

.window .content .form-container {
    position: absolute;
    right: 0px;
    top: 30px;
}

.window .content .form {
    background: #EEEEEE;
    height: 90%;
}

.font-medium {
    font-weight: 500;
}

.font-semiBold {
    font-weight: 600;
}

.font-extraBold {
    font-weight: 800;
}

.nav-pills .nav-link {
    border-radius: 0rem;
}

.nav-link {
    padding: .7rem 3rem;
    font-weight: 500;
    color: #000;
    font-size: 0.9rem;
}

.nav-link:hover {
    color: rgba(0, 0, 0, 0.5);
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
    background-color: #D10000;
}

input {
    outline: none;
    box-shadow: none;
    border: none;
}

textarea {
    outline: none;
    box-shadow: none;
    border: none;
}

.form-control {
    outline: none !important;
    box-shadow: none !important;
    padding: 1.5rem 1.5rem !important;
    font-size: 0.8rem;
    border: none !important;
    background: #fff !important;
}

::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.37) !important;
    font-family: "Montserrat", sans-serif;
}

::-moz-placeholder {
    color: rgba(0, 0, 0, 0.37) !important;
    font-family: "Montserrat", sans-serif;
}

:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.37) !important;
    font-family: "Montserrat", sans-serif;
}

:-moz-placeholder {
    color: rgba(0, 0, 0, 0.37) !important;
    font-family: "Montserrat", sans-serif;
}

form .options {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.37) !important;
}

form .options a {
    color: rgba(0, 0, 0, 0.5) !important;
}

.window .content .form {
    overflow: auto;
}

.window .content .form hr {
    border-top: 2px solid rgba(0, 0, 0, .1);
}

.btn {
    padding: 0.8rem 2.3rem;
    font-size: 0.8rem;
    border-radius: 12px;
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}
            `}</style>
        </main>
    )
}

export default Login
