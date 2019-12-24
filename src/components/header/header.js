import React from 'react';
import HeaderSocial from "../header-social";
import HeaderMain from "../header-main";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='container header__container'>
                    <HeaderSocial />
                    <HeaderMain />
            </div>
        </header>
    );
};

export default Header;