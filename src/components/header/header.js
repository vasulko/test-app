import React from 'react';
import HeaderTop from "./header-top";
import HeaderMain from "./header-main";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="wrap header__wrap">
                    <HeaderTop />
                    <HeaderMain />
                </div>

            </div>
        </header>
    );
};

export default Header;