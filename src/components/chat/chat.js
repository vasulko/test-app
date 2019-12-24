import React from 'react';

import Message from '../message';
import ButtonChat from '../button-chat';
import TypingMessage from '../typing-message';
import './chat.css';

const Chat = () => {
    const dataMessage = [
        {
            profile: 'profile-1',
            img: true,
            text: null,
            id: 1
        },
        {
            profile: 'profile-2',
            img: false,
            text: 'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. ' +
                'Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.',
            id: 2
        },
        {
            profile: 'profile-1',
            img: false,
            text: 'eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non',
            id: 3
        },
        {
            profile: 'profile-2',
            img: false,
            text: 'metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta ' +
                'non pulvinar neque laoreet suspendisse interdum consectetur libero id ' +
                'faucibus nisl tincidunt eget nullam non nisi est sit',
            id: 4
        }
    ];

    const dataButtons = [
        {name: 'shopping',
         label: 'Shopping'},
        {name: 'nightLife',
         label: 'Night Life'},
        {name: 'food',
         label: 'Food'}
    ];

    const messages = dataMessage.map((message) => {
        const {id} = message;
        return (
            <Message key={id} {...message} />
        );
    });

    const buttons = dataButtons.map((button) => {
        const {name} = button;
        return (
            <ButtonChat {...button} key={name}/>
        );
    });

    return (
        <div className='chat'>
            <div className="chat__messages">
                {messages}
            </div>
            <div className='chat__typing-messages'>
                <TypingMessage profile={'profile-1'}/>
                <TypingMessage profile={'profile-2'}/>
            </div>
            <div className='chat__buttons'>
                {buttons}
            </div>

        </div>
    );
};

export default Chat;