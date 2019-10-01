import React, { useState } from 'react'

const SideTab = () => {
    const [communityName, setCommunityName] = useState('Madlads')
    const [communityMembers, setCommunityMembers] = useState(249)
    const [userStatus, setUserStatus] = useState(true)

    const handleJoin = () =>{
        setUserStatus(!userStatus)
    }

    const hoverChange = e =>{
        switch (userStatus) {
            case true:
                e.target.innerHTML = 'Leave'
                break
        }
    }

    const mouseOut = e => {
        switch (userStatus) {
            case true:
                e.target.innerHTML = 'Joined'
                break
        }
    }

    return (
        <>
            <div className="col-4">
                <div className="card p-3 mt-4 sidetab">
                    <span className="heading smaller">COMMUNITY DETAILS</span>
                    <span className="description">
                        Phosfluorescently re-engineer high standards in models and holistic testing procedures. 
                        Rapidiously build team driven interfaces via future-proof synergy. 
                        Compellingly matrix resource-leveling metrics before alternative.
                    </span>
                    <div className="d-flex pt-4 flex-row vertical-align w-100">
                        <button
                            className={"d-flex " + (userStatus ? 'joined' : '')} 
                            onMouseOver={hoverChange} 
                            onMouseLeave={mouseOut} 
                            onClick={handleJoin}
                        >
                            {
                                userStatus ? 'Joined' : 'Join'
                            }
                        </button>
                        <h6 className="m-0 members ml-3">{communityMembers} Members</h6>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .heading{
                    color: #454545;
                    font-weight: 500;
                    font-family: 'Segoe UI';
                }

                .members{
                    font-size: 0.85rem;
                }
                
                button{
                    font-size: 0.8rem;
                    padding: 0.5rem 1.2rem;
                    border: 1px solid #D10000!important;
                    color: #D10000;
                    border-radius: 3px;
                    font-weight: 500;
                }

                button.joined{
                    background: #D10000!important;
                    color: #fff;
                }

                .sidetab{
                    position: -webkit-sticky;
                    position: sticky;
                    top: 1rem;
                }

                .description{
                    font-size: 0.8rem!important;
                    padding-top: 1rem;
                    font-weight: 500;
                    color: #454545;
                }
            `}
            </style>
        </>
    )
}

export { SideTab }
