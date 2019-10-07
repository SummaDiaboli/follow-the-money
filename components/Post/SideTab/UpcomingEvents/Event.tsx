import React from 'react'

type Params = {
    image: string,
    eventName: string,
    eventDate: string
}

const Event: React.FC<Params> = ({ image, eventName, eventDate }) => {
    return (
        <>
            <img src={image} className="w-100 mt-1" alt="" />
            <p className="font-semiBold small color-grey m-0 mt-2">{eventName}</p>
            <p className="smaller mt-1 color-grey">{eventDate}</p>
        </>
    )
}

export default Event
