import React from "react";

import './button-chat.css';

const ButtonChat = ({ name, label}) => {
    const clazz = `chat__btn chat__btn-type-${name}`;
    return(
        <div className='wrap__btn'>
            <button className={clazz}></button>
            <span className='chat__btn-label'>{label}</span>
        </div>
    );
};

export default ButtonChat;