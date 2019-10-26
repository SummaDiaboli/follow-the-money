import React, { useState, useLayoutEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'

interface Params {
    userImage: string,
    userFname: string,
    community_name: string
}

const UserPost: React.FC<Params> = ({ userImage, userFname, community_name }) => {
    const user = Cookies.getJSON('userData')
    const username = user.username

    const [postText, setPostText] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [hasAudio, setHasAudio] = useState(false)
    const [hasVideo, setHasVideo] = useState(false)
    const [hasEmbeddedUsernames, setHasEmbeddedUsernames] = useState(false)
    const [postTitle, setPostTitle] = useState('test')



    const [sendPostActive, setSendPostActive] = useState(false)

    useLayoutEffect(() => {
        if (postText != '') {
            setSendPostActive(true)
        } else {
            setSendPostActive(false)
        }
        // console.log(community_id[0])
    }, [postText])

    const onChangeText = e => {
        setPostText(e.target.value)
    }

    const submitPost = () => {
        let communitiesList = JSON.parse(sessionStorage.getItem('communities'))
        communitiesList.map(community => {
            if (community.name === community_name) {
                if (postText != '') {
                    fetch('/api/posts', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "title": postTitle,
                            "username": username,
                            "has_photo": hasPhoto,
                            "has_audio": hasAudio,
                            "has_video": hasVideo,
                            "type": "communities",
                            "has_embedded_usernames": hasEmbeddedUsernames,
                            "content": {
                                "text": postText
                            }
                        })
                    }).then(res => {
                        if (res.status === 201) {
                            /**
                             * Post created successfully
                             */
                            res.json()
                                .then(result => {
                                    addToCommunityPostTable(result.id, community.id)
                                })
                        } else {
                            /**
                             * Post could not be created
                             */
                        }
                        setPostText('')
                    }).catch(error => {
                        console.log("Error occurred", error)
                    })
                }
            }
        })

    }

    const addToCommunityPostTable = (post_id, community_id) => {
        fetch('/api/community', {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id,
                community_id
            })
        }).then(res => {
            res.status === 201 ? console.log("Created") : console.log('Not created')
        })
    }

    return (
        <div className="card vertical-align user-post w-100 d-flex flex-row p-3 mt-2">
            <img className="rounded-circle mr-3" src={userImage} alt="" />
            <input
                type="text"
                className="w-50"
                placeholder="Post something to this community"
                value={postText}
                onChange={onChangeText}
            />
            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                <button><i className="far fa-image"></i></button>
                <button><i className="far fa-user ml-3"></i></button>
                <button><i className="far fa-smile ml-3"></i></button>
                <div className="border mx-3"></div>
                <button onClick={submitPost}>
                    <i className={`fas fa-paper-plane ${sendPostActive ? "color-red" : "color-grey"}`} />
                </button>
            </div>
        </div>
    )
}

export default UserPost
