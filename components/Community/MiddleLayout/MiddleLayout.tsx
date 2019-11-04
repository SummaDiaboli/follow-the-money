import React from "react";
import CommunityPosts from "./CommunityPosts";

const MiddleLayout = ({ id }) => {
    return (
        <div className="col-md-8 order-3 order-md-2 order-lg-2 col-lg-8 px-0 pr-md-4
                         pr-lg-4 mt-3 mt-md-0 mt-lg-0 h-100">
            <div className="">
                <CommunityPosts id={id} />
            </div>
        </div>
    );
};

export { MiddleLayout };
