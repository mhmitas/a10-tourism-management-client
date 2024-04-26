import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className=''>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;