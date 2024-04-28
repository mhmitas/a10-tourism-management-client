import React from 'react';
import Banner from '../../components/header/Banner';
import TouristSpots from '../../components/TouristSpots/TouristSpots';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <div className='text-center mb-16'>
                <Link to="/all-tourist-spots"><button className='btn btn-primary btn-outline'>Show More</button></Link>
            </div>
        </div >
    );
};

export default Home;