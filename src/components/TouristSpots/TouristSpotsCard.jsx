import React from 'react';

const TouristSpotsCard = ({ touristSpot }) => {
    return (
        <>
            <div className="card max-w-96 bg-base-100 shadow-xl mx-auto mb-4">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{touristSpot.tourist_spot_name}</h2>
                    <p>{touristSpot.country_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TouristSpotsCard;