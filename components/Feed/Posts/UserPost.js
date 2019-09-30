import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'

const UserPost = () => {
    const [userPhoto, setuserPhoto] = useState(require("../../../static/assets/img/user/user.jpg"))
    const [postText, setPostText] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [hasAudio, setHasAudio] = useState(false)
    const [hasVideo, setHasVideo] = useState(false)
    const [hasEmbeddedUsernames, setHasEmbeddedUsernames] = useState(false)
    const [username, setUsername] = useState('test')
    const [postTitle, setPostTitle] = useState('test')


    const onChangeText = e => {
        setPostText(e.target.value)
    }

    const submitPost = () => {
        if (postText != '') {
            fetch('api/posts', {
                method: 'post',
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
                    "has_embedded_usernames": hasEmbeddedUsernames,
                    "content": {
                        "text": postText
                    }
                })
            }).then(res => {
                res.status === 201
                    ? console.log("Post created successfully")
                    : console.log("Post could not be created")
                setPostText('')
            }).catch(error => {
                console.log("Error occurred", error)
            })
        }
    }

    return (
        <>
            <div>
                <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
                    <img className="rounded-circle mr-3" src={userPhoto} alt="" />
                    <input
                        type="text"
                        className="w-50"
                        placeholder="What's on your mind?"
                        value={postText}
                        onChange={onChangeText}
                    />
                    <div className="ml-auto h-100 vertical-align d-flex flex-row">
                        <button><i className="far fa-image"></i></button>
                        <button><i className="far fa-user ml-3"></i></button>
                        <button><i className="far fa-smile ml-3"></i></button>
                        <div className="border mx-3"></div>
                        <button onClick={submitPost}>
                            <i className="fas fa-paper-plane color-red" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPost
