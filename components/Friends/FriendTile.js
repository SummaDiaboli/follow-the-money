import React from 'react'
import Link from 'next/link'

const FriendTile = ({ userImage, userName, name, userLocation, userID }) => {
    return (
        <>
            <div className="col-4">
                <Link href="/users/[id]" as={`/users/${userName}`}>
                    <a>
                        <div className="card p-0 d-flex vertical-align flex-row">
                            <img src={userImage} alt="" style={{width: "100px"}}/>
                            <div className="d-flex flex-column ml-3">
                                <h6 className="name">{name}</h6>
                                <span className="location">{userLocation}</span>
                            </div>
                        </div>
                    </a>
                </Link>            
            </div>

            <style jsx>{`
                a:hover .card{
                    background: #eaeaea;
                }
            `}</style>
        </>
    )
}

export default FriendTile
