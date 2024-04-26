import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import TouristSpotsCard from './TouristSpotsCard';

const TouristSpots = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const [touristSpots, setTouristSpots] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`${serverLink}/tourist-spots`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTouristSpots(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='relative min-h-96'>
            {loading ? <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div> : ''}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-16'>
                {
                    touristSpots.map(spot => <TouristSpotsCard key={spot._id} touristSpot={spot}></TouristSpotsCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;