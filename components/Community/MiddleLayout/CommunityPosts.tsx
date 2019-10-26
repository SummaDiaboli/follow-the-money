import React, { useEffect, useState } from 'react'
import UserPost from '../UserPost'

import fetch from 'isomorphic-unfetch'
import Post from './Post'
import moment from 'moment-timezone'

const CommunityPosts = ({ id }) => {
    let community_id
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const abortController: AbortController = new window.AbortController()
        const signal: AbortSignal = abortController.signal
        // console.log(community_id[0])
        const getPosts = (comm_id) => {
            setInterval(() => {
                fetch(`/api/community?community_id=${comm_id}`, { signal })
                    .then(res => {
                        setIsLoading(false)
                        if (res.status === 200) {
                            res.json()
                                .then(posts => {
                                    sessionStorage.setItem(`${comm_id}CommunityPosts`, JSON.stringify(posts))
                                    setPosts([...posts])
                                    // console.log(posts)
                                })
                        } else {
                            setPosts([])
                        }
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            return 'Promise Aborted'
                        } else {
                            return 'Promise Rejected'
                        }
                    })
            }, 8000);
        }


        let communitiesList = JSON.parse(sessionStorage.getItem('communities'))
        communitiesList.map(community => {
            if (community.name === id) {
                // return community.id
                community_id = community.id
                getPosts(community.id)
            }
        })

        return () => {
            abortController.abort()
        }

    }, [posts])

    useEffect(() => {
        if (community_id !== undefined) {
            const cachedCommunityPosts = JSON.parse(sessionStorage.getItem(`${community_id}CommunityPosts`))
            if (cachedCommunityPosts !== null || cachedCommunityPosts !== undefined) {
                setPosts(cachedCommunityPosts)
                setIsLoading(false)
            }
        }
    }, [setPosts, isLoading])

    return (
        <>
            <div className="userPost">
                <UserPost userImage="../static/assets/img/user/user.jpg" userFname="Hamzat" community_name={id} />
            </div>

            <div className="posts mt-3">
                {
                    isLoading === true || posts === null
                        ? <div className="text-center" style={{ marginTop: "5%" }}>
                            <div className="spinner-border" role="status" style={{ color: "#D00000" }}>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        : posts.length == 0
                            ? <>
                            </>
                            : posts.map((post, index) => (
                                <Post
                                    username={post.username}
                                    key={index}
                                    pid={post.id}
                                    userImage="../../static/assets/img/user/user.jpg"
                                    postText={post.content.text}
                                    timeCreated={moment(post.post_date).format('MMMM Do YYYY') /* + " " + post.post_date + post.post_time */}
                                />
                            ))

                }
                {/* <Post
                    userImage="../static/assets/img/user/hamzat.jpg"
                    username="Hamzat Lawal"
                    timeCreated="8:15pm, yesterday"
                    postText="Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs"
                    postImage="../static/assets/img/posts/post1.jpg"
                    likes="2.1k"
                    comments="201"
                    shares="1.2k"
                    pid={0}
                />
                <Post
                    userImage="../static/assets/img/user/hamzat.jpg"
                    username="Hamzat Lawal"
                    timeCreated="2:35pm, Jan 5"
                    postText="Starship test vehicle under assembly will look similar to this illustration when ﬁnished. Operational Starships would obv have windows, etc."
                    likes="3.1k"
                    comments="208"
                    shares="50"
                    pid={1}
                /> */}
            </div>

            <style jsx>{`
                .card .post:nth-child(n+1){
                    margin-top: 1.5rem;
                }

                .card{
                    border: none!important;
                }
            `}
            </style>
        </>
    )
}

export default CommunityPosts