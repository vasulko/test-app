import React from 'react';

import Logo from '../logo';
import './header-social.css';
import fbIcon from './social-icon/fb-icon.png';
import twIcon from './social-icon/tw-icon.png';

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <Logo />
            <div className='social'>
                <a className='social__btn-fb social__btn' href='https://www.facebook.com/'>
                    <img src={fbIcon} alt='facebook' className='social__icon' />
                </a>
                <a className='social__btn-tw social__btn' href='https://twitter.com/home?lang=uk'>
                    <img src={twIcon} alt='twitter' className='social__icon' />
                </a>
            </div>
        </div>
    );
};

export default HeaderSocial;
