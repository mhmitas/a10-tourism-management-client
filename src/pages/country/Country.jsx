import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';

const Country = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(`${serverLink}/tourist-spots/allCountries`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)
            })
    }, [])

    return (
        <div className='my-10'>
            <h3 className='text-2xl py-6 font-bold'>Best Countries to visit in South Aisa</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4 gap-6'>
                {
                    countries.map(country => <CountryCard key={country._id} countryData={country}></CountryCard>)
                }
            </div>

        </div>
    );
};

export default Country;

function CountryCard({ countryData }) {
    return (
        <div className="max-w-96 shadow-md hover:shadow-2xl bg-base-100 rounded-sm cursor-pointer hover:scale-105">
            <img src={countryData.image} alt="" className="w-full " />
            <div className="flex flex-col justify-between p-6">
                <div className="">
                    <h2 className="text-xl font-bold tracking-wide my-1">{countryData.country_name}</h2>
                    <p className="">{countryData.description.slice(0, 95)}</p>
                </div>
            </div>
        </div>
    )
}
