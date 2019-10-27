import React from "react";

interface Params {
    likes: number | string;
    followers: number | string;
    friends: number | string;
    posts: number | string;
}

const InfoCard: React.FC<Params> = ({ likes, followers, friends, posts }) => {
    return (
        <>
            <div className="card py-3 px-0">
                <div className="row m-0 profile-details w-100">
                    <div className="col-3 text-center">
                        <h6 className="color-red">
                            {likes} <span className="small">likes</span>
                        </h6>
                    </div>
                    <div className="col-3 text-center">
                        <h6 className="color-red">
                            {followers} <span className="small">followers</span>
                        </h6>
                    </div>
                    <div className="col-3 text-center">
                        <h6 className="color-red">
                            {friends} <span className="small">friends</span>
                        </h6>
                    </div>
                    <div className="col-3 text-center">
                        <h6 className="color-red">
                            {posts}
                            <br></br>
                            <span className="small">posts</span>
                        </h6>
                    </div>
                </div>
            </div>

            <style>{`
            .card{
                background: #F6F6F8;
                border: none;
            }
        `}</style>
        </>
    );
};

export default InfoCard;
