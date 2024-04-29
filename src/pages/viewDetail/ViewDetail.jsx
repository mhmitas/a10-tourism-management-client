import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetail = () => {
    const loadedSpot = useLoaderData()
    // console.log(loadedSpot);
    const { image, tourist_spot_name, country_name, average_cost, short_description, location, seasonality, total_visitor_per_year, travel_time, email, } = loadedSpot

    return (
        <div className=' px-3'>
            <div className="card  bg-base-200 py-6 rounded-sm">
                <figure><img className='max-h-screen' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{tourist_spot_name}</h2>
                    <h2 className="card-title">{country_name}</h2>
                    <p>{short_description}</p>
                </div>
            </div>
            <div className="overflow-x-auto mb-16">
                <table className="table md:w-1/2 lg:w-[50%]">
                    <tbody>
                        {/* row 1 */}
                        <tr className='border border-base-300'>
                            <th>Average cost</th>
                            <td>${average_cost}</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="border border-base-300">
                            <th>Location</th>
                            <td>{location}</td>
                        </tr>
                        {/* row 3 */}
                        <tr className='border border-base-300'>
                            <th>Sesonality</th>
                            <td>{seasonality}</td>
                        </tr>
                        <tr className='border border-base-300'>
                            <th>Travel Time</th>
                            <td>{travel_time}</td>
                        </tr>
                        <tr className='border border-base-300'>
                            <th>Total Visitor Per Year</th>
                            <td>{total_visitor_per_year}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewDetail;