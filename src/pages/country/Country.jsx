import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';

const Country = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        //fetch(`${serverLink}/tourist-spots/countries/all`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }, [])

    return (
        <div className='my-10'>
            <h3 className='text-2xl py-6 font-bold'>Best Countries to visit in South Aisa</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-6'>
                <CountryCard></CountryCard>
                <CountryCard></CountryCard>
                <CountryCard></CountryCard>
                <CountryCard></CountryCard>
                <CountryCard></CountryCard>
                <CountryCard></CountryCard>

            </div>

        </div>
    );
};

export default Country;

function CountryCard() {
    return (
        <div className="max-w-96 shadow-md hover:shadow-2xl bg-base-100 rounded-sm cursor-pointer hover:scale-105">
            <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSjuLg9doPpdcH2F4H5w7LewkDCG_IfuQyfL8BvaDpGT9Op43j68wxaDSr-w28cb_1PeIaPEb-RqAjjLZZ0Vkrp1992mXWtfh-Zu11jSQ" alt="" className="w-full" />
            <div className="flex flex-col justify-between p-6">
                <div className="">
                    <h2 className="text-xl font-bold tracking-wide my-1">Malysia</h2>
                    <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
            </div>
        </div>
    )
}