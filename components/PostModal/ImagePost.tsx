import React from 'react'

type Params = {
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
