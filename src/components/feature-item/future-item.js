import React from "react";

import './future-item.css';

const FeatureItem = ({ img ,title, text }) => {
    const icon = require(`../features/img/${img}.png`);
    return(
        <div className="feature-item">
            <img src={icon} alt={`img`} className='feature-item__icon'/>
            <div className="feature-item__description">
                <h3 className='feature-item__title'>{title}</h3>
                <p className='feature-item__text'>{text}</p>
            </div>

        </div>
    );
};

export default FeatureItem;