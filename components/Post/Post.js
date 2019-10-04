import React from "react"
import { SideTab } from './SideTab'
import { MiddleLayout } from './MiddleLayout'
import { NotificationIcon } from '../User'
require('../../static/assets/css/pages/Feed.css')
import 'bootstrap/dist/css/bootstrap.min.css'

const Post = () => {
  return (
    <>
        <div className="main" style={{ overflow: "hidden" }}>
            <nav>
            <ul className="d-flex vertical-align" style={{ display: "flex" }}>
                <NotificationIcon />
            </ul>
            <hr className="w-100" />
            </nav>

            <div className="container-fluid content h-100 p-0">
                <div className="row px-0 py-1 h-100 m-0 w-100">
                    <MiddleLayout />
                    <SideTab />
                </div>
            </div>
        </div>

        <style jsx>{`
                h1,
                h2,
                h3,
                h4,
                h5,
                span,
                p {
                    font-family: "Montserrat";
                }

                .font-segoe {
                    font-family: "Segoe UI", sans-serif;
                }

                .main {
                    background: #f6f6f8;
                }
                
                .content{
                    position: 'relative':
                    top: -1rem;
                }

        `}</style>
    </>
  );
};

export default Post;
