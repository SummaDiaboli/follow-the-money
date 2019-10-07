import React from 'react'

interface Params {
    title?: string
}

const Test: React.FC<Params> = ({ title }) => {
    return (
        <div className="main">
            {title}
        </div>
    )
}

export default Test
