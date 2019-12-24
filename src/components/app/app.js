import React from 'react';
import Header from '../header';
import Features from "../features";
import Presentation from '../presentation';
import Footer from "../footer";
import './app.css';

const App = () => {
    return (
       <>
           <Header />
           <Features />
           <Presentation />
           <Footer />
       </>
    );
};

export default App;