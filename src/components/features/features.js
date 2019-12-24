import React from "react";

import FeatureItem from "../feature-item";

import './features.css';

const Features = () => {

    const data = [
        {
            img: 'nightLife',
            title: 'Night life',
            text: 'Looking for night clubs and lounge zones? Explore available places and events'
        },
        {
            img: 'food',
            title: 'Food',
            text: 'Looking work an unique cafe? Explore top-rated spaces.'
        },
        {
            img: 'shopping',
            title: 'Shopping',
            text: 'Going to buy new laptop? Explore available stores around you'
        }

    ];

    const items = data.map((item)=>{
        return(
            <FeatureItem {...item} key={item.title}/>
            );
    });

    return(
        <section className="features">
            <div className="container features__container">
                <h2 className='title features__title'>Powered by artificial intelligence <br />
                    Designed by travelers</h2>
                <div className="features-wrap">
                    {items}
                </div>
            </div>
        </section>
    );
};

export default Features;