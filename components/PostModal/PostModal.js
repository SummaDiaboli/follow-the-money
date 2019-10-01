import React from 'react'
import { ImagePost, UserComment } from '.'

const PostModal = () => {
    return (
        <div className="modal fade postModal" role="dialog" aria-labelledby="postModal" /* aria-hidden="true" */>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="d-flex flex-row w-100 h-100">
                        <div className="img-post">
                            <ImagePost imageUrl="../static/assets/img/posts/post1-quality.jpg" />
                        </div>

                        <div className="h-100 px-0 py-3 right">
                            <div className="post source-post p-3 w-100">
                                <div className="w-100 d-flex flex-column">
                                    <div className="user d-flex vertical-align flex-row">
                                        <img src="../static/assets/img/user/hamzat.jpg" className="rounded-circle mr-3" alt="" />
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row w-100">
                                                <h5>Hamzat Lawal</h5>
                                                <i className="far ml-1 fa-check-circle color-red fa-sm"></i>

                                            </div>
                                            <span>8:15 PM, yesterday</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="mt-3">Had the honour to be welcomed yesterday &amp; meeting for the ﬁrst time  <span className="color-red">@UKinNigeria</span> High Commissioner <span className="color-red">@CatrionaLaing1</span>
                                            during <span className="color-red">#QBP19</span> She is an amazing personality and a true friend of Nigeria and her people. Looking forward to exploring
                                            collaborations centered on innovation #SDGs
                                            </p>
                                        <div className="d-flex flex-row actions mt-3">
                                            <a href="#">
                                                <div className="d-flex flex-row vertical-align">
                                                    <i className="far fa-heart"></i>
                                                    <span className="ml-1">2.1k</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="d-flex flex-row vertical-align ml-3">
                                                    <i className="far fa-comment"></i>
                                                    <span className="ml-1">201</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="d-flex flex-row vertical-align ml-3">
                                                    <i className="fas fa-retweet"></i>
                                                    <span className="ml-1">1.2k</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments p-0 mt-4">
                                <h6 className="heading px-3">All Comments</h6>
                            <UserComment userImage="../static/assets/img/user/user.jpg" />

                                <div className="post w-100 p-3">
                                    <div className="w-100 d-flex flex-column">
                                        <div className="user d-flex vertical-align flex-row">
                                            <img src="../static/assets/img/user/nasir.jpg" className="rounded-circle mr-2" alt="" />
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row w-100">
                                                    <h5 className="mb-1">Nasir Bukar Ibrahim</h5>
                                                </div>
                                                <span>8:15 PM, yesterday</span>
                                            </div>
                                        </div>
                                        <div className="content" style={{ marginTop: "3%" }}>
                                            <p className="mt-2 mb-2">Hamzy, it was amazing! Every single word of your brilliant speech was fulﬁlled of inspiration
                                                </p>
                                            <div className="d-flex flex-row actions mt-1">
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align">
                                                        <i className="far fa-heart"></i>
                                                        <span className="ml-1">2.1k</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="far fa-comment"></i>
                                                        <span className="ml-1">201</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="fas fa-retweet"></i>
                                                        <span className="ml-1">1.2k</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post w-100 p-3">
                                    <div className="w-100 d-flex flex-column">
                                        <div className="user d-flex vertical-align flex-row">
                                            <img src="../static/assets/img/user/yhasmeen.jpg" className="rounded-circle mr-2" alt="" />
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-row w-100">
                                                    <h5 className="mb-1">Yhasmeen Buba</h5>
                                                </div>
                                                <span>8:30 AM</span>
                                            </div>
                                        </div>
                                        <div className="content" style={{ marginTop: "3%" }}>
                                            <p className="mt-2 mb-2">It’s really nice to see you on this conf. IMHO, was the only interesting speaker at all
                                                </p>
                                            <div className="d-flex flex-row actions mt-1">
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align">
                                                        <i className="far fa-heart"></i>
                                                        <span className="ml-1">2.1k</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="far fa-comment"></i>
                                                        <span className="ml-1">201</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="d-flex flex-row vertical-align ml-3">
                                                        <i className="fas fa-retweet"></i>
                                                        <span className="ml-1">1.2k</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal
