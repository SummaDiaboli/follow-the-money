import React from "react";

interface Params {
    userImage: string | null;
    username: string;
    description: string;
}

const AboutProfile: React.FC<Params> = ({
    userImage,
    username,
    description
}) => {
    return (
        <>
            <div className="w-100 d-flex px-0 px-md-3 px-lg-3 pb-2 vertical-align profile d-flex flex-row">
                <img src={userImage === null ? "../static/assets/img/user/user.jpg" : userImage} className="bigImg" alt="" />
                <div className="flex-column d-flex pt-1">
                    <div className="d-flex flex-row ml-3 vertical-align">
                        <img src={userImage === null ? "../static/assets/img/user/hamzat.jpg" : userImage} className="smallImg mr-2" alt="" />
                        <h6 className="name m-0">{username}</h6>
                        {/* <i className="far ml-2 fa-check-circle color-red fa-sm"></i> */}
                    </div>
                    <div className="description w-75 ml-3 mt-2">
                        {description === null ? "" : description}
                    </div>
                </div>
                <div className="d-flex flex-row ml-auto options">
                    <button className="ml-4">
                        <i className=" fas fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>

            <style>{`
                .smallImg{
                    display:none;
                    height: auto!important;
                    width: 24px!important;
                    position: relative;
                    top: 2px;
                }

                @media only screen and (max-width: 1023px) {
                    .bigImg{
                        display: none;
                    }

                    .smallImg{
                        display: flex;
                    }
                }
            `}</style>
        </>
    );
};

export default AboutProfile;
