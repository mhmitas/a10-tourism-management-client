import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TouristSpotsCard from '../../components/TouristSpots/TouristSpotsCard';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';

const CountriesSpots = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const [loading, setLoading] = useState(false)

    const paramCountry = useParams().countryName;
    const [spots, setSpots] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`${serverLink}/tourist-spots/find-by-country/${paramCountry}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSpots(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='relative min-h-96'>
            <div className='md:w-[70%] mx-auto p-3 space-y-3 my-6'>
                <div className='px-6 mb-6'>
                    <h3 className='text-3xl font-bold text-center mb-2'>Browse All Tourist Spots of {paramCountry}</h3>
                    <p className='text-center'>Discover hidden destinations, explore curated itineraries, and find travel resources tailored to your interests.</p>
                </div>
                <div className=''>
                    <label className="input input-bordered flex items-center gap-2 rounded-sm input-primary">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

                <div className='flex justify-end'>
                    <select className="select select-sm select-primary rounded-sm max-w-xs">
                        <option className='hidden' >Sort By</option>
                        <option value="1">Average Cost (Low to High)</option>
                        <option value="-1">Average Cost (High to Low)</option>
                    </select>
                </div>

            </div>
            {loading ? <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div> : ''}
            <div className='p-3 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10'>
                {
                    spots.map(spot => <TouristSpotsCard key={spot._id} touristSpot={spot}></TouristSpotsCard>)
                }
            </div>
        </div>
    );
};

export default CountriesSpots;