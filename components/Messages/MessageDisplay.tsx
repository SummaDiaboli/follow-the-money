import React from "react";
import { UserPost, Message } from './index'

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
                    <div className="d-flex flex-column h-100 p-3">                        
                        <Message message={message}/>

                    </div>
                    <UserPost /> 
                </div>
            }

            <style>{`
            
            `}</style>
        </>
    );
};

export default MessageDisplay;
