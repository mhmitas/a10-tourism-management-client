import React, { useContext } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

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
            <div className="card max-w-md bg-base-100 shadow-xl mb-4 mx-auto rounded-sm">
                <figure><img className='' src={image} alt={tourist_spot_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourist_spot_name}</h2>
                    <p>Country: {country_name}</p>
                    {/* <p>Spot Id: {usersSpot._id}</p> */}
                    <p>Cost: {average_cost}</p>
                    <p>Short Description: {short_description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/update-spot/${usersSpot._id}`}><button className="btn btn-primary">Update</button></Link>
                        <button onClick={() => handleDelete(usersSpot._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UsersSpotCard;

// {auth.currentUser &&
//     auth.currentUser.email === email ?
//     <button
//         className="btn btn-primary"
//         onClick={() => console.log('please update', usersSpot._id)}
//     >Update</button>
//     :
//     ''
// }