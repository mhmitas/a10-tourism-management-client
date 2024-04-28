import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='container max-w-screen-2xl mx-auto'>
            <div className='min-h-screen flex flex-col justify-between bg-base-200'>
                <div className=''>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;