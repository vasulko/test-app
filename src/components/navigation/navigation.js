import React from 'react';

import NavigationItem from "../navigation-item";
import './navigation.css';

const Navigation = ({ data, place, type }) => {

        const itemsList = data.map((item)=>{
            console.log(item);
            return (
                <NavigationItem
                    {...item}
                    key={item.label}
                />
            );
        });

        return(
        <nav className={`navigation ${place}__navigation navigation_type_${type}`}>
            {itemsList}
        </nav>
    );
};

export default Navigation;



