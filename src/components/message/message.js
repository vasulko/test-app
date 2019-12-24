import React from "react";

import Avatar from "../avatar";
import MessageContent from "../message-content";

import './message.css';

const Message = ({ profile, img, text, id }) => {
    let classz = `message message_person_${profile} message_moving_${id}`;

    if(img) {
        classz += ` message_type-content_img`;
    }

    if(text) {
        classz += ` message_type-content_text`;
    }


    return(
        <div className={classz}>
            <Avatar profile={profile}/>
            <MessageContent
            img={img}
            text={text
            }/>
        </div>
    );
};

export default Message;