import React from 'react'

interface Params {
    imageUrl: string
}

const ImagePost: React.FC<Params> = ({ imageUrl }) => {
    return (
        <>
            <img src={imageUrl} className="img-post" alt="" />

        </>
    )
}

export default ImagePost
