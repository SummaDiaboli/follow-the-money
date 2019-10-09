import React from 'react'
import { Post } from '../../components/Post'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PostPage = () => {
    // const router = useRouter()
    // const { pid } = router.query

    return (
        <>
            <Head>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/feed.css" /> */}
                <title>Post | Follow The Money</title>
            </Head>

            <Post />
        </>
    )
}

export default PostPage
