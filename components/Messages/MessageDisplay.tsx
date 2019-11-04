import React from "react";

interface Params {
    // conversation?: JSON
    message: string;
    active?: boolean;
    username: string;
}

const MessageDisplay: React.FC<Params> = ({ message, active, username }) => {
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
                    <span className="no-selected">{message}</span>
                </div>
            }
        </>
    );
};

export default MessageDisplay;
