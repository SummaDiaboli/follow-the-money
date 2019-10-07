import React from 'react'

type Params = {
    conversation?: JSON
}

const MessageDisplay: React.FC<Params> = ({ conversation }) => {
    return (
        <>
            {
                conversation
                    ? <div className="col-8">
                        <div>
                            {conversation}
                        </div>
                    </div>
                    : <div className="col-8">
                        <div className="middle-layout vertical-align" /* style={{ height: "50%" }} */>

                            <span className="no-selected">Please select a chat to start messaging</span>

                        </div>
                    </div>
            }
        </>
    )
}

export default MessageDisplay
