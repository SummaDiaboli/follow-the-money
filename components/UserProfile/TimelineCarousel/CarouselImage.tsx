import React from 'react'

type Params = {
    image: string
}

const CarouselImage: React.FC<Params> = ({ image }) => {
    return (
        <div className="col-2 pl-0">
            <img src={image} className="w-100" alt="" />
        </div>
    )
}

export default CarouselImage
