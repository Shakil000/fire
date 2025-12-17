import React from 'react';
import Products from './Products/Products';
import Newsletter from './Newsletter/Newsletter';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Products></Products>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    );
};

export default Home;