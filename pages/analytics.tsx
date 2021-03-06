import React from 'react'
import { Analytics } from '../components/Analytics'
import Head from 'next/head'

const AnalyticsPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Follow the Money | Online sharing platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="static/assets/css/pages/analytics.css" />

                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
                <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="static/assets/js/main.js"></script>
                <script src="static/assets/js/detect.js"></script>
                <script src="static/assets/js/analytics.js"></script>
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react-popper/1.3.4/index.umd.min.js"></script> */}
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

                <title>Analytics | Follow the Money</title>
            </Head>

            <Analytics />

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
            <script src="https://kit.fontawesome.com/cdbc3ca26f.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="static/assets/js/main.js"></script>
            <script src="static/assets/js/detect.js"></script>
            <script src="static/assets/js/analytics.js"></script>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react-popper/1.3.4/index.umd.min.js"></script> */}
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </>
    )
}

export default AnalyticsPage
