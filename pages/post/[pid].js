import React, { useEffect } from 'react'

const Post = ({ query }) => {
    useEffect(() => {
        console.log(query.pid)
    }, [])
    return (
        <div className="main" style={{ overflow: "hidden" }}>
            {query.pid}
        </div>
    )
}

Post.getInitialProps = ({ req, query }) => {
    // return { pathname: query }
    console.log(query)
    return { query }
}

export default Post
