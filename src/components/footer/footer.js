import React from 'react';

import Logo from "../logo";
import Navigation from "../navigation";

import './footer.css';


const Footer = () => {
    const socialData = [
        {
            caption: true,
            label: 'Social'
        },

        {
            label: 'Facebook'
        },

        {
            label: 'Twitter'
        },

        {
            label: 'LinkedIn'
        },

        {
            label: 'Angel List'
        }
    ];

    const navigationData = [
        {
            caption: true,
            label: 'Navigation'
        },

        {
            label: 'Careers'
        },

        {
            label: 'Our services'
        },

        {
            label: 'About us'
        },

        {
            label: 'Contact'
        }
    ];

    return(
        <footer className='footer'>
            <div className="container footer__container">
                <div className="footer__logo-copyright">
                    <Logo />
                    <span className='footer__copyright'>
                         © Copyright Attractie
                    </span>
                </div>
                <div className="footer__navigations">
                    <Navigation
                        data={socialData}
                        place='footer'
                        type='social'
                    />
                    <Navigation
                        data={navigationData}
                        place='footer'
                        type='navigator'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;