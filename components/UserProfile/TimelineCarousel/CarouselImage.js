import React from 'react'

const CarouselImage = ({ image }) => {
    return (
        <div className="col-2 pl-0">
            <img src={image} className="w-100" alt="" />
        </div>
    )
}

export default CarouselImage
