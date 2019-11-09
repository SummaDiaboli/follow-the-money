import React, { useState, useEffect } from "react";
import { UserPost, Message } from "./index";

interface Params {
    // conversation?: JSON
    convo: Array<any>;
    active?: boolean;
    username: string;
}

const MessageDisplay: React.FC<Params> = ({ convo, active, username }) => {
    const [conversation, setConversation] = useState(convo);

    const sendMessage = (message, time) => {
        let localConvo = conversation;
        localConvo.push({
            sender: "me",
            message: message,
            timestamp: time
        });
        setConversation([...localConvo]);
    };

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
                    <UserPost parentCallback={sendMessage} />
                </div>
            }

            <style>{`
            
            `}</style>
        </>
    );
};

export default MessageDisplay;
