import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Subscribe from '../Shared/Subscribe';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';

const News = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='bg-white py-80'>
            <h1 className='items-center justify-center flex text-7xl text-amber-400'>Comming Soon</h1>
            </section>
            <Subscribe></Subscribe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default News;