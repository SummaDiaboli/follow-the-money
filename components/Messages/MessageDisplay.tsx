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
            fetch(`https://follow-the-money-2019.herokuapp.com/index.php/messages/${Username}/${username}`, { signal })
                .then(res => {
                    res.json().then(conversation => {
                        // console.log(conversation)
                        setConversation([...conversation]);
                    });
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
                    <div className="d-flex flex-column h-100 p-3">
                        <Message convo={conversation} />
                    </div>
                    <UserPost username={username} parentCallback={refreshMessages} />
                </div>
            }

            <style>{`
            
            `}</style>
        </>
    );
};

export default MessageDisplay;
