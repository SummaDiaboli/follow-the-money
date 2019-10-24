import React from 'react'
import CommunityPosts from './CommunityPosts'

const MiddleLayout = () => {
    return (
        <div className="col-8 pl-0 h-100">
            <div className="">
                <CommunityPosts />
            </div>
        </div>
    )
}

export { MiddleLayout }
