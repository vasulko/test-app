import React from 'react';
import Button from '../../button';

import './header-main.css';

const HeaderMain = () => {

    return(
        <div className="header__main">
            <h2 className='title header__title'>Chatbot which helps millennials <br />
                Find unique attractions</h2>
            <Button />
        </div>
    );
};

export default HeaderMain;