import React from "react";

interface Params {
    type?: string,
    name: string,
    tracks: number
}

const Playlist: React.FC<Params> = ({ type, name, tracks }) => {
    return (
        <>
            <div className="col-4 mt-3 mb-3">
                <a href="">
                    <div className="wrapper">
                        <div className="overlay"></div>
                        <div className="over-overlay">
                            <h6 className="mt-auto d-flex">{name}</h6>
                            {tracks > 1 ? (
                                <span>{tracks} tracks for you</span>
                            ) : (
                                    <span>{tracks} track for you</span>
                                )}
                        </div>
                    </div>
                </a>
            </div>

            <style jsx>
                {`
                a{
                    color: #fff!important;
                    height: 100%;
                }
            `}
            </style>
        </>

    );
};

export default Playlist;
