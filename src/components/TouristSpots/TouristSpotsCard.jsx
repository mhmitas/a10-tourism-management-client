import React from 'react';

const TouristSpotsCard = ({ touristSpot }) => {
    const { image, tourist_spot_name, country_name } = touristSpot
    return (
        <>
            <div className="card max-w-96 bg-base-100 shadow-xl mx-auto mb-4">
                <figure><img src={image} alt={tourist_spot_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourist_spot_name}</h2>
                    <p>{country_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TouristSpotsCard;