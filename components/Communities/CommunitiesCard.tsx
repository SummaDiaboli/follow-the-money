import React, { useEffect, createRef } from 'react'

type Params = {
    community: any
}

const CommunitiesCard: React.FC<Params> = ({ community }) => {
    const reference: any = createRef()

    const truncate = (id) => {
        let string = document.getElementById(id).innerHTML;
        var maxLength = 80;
        var result = string.substring(0, maxLength) + '...';
        reference.current.innerHTML = result;
    }

    useEffect(() => {
        // console.log(reference.current.innerHTML)
        truncate('desc');
    })

    return (
        <>
            <div className="card p-3">
                <div className="w-100 d-flex flex-row">
                    <h5 className="m-0">{community.name}</h5>

                </div>
                <span ref={reference} className="desc pt-3" id="desc">{community.desc}</span>
                <span className="pt-3 members">{community.members} Members</span>
            </div>

            <style jsx>{`

                .card:hover{
                    background: #eaeaea;
                }

                .card{
                    border:none;
                }

                .card h5{
                    font-size: 0.9rem;
                    font-weight: 500;
                    font-family: 'Montserrat';
                    color: #000;
                }

                .card .desc{
                    font-size: 0.7rem;
                    font-weigth: 400;
                    color: #000;
                }

                .card .members{
                    font-size: 0.7rem;
                    font-weigth: 400;
                    color: #c7c7c7;
                    font-weight: 500;
                }
                `
            }</style>
        </>
    )
}

export default CommunitiesCard
