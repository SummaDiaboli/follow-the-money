import React, { useState, useEffect } from 'react'
import { CommunitiesCard } from './index'
import Link from 'next/link'

interface Params {
    searchValue: string
}

const CommunitiesList: React.FC<Params> = (searchValue) => {
    const [communities, setCommunities] = useState(null)

    useEffect(() => {
        const abortController: AbortController = new window.AbortController()
        const signal: AbortSignal = abortController.signal

        const getCommunities = () => {
            setInterval(() => {
                fetch('/api/communities', { signal })
                    .then(res => {
                        res.json().then(communities => setCommunities(communities))
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            return "Promise Aborted"
                        } else {
                            return "Promise Rejected"
                        }
                    })
            }, 5000)
        }

        getCommunities()

        return () => {
            abortController.abort()
        };

    }, [communities])

    return (
        <>
            <div className="communities mt-3">
                <div className="row m-o w-100">
                    {communities
                        && communities.map((community, index) => (
                            searchValue.searchValue == '' ?
                                <div key={index} className="col-3">
                                    <Link href="/communities/[id]" as={`/communities/${community.name}`}>
                                        <a>
                                            <CommunitiesCard community={community} />
                                        </a>
                                    </Link>
                                </div> :
                                (
                                    community.name.toLowerCase().includes(searchValue.searchValue.toLowerCase()) ?
                                        <div key={index} className="col-3">
                                            <Link href="/communities/[id]" as={`/communities/${community.name}`}>
                                                <a>
                                                    <CommunitiesCard community={community} />
                                                </a>
                                            </Link>
                                        </div>
                                        :
                                        ''
                                )
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