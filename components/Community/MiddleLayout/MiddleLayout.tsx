import React from 'react'
import CommunityPosts from './CommunityPosts'


const MiddleLayout = ({ id }) => {

    return (
        <div className="col-8 pl-0 h-100">
            <div className="">
                <CommunityPosts id={id}/>
            </div>
        </div>
    )
}

export { MiddleLayout }
