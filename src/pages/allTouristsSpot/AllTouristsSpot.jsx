import React, { useContext } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';

const AllTouristsSpot = () => {
    const { touristSpots } = useContext(TouristSpotsContext)
    console.log(touristSpots);
    return (
        <div>
            <h3>all tourist sopts</h3>
        </div>
    );
};

export default AllTouristsSpot;