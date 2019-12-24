import React from 'react';

import PresentationContent from "../presentation-content";
import Chat from "../chat";
import './presentation.css';

const Presentation = () => {
    return(
        <section className='presentation'>
            <div className="container presentation__container">
                <div className="presentation__wrap">
                    <PresentationContent />
                    <Chat />
                </div>
            </div>
        </section>
    );
};

export default Presentation;