import React from 'react'
import { UserAnalytics } from '../components/Analytics/UserAnalytics'
import Head from 'next/head'

const UserAnalyticsPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Backlinq enterprises | Creating innovative solutions, the only way we know how to think" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="stylesheet" href="static/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/analytics.css" />
                <title>User Analytics | Follow the Money</title>
            </Head>

            <UserAnalytics />

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
            <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="static/assets/js/main.js"></script>
            <script src="static/ssets/js/detect.js"></script>
            <script src="static/assets/js/analytics.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="static/assets/js/bootstrap.js"></script>
        </div>
    )
}

export default UserAnalyticsPage
