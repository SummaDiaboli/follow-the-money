import React, { useState, useEffect } from "react";
import { UserPost, Message } from "./index";
import Cookies from "js-cookie";

interface Params {
    // conversation?: JSON
    active?: boolean;
    username: string;
}

const MessageDisplay: React.FC<Params> = ({ active, username }) => {
    const [conversation, setConversation] = useState([]);
    const user = Cookies.getJSON("userData");
    const Username = user.username;

    const refreshMessages = () => {
        //getConversation()
    };

    useEffect(() => {
        const abortController: AbortController = new window.AbortController();
        const signal: AbortSignal = abortController.signal;

        const getConversation = () => {
            setInterval(() => {
                fetch(`api/messages/${Username}/${username}`,
                    {
                        signal,
                        // mode: "no-cors"
                    })
                    .then(res => {
                        return res.json()
                        // console.log(res.body)
                        // console.log(res.statusText)
                        // console.log(await res.status)
                        // res.json().then(
                        //     conversation => {
                        //         console.log(conversation)
                        //         setConversation([...conversation]);
                        //     });

                        // if (res.body !== null) {
                        //     res.json().then(conversation => {
                        //         // console.log(conversation)
                        //         setConversation([...conversation]);
                        //     });
                        // }
                    })
                    .then(data => {
                        // console.log(data)
                        setConversation([...data])
                    })
                    .catch(err => {
                        if (err.name === "AbortError") {
                            return "Promise Aborted";
                        } else {
                            return "Promise Rejected";
                        }
                    });
            }, 5000);
        };

        getConversation();

        return () => {
            abortController.abort();
        };
    }, [conversation]);

    return (
        <>
            {
                <div
                    className={`tab-pane h-100 fade show ${
                        active ? "active" : ""
                        }`}
                    id={`${username}`}
                    role="tabpanel"
                    aria-labelledby={`${username}-tab`}
                >
                    <div className="d-flex flex-column p-3 overflow">
                        <Message convo={conversation} />
                    </div>
                    <UserPost username={username} parentCallback={refreshMessages} />
                </div>
            }

            <style>{`
                .overflow{
                    height: 83%;
                    overflow-y: auto;
                }
            `}</style>
        </>
    );
};

export default MessageDisplay;
