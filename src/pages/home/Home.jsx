import React from 'react';
import Banner from '../../components/header/Banner';
import TouristSpots from '../../components/TouristSpots/TouristSpots';
import { Link } from 'react-router-dom';
import Country from '../country/Country';
import HelpSection from '../../components/Help/HelpSection';
import AboutUsSort from '../../components/AboutUsSort';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='p-3 lg:p-8'>
                <HelpSection></HelpSection>
                <Country></Country>
                <TouristSpots></TouristSpots>
                <div className='text-center mb-16'>
                    <Link to="/all-tourist-spots"><button className='btn btn-primary btn-outline'>Show More</button></Link>
                </div>
                <AboutUsSort></AboutUsSort>
            </div>
        </div >
    );
};

export default Home;