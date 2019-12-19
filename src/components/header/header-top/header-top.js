import React from 'react';


import './header-top.css';
import fbIcon from "../img/social-icon/fb-icon.png";
import twIcon from "../img/social-icon/tw-icon.png";

const HeaderTop = () => {
    return (
        <div className='header__top'>
            <div className='header__logo-wrap'>
                        <span className='header__logo'>
                        attractie
                        </span>
            </div>
            <div className='header__social-wrap'>
                <a className='header__social-btn-fb social-btn' href='https://www.facebook.com/'>
                    <img src={fbIcon} alt='facebook' className='header__social-icon' />
                </a>
                <a className='header__social-btn-tw social-btn' href='https://twitter.com/home?lang=uk'>
                    <img src={twIcon} alt='twitter' className='header__social-icon' />
                </a>
            </div>
        </div>
    );
};

export default HeaderTop;
