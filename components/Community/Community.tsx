import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ImageHeader from "./ImageHeader";
import { MiddleLayout } from "./MiddleLayout/MiddleLayout";
import { SideTab } from "./SideTab/SideTab";
import fetch from "isomorphic-unfetch";

const Community = () => {
    const router = useRouter();
    const { id } = router.query;
    /* const [community, setCommunity] = useState(
        {
            name: 'Madlads',
            desc: 'Efficiently productize user-centric ROI vis-a-vis focused leadership skills. Interactively disseminate distinctive intellectual capital without.',
            members: 21636,
            headerImg: '../static/assets/img/communityImage.jpg'
        }
    ) */

    return (
        <>
            <main>
                <div className="main p-0">
                    <div className="container-fluid p-0">
                        <div className="row m-0 w-100">
                            <div className="col-12 p-0">
                                <ImageHeader communityId={id} />
                            </div>
                            <div className="col-12 p-0">
                                <div className="row d-flex m-0 w-100 px-4 py-2">
                                    <div className="col-12 pt-3 p-0 order-1">
                                        <h6 className="color-grey d-none d-md-block d-lg-block font-semiBold my-1">
                                            Posts
                                        </h6>
                                    </div>
                                    <MiddleLayout id={id} />
                                    <SideTab id={id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>
                {`
                    .main {
                        background: #f6f6f8;
                    }

                    .card {
                        border: none !important;
                    }

                    .sideTabSmall {
                        display: none;
                    }

                    .sideTabLarge {
                        display: flex;
                    }

                    @media only screen and (max-width: 1023px) {
                        .sideTabSmall {
                            display: none;
                        }

                        .sideTabLarge {
                            display: none;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Community;
