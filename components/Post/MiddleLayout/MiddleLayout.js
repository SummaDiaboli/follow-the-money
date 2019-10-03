import React from "react";
import UserPost from './UserPost'

const MiddleLayout = () => {
    return (
        <>
            <div className="col-8 h-100">
                <div className="middle-layout" style={{ height: "92%" }}>
                    <div className="card p-3">
                        <UserPost 
                        userImage = {user.userImage}
                        userName =  {user.userName} 
                        timeCreated = {user.timeCreated}
                        postText = {user.postText}
                        postImage  likes, comments, shares
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiddleLayout;
