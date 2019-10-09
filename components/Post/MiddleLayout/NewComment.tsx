import React, { useState, useLayoutEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'

interface Params {
    postId: number
}

const NewComment: React.FC<Params> = ({ postId }) => {
    const [sendPostActive, setSendPostActive] = useState(false)
    const [postText, setPostText] = useState('')
    const user = Cookies.getJSON('userData')
    const username: string = user.username

    const onChangeText = e => {
        setPostText(e.target.value)
    }

    useLayoutEffect(() => {
        if (postText != '') {
            setSendPostActive(true)
        } else {
            setSendPostActive(false)
        }
    }, [postText])

    const sendComment = () => {
        if (postText != '') {
            fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "post_id": postId,
                    "comment": postText,
                    "username": username
                })
            }).then(res => {
                res.status === 201
                    ? setPostText('')
                    : "Comment couldn't be created"
            })
        }
    }

    return (
        <div className="card vertical-align user-post w-100 d-flex flex-row p-3">
            <img
                className="rounded-circle mr-3"
                src="../static/assets/img/user/user.jpg"
                alt=""
            />
            <input
                type="text"
                className="w-50"
                placeholder="Add a comment"
                value={postText}
                onChange={onChangeText}
            />
            <div className="ml-auto h-100 vertical-align d-flex flex-row">
                <button>
                    <i className="far fa-image"></i>
                </button>
                <button>
                    <i className="far fa-user ml-3"></i>
                </button>
                <button>
                    <i className="far fa-smile ml-3"></i>
                </button>
                <div className="border mx-3"></div>
                <button onClick={sendComment}>
                    <i className={`fas fa-paper-plane ${sendPostActive ? "color-red" : "color-grey"}`} />
                </button>
            </div>
        </div>
    )
}

export default NewComment
