import React from 'react'
import Link from 'next/link'

const FriendTile = ({ userImage, username, userLocation }) => {
    return (
        <div class="col-4">
            <div class="card p-0 d-flex vertical-align flex-row">
                <img src={userImage} alt="" style={{width: "100px"}}/>
                <div class="d-flex flex-column ml-3">
                    <h6 class="name">{username}</h6>
                    <span class="location">{userLocation}</span>
                </div>
                <button class="options d-flex ml-auto">
                    <Link href="/friend">
                        <i class="fas fa-ellipsis-v "></i>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default FriendTile
