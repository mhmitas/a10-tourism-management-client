import React, { useContext } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';

const UsersSpotCard = ({ usersSpot }) => {
    const { serverLink } = useContext(TouristSpotsContext)
    const { image, tourist_spot_name, country_name, average_cost, short_description } = usersSpot
    function handleDelete(id) {
        fetch(`${serverLink}/tourist-spots/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-4">
                <figure><img src={image} alt={tourist_spot_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourist_spot_name}</h2>
                    <p>Country: {country_name}</p>
                    <p>Spot Id: {usersSpot._id}</p>
                    <p className='font-semibold'>User email: <span className='text-primary'>{usersSpot.email}</span></p>
                    <p>Cost: {average_cost}</p>
                    <p>Short Description: {short_description}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => console.log('please update', usersSpot._id)}
                        >Update</button>

                        <button onClick={() => handleDelete(usersSpot._id)} className="btn btn-primary">Delete</button>

                    </div>
                </div>
            </div>
        </>
    )
};

export default UsersSpotCard;