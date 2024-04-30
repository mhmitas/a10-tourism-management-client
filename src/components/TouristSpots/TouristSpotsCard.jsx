import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotsCard = ({ touristSpot }) => {
    const { image, tourist_spot_name, country_name, average_cost, location, total_visitor_per_year, travel_time, seasonality } = touristSpot
    return (
        <>
            <div className=" rounded-sm shadow-md bg-base-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-sm h-72 0" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-1">
                        <h2 className="card-title font-bold text-2xl">{tourist_spot_name}</h2>
                        <p className=''><strong>Country: </strong>{country_name}</p>
                        <p><strong>Location: </strong>{location}</p>
                        <p><strong>Average cost: </strong><span className='badge'>${average_cost}</span></p>
                        <p><strong>Total VisitorPer Year: </strong>{total_visitor_per_year}</p>
                        <p><strong>Seasonality: </strong>{seasonality}</p>
                        <p><strong>Travel Time: </strong>{travel_time}</p>
                        <p><strong>Postted By:</strong> <span className='font-semibold'>{touristSpot.user_name || 'Not Mentioned'}</span></p>
                    </div>
                    <Link className='ml-auto' to={`/view-detail/${touristSpot._id}`}><button className="btn btn-sm btn-outline btn-primary">View Detail</button></Link>

                </div>
            </div>
        </>
    );
};

export default TouristSpotsCard;