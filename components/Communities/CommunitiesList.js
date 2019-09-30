import React, {useState} from 'react'
import {CommunitiesCard } from './index'
import Communities from './Communities'
import Link from 'next/link'

const CommunitiesList = () => {
    const [communities, setCommunities] = useState([
        {
            name: 'Madlads',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'Askreddit',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'ProgrammerHumor',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'Holup',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'CursedComments',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636
        },
        {
            name: 'BlessedComments',
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
                            <Link href="/communities/[id]" as={`/communities/${community.name}`}>
                                <a>
                                    <CommunitiesCard community={community}/>
                                </a>
                            </Link>
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
