import React from 'react'
import { UserProfile } from '../../components/UserProfile'
import Head from 'next/head'
import { useRouter } from 'next/router'

const ProfilePage = () => {
    const router = useRouter()
    const id = router.query.id

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/friend.css" />
                <title>{id}</title>
            </Head>

            <UserProfile />
        </>
    )
}

export default ProfilePage