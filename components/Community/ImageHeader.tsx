import React from 'react'

interface Params {
    communityId: string | string[]
}

const ImageHeader: React.FC<Params> = ({ communityId }) => {
    return (
        <>
            <div className="col-12 d-flex">
                <h3 className="d-flex text-white mt-auto pl-2">{communityId}</h3>
            </div>

            <style jsx>{`
                .col-12{
                    background: rgb(134,134,134);
                    background: -moz-linear-gradient(180deg, rgba(134,134,134,1) 0%, #212121 100%);
                    background: -webkit-linear-gradient(180deg, rgba(134,134,134,1) 0%, #212121 100%);
                    background: linear-gradient(180deg, rgba(134,134,134,1) 0%, #212121 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#868686",endColorstr="#212121",GradientType=1);
                    height: 25vh;
                    background-position: center;
                }
            `}
            </style>
        </>
    )
}

export default ImageHeader
