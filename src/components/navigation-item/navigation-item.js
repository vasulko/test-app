import React from "react";

import './navigation-item.css';

const NavigationItem = ({ label, caption = null }) => {
    console.log(label);
    const element = caption ? <span className='navigation__caption'>{label}</span>
                            : <a href='#' className='navigation__link'>{ label }</a>;
    console.log(element);
    return(
        <>
            {element}
        </>
    );
};

export default NavigationItem;