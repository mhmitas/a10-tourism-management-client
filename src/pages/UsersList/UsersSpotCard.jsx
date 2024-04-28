import React, { useContext } from 'react';
// import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
// import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

const UsersSpotCard = ({ usersSpot, handleDelete }) => {
    // const { serverLink } = useContext(TouristSpotsContext)
    const { tourist_spot_name, country_name, average_cost } = usersSpot

    return (
        <>
            <tr className='*:p-3 text-center'>
                <td>{tourist_spot_name}</td>
                <td>{country_name}</td>
                <td>{average_cost}</td>
                <th className=''>
                    <Link to={`/view-detail/${usersSpot._id}`}>
                        <button className="btn btn-primary btn-sm ml-2"><FaEye className='text-xl' /></button>
                    </Link>
                    <Link to={`/update-spot/${usersSpot._id}`}>
                        <button className="btn btn-primary btn-sm ml-2"><MdEdit className='text-xl' /></button>
                    </Link>
                    <button onClick={() => handleDelete(usersSpot._id)} className="btn btn-primary hover:btn-error btn-sm ml-2"><MdDeleteOutline className='text-xl' /></button>
                </th>
            </tr>
        </>
    )
};

export default UsersSpotCard;


// <div className="card max-w-md bg-base-100 shadow-xl mb-4 mx-auto rounded-sm">
//     <figure><img className='' src={image} alt={tourist_spot_name} /></figure>
//     <div className="card-body">
//         <h2 className="card-title">{tourist_spot_name}</h2>
//         <p>Country: {country_name}</p>
//         <p>Cost: {average_cost}</p>
//         <p>Short Description: {short_description}</p>
//         <div className="card-actions justify-end">
//             <Link to={`/update-spot/${usersSpot._id}`}><button className="btn btn-primary">Update</button></Link>
//             <button onClick={() => handleDelete(usersSpot._id)} className="btn btn-primary">Delete</button>
//         </div>
//     </div>
// </div>

