import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { Feed } from '../components/Feed'

require('../static/assets/css/pages/Feed.css')

const FeedPage = () => {
    // const testpostuser = () => {
    //     fetch('api/users', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "username": "salim",
    //             "email": "salimabdu008@gmail.com",
    //             "name": '{"firstName": "Salim"}',
    //             "password": "myfather",
    //             "role": 'user'
    //         })
    //     }).then((res) => {
    //         res.status === 200 ? console.log("works") : console.log("doesn't work")
    //     }).catch(() => {
    //         console.log("Something went seriously wrong")
    //     })
    // }

    // const testget = () => {
    //     fetch('api/users')
    // }

    // const testgetspecificuser = () => {
    //     fetch('api/users/6')
    // }

    // const testdeletespecificuser = (id) => {
    //     fetch(`api/users/${id}`, {
    //         method: "delete"
    //     })
    // }

    // const testupdatespecificuser = (id) => {
    //     fetch(`api/users/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "username": "Salim",
    //             "email": "salimhussaini008@gmail.com",
    //             "name": '{"firstName": "Salim", "lastName": "Hussaini"}',
    //             "password": "password",
    //             "role": "admin"
    //         })
    //     })
    // }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <title>Feed | Follow the Money</title>
            </Head>

            <Feed />
        </>
    )
}

export default FeedPage
