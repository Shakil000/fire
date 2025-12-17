import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <>
        <div className=' bg-teal-500 fixed top-0 w-full h-20'>
            <Navbar></Navbar>
        </div>
        <div className='mt-10'>
            <img src="../../../src/assets/About/landing-about.jpg" alt="" />
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default About;