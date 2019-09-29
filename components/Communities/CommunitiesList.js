import React, {useState} from 'react'
import {CommunitiesCard } from './index'
import Communities from './Communities'

const CommunitiesList = () => {
    const [communities, setCommunities] = useState([
        {
            name: 'r/Madlads',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'r/Askreddit',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'r/ProgrammerHumor',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'r/Holup',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'r/CursedComments',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'r/BlessedComments',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        }
    ])
    
    return (
        <>
            <div className="communities mt-3">
                <div className="row m-o w-100">
                    {communities.map((community) => (
                        <div className="col-3">
                            <a href="#">
                                <CommunitiesCard community={community}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .card{
                    border:none;
                }

                .card h5{
                    font-size: 0.9rem;
                    font-weight: 500;
                    font-family: 'Montserrat';
                }
                
                .col-3:nth-child(n+5){
                    margin-top: 1.5rem;
                }
            `}</style>
        </>
    )
}

export default CommunitiesList
