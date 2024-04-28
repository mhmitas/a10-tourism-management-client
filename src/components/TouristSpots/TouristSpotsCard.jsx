import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotsCard = ({ touristSpot }) => {
    const { image, tourist_spot_name, country_name } = touristSpot
    return (
        <>
            <div className="card max-w-96 bg-base-100 shadow-xl mx-auto mb-4 rounded-sm">
                <figure><img src={image} alt={tourist_spot_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourist_spot_name}</h2>
                    <p>{country_name}</p>
                    <p className='font-semibold'>User email: <span className='text-primary'>{touristSpot.email}</span></p>
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