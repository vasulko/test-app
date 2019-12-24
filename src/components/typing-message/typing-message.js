import React from "react";

import Avatar from "../avatar";
import './typing-message.css';

const TypingMessage = ({  profile }) => {
    return(
        <div className={`chat__typing-message chat__typing-message_${profile}`}>
            <Avatar profile={profile} />
                <div className="chat__typing-animation">
                    <span className="circle circle-3"></span>
                    <span className="circle circle-2"></span>
                    <span className="circle circle-1"></span>
                </div>
        </div>);
};


export default TypingMessage;