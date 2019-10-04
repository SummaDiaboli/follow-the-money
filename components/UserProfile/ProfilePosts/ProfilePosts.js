import React, { useState } from "react";
import Post from "./Post";

const ProfilePosts = () => {
    const [profilePosts, setProfilePosts] = useState([
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
                "Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        },
        {
            userImage: "../static/assets/img/user/hamzat.jpg",
            name: "Hamzat Lawal",
            userName: "hamzat",
            timeCreated: "8:15pm, yesterday",
            postText:
                "Starship test vehicle under assembly will look similar to this illustration when ﬁnished. Operational Starships would obv have windows, etc.",
            postImage: "../static/assets/img/posts/post1.jpg",
            likes: "2.1k",
            comments: "201",
            shares: "1.2k"
        }
    ]);

    return (
        <div className="posts mt-3">
            <h6 className="color-grey font-semiBold my-4">Posts</h6>
            {profilePosts.map((post, index) => (
                <Post
                    pid={index + 1}
                    key={index}
                    userImage={post.userImage}
                    name={post.name}
                    userName={post.userName}
                    timeCreated={post.timeCreated}
                    postText={post.postText}
                    likes={post.likes}
                    comments={post.comments}
                    shares={post.shares}
                />
            ))}
        </div>
    );
};

export default ProfilePosts;
