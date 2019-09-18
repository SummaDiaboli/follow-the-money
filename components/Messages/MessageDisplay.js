import React from 'react'

const MessageDisplay = ({ conversation }) => {
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
