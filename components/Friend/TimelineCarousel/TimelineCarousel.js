import React from 'react'
import CarouselImage from './CarouselImage'

const TimelineCarousel = () => {
    return (
        <div className="images pb-2 w-100 d-flex flex-row">
            <CarouselImage image="static/assets/img/image1.jpg" />
            <CarouselImage image="static/assets/img/image2.jpg" />
            <CarouselImage image="static/assets/img/image3.jpg" />
            <CarouselImage image="static/assets/img/image4.jpg" />
            <CarouselImage image="static/assets/img/image5.jpg" />
            <CarouselImage image="static/assets/img/image6.jpg" />
            <CarouselImage image="static/assets/img/image1.jpg" />
        </div>
    )
}

export default TimelineCarousel
