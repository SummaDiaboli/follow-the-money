import React from 'react'
import Post from './Post'

const CommunityPosts = () => {
    return (
        <>
            <div className="posts mt-3">                
                <Post
                    userImage="../static/assets/img/user/hamzat.jpg"
                    username="Hamzat Lawal"
                    timeCreated="8:15pm, yesterday"
                    postText="Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time @UKinNigeria High Commissioner @CatrionaLaing1 during #QBP19 She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring collaborations centered on innovation #SDGs"
                    postImage="../static/assets/img/posts/post1.jpg"
                    likes="2.1k"
                    comments="201"
                    shares="1.2k"
                />
                <Post
                    userImage="../static/assets/img/user/hamzat.jpg"
                    username="Hamzat Lawal"
                    timeCreated="2:35pm, Jan 5"
                    postText="Starship test vehicle under assembly will look similar to this illustration when ﬁnished. Operational Starships would obv have windows, etc."
                    likes="3.1k"
                    comments="208"
                    shares="50"
                />
            </div>

            <style jsx>{`
                .card .post:nth-child(n+1){
                    margin-top: 1.5rem;
                }
            `}
            </style>
        </>
    )
}

export default CommunityPosts
