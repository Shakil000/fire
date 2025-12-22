import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Subscribe from '../Shared/Subscribe';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';

const News = () => {
    return (
        <div>
            {/* Fixed Navbar */}
                  <div className="bg-teal-500 fixed top-0 w-full h-20 md:h-20 z-30">
                    <Navbar />
                  </div>
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