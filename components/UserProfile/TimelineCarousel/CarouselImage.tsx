import React from 'react'

interface Params {
    image: string
}

const CarouselImage: React.FC<Params> = ({ image }) => {
    return (
        <div className="col-4 col-md-2 col-lg-2 mt-3 pl-0">
            <img src={image} className="w-100" alt="" />
        </div>
    )
}

export default CarouselImage
