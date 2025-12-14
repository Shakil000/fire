import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Banner from '../Pages/Home/Banner/Banner';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
                <Banner></Banner>
            </nav>
           <Outlet></Outlet>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;