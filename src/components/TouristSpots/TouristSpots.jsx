import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import TouristSpotsCard from './TouristSpotsCard';

const TouristSpots = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const [touristSpots, setTouristSpots] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`${serverLink}/tourist-spots/limit/${8}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTouristSpots(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='relative min-h-96 mb-10'>
            <div className='py-6 text-2xl font-bold'>
                <h3>Find best Spots for you</h3>
            </div>
            {loading ? <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div> : ''}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    touristSpots.map(spot => <TouristSpotsCard key={spot._id} touristSpot={spot}></TouristSpotsCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;