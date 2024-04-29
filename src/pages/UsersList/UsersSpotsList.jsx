import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import UsersSpotCard from './UsersSpotCard';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const UsersSpotsList = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const { user } = useContext(AuthContext)
    const [mySpotsList, setMySpotsList] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch(`${serverLink}/tourist-spots/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMySpotsList(data)
                setLoading(false)
            })
    }, [])

    function handleDelete(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7480ff",
            cancelButtonColor: "#ff5861",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${serverLink}/tourist-spots/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            toast.success('Deleted success')
                        }
                        const updateData = mySpotsList.filter(data => data._id !== id)
                        setMySpotsList(updateData)
                    })
            }
            return;
        });
    }

    return (
        <div className='relative min-h-96 p-3 lg:p-8 '>
            <h3 className='text-3xl font-bold text-center my-10'>My Tourist Spots List</h3>
            {loading && <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div>}
            <div className="overflow-x-auto lg:w-4/5 mx-auto bg-base-100">
                <table className="w-full table">
                    <thead>
                        <tr className='*:text-center'>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Average Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mySpotsList.map(spot => <UsersSpotCard key={spot._id} usersSpot={spot} handleDelete={handleDelete}></UsersSpotCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersSpotsList;