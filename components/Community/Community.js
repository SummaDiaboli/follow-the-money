import React, {useState} from 'react'
import {useRouter} from 'next/router'
import ImageHeader from './ImageHeader'
import { MiddleLayout } from './MiddleLayout/MiddleLayout'

const Community = () => {
    const router = useRouter()
    const {id} = router.query
    const [community, setCommunity] = useState(
        {
            name: 'Madlads',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636,
            headerImg: '../static/assets/img/communityImage.jpg'
        }
    )

    return (
        <>
            <main>
                <div className="main p-0">
                    <div className="container-fluid p-0">
                        <div className="row m-0 w-100">
                            <div className="col-12 p-0">
                                <ImageHeader community={community}/>
                            </div>
                            <div className="col-12 p-0">
                                 <div className="row m-0 w-100 px-4 py-2">
                                    <MiddleLayout />
                                 </div>
                            </div>
                            
                        </div>
                    </div>
                </div> 
            </main>

            <style jsx>{`

            `}
            </style>
        </>
        
    )
}

export default Community
