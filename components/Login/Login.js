import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Cookies from 'js-cookie'

const Login = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const onChangeFName = e => {
        setfirstName(e.target.value)
    }

    const onChangeLName = e => {
        setlastName(e.target.value)
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onChangeUsername = e => {
        setUsername(e.target.value)
    }

    const signInUser = () => {
        if (username != '' && password != '') {
            fetch(`/api/users?username=${username}&password=${password}`, {
                method: 'get'
            }).then((res) => {
                res.status === 200
                    ? Router.push('/')
                        .then(() => {
                            res.json().then(data => {
                                // localStorage.setItem('userData', JSON.stringify(data[0]))
                                Cookies.set('userData', data[0], { expires: 7 })
                            })
                        })
                        .then(() => {
                            Router.reload()
                        })
                    : alert("User does not exist in the database")
            })
        } else {
            alert("Please fill in both the username and password fields")
        }
    }

    const signUpUser = () => {
        if (username != '' &&
            email != '' &&
            firstName != '' &&
            lastName != '' &&
            password != '') {
            fetch('api/users', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "email": JSON.stringify({
                        "email": email
                    }),
                    "name": JSON.stringify({ "firstName": firstName, "lastName": lastName }),
                    "password": password,
                    "address": JSON.stringify({ "address": "street" }),
                    "role": 'user'
                })
            }).then(res => {
                res.status === 201
                    ? Router.push('/')
                        .then(() => {
                            Cookies.set('userData', { username }, { expires: 7 })
                        })
                        .then(() => {
                            Router.reload()
                        })
                    : alert("Could not sign you up.")
            })
        } else {
            alert("Please fill in all available fields")
        }
    }

    return (
        <main>
            <div className="container-fluid p-0 window">
                <div className="overlay"></div>

                <div className="content h-100">
                    <img src="static/assets/img/logo.png" className="logo-brand" alt="" />

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
                                    <a href="#pills-login" className="nav-link active" id="pills-login-tab" data-toggle="pill" role="tab" aria-controls="pills-login" aria-selected="true">
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
                                                type="text"
                                                className="form-control"
                                                id="username-login"
                                                aria-describedby="username"
                                                placeholder="Username"
                                                value={username}
                                                onChange={onChangeUsername}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password-login"
                                                aria-describedby="email"
                                                placeholder="Password"
                                                value={password}
                                                onChange={onChangePassword}
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
                                                href="#"
                                                className="btn bg-red mx-auto text-white mt-5 font-semiBold"
                                                role="button"
                                                style={{ backgroundColor: "#D10000" }}
                                                onClick={signInUser}
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
                                    <form action="" className="px-3 py-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                aria-describedby="firstName"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={onChangeFName}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                aria-describedby="lastName"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={onChangeLName}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username-signup"
                                                aria-describedby="username"
                                                placeholder="Username"
                                                value={username}
                                                onChange={onChangeUsername}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email-signup"
                                                aria-describedby="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={onChangeEmail}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password-signup"
                                                aria-describedby="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={onChangePassword}
                                            />
                                        </div>

                                        <div className="d-block text-center">
                                            {/* <Link href="/"> */}
                                            <a
                                                href="#"
                                                className="btn bg-red mx-auto text-white mt-3 font-semiBold"
                                                role="button"
                                                style={{ backgroundColor: "#D10000" }}
                                                onClick={signUpUser}
                                            >
                                                Sign Up
                                            </a>
                                            {/* </Link> */}
                                        </div>
                                    </form>
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
