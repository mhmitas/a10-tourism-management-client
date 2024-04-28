import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotsCard = ({ touristSpot }) => {
    const { image, tourist_spot_name, country_name, average_cost, location, total_visitor_per_year, travel_time, email, } = touristSpot
    return (
        <>
            <div className="card max-w-96 bg-base-100 shadow-xl mx-auto mb-4 rounded-sm">
                <figure><img src={image} alt={tourist_spot_name} /></figure>
                <div className="card-body">
                    {/* <div className='flex gap-4'>
                        <img className='rounded-full w-7' src="https://i.ibb.co/DwC8qHH/boy-1.jpg" alt="" />
                        <span>{touristSpot.email}</span>
                    </div> */}
                    <h2 className="card-title">{tourist_spot_name}</h2>
                    <p>{country_name}</p>
                    <p><strong>Location: </strong>{location}</p>
                    <p><strong>Average cost: </strong><span className='badge'>${average_cost}</span></p>
                    <p><strong>Total VisitorPer Year: </strong>{total_visitor_per_year}</p>
                    <p><strong>Travel Time: </strong>{travel_time}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/view-detail/${touristSpot._id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TouristSpotsCard;