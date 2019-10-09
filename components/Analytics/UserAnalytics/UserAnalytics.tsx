import React from 'react'
import { AnalyticsSidebar } from '../Sidebar'

const UserAnalytics = () => {
    return (
        <main>
            <AnalyticsSidebar />

            <div className="main" style={{ height: "100%" }}>
                <div className="container-fluid p-0">
                    <div className="row m-0 w-100 p-3">
                        <div className="col-12">
                            <h6>User Rankings</h6>
                            <div className="card p-3 mt-4">
                                <table className="table user-rankings">
                                    <thead>
                                        <tr>
                                            <th scope="col">Rank</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Friends</th>
                                            <th scope="col">Total Likes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>moyi</td>
                                            <td>2.2k</td>
                                            <td>9.7k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>tobi</td>
                                            <td>2.1k</td>
                                            <td>9.1k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry62</td>
                                            <td>1.8k</td>
                                            <td>8.3k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mavins</td>
                                            <td>1.7k</td>
                                            <td>8.2k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>solar21</td>
                                            <td>1.7k</td>
                                            <td>8.2k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Dedoyin</td>
                                            <td>1.5k</td>
                                            <td>6.7k</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Dedoyin</td>
                                            <td>1.5k</td>
                                            <td>6.7k</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="card p-3 mt-4">
                                <table className="">
                                    <thead>
                                        <tr>
                                            <th scope="col">Total Users</th>
                                            <th scope="col">Total Playlists</th>
                                            <th scope="col">Total Radio Channels</th>
                                            <th scope="col">Total Podcasts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">13.2k</th>
                                            <td>1.2k</td>
                                            <td>156</td>
                                            <td>976</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="card p-3 mt-4">
                                <table className="">
                                    <thead>
                                        <tr>
                                            <th scope="col">Users added this month</th>
                                            <th scope="col">Playlists added this month</th>
                                            <th scope="col">Radio Channels added this month</th>
                                            <th scope="col">Podcasts added this month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">13.2k</th>
                                            <td>1.2k</td>
                                            <td>156</td>
                                            <td>976</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 mt-3 w-100 p-3">

                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserAnalytics
