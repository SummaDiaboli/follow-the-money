import React from 'react'
import { AnalyticsSidebar } from './Sidebar'

const Analytics = () => {
    return (
        <main>
            <AnalyticsSidebar />
            <div className="main" style={{ height: "100%" }}>
                <div className="container-fluid p-0">
                    <div className="row m-0 w-100 p-3">
                        <div className="col-6">
                            <div className="card p-3 ">
                                <canvas id="podcast_plays" className="w-100" height="300"></canvas>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-3 ">
                                <canvas id="monthly_usage" className="w-100" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 w-100 p-3">
                        <div className="col-5">
                            <div className="card p-3 ">
                                <canvas id="playlists_added" className="w-100" height="300"></canvas>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="card p-3 ">
                                <canvas id="radio_stations" className="w-100" height="300" title="Top Radio stations"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Analytics
