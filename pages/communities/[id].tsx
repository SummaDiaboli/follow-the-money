import React from 'react'
import { Community } from '../../components/Community'
import Head from 'next/head'
import { useRouter } from 'next/router'

const CommunityPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/friend.css" />
                <title>{id}</title>
            </Head>

            <Community />
        </>
    )
}

export default CommunityPage