import React from "react";

import './message-content.css';

const MessageContent = ({ img, text }) => {

    const content = img ? <img src={require('./image.png')} alt='photo_file' />
                        : <div className='message__text'>{text}</div>;


    return(
        <div className="message__content">
            {content}
        </div>
    );
};

export default MessageContent;