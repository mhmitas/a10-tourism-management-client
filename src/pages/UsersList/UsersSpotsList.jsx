import React, { useContext, useEffect, useState } from 'react';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import UsersSpotCard from './UsersSpotCard';
import { AuthContext } from '../../provider/AuthProvider';


const UsersSpotsList = () => {
    const { serverLink, authLoading } = useContext(TouristSpotsContext)
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
        console.log(user?.email);
    }, [])

    return (
        <div className='relative min-h-96 p-3 lg:p-8 '>
            <h3 className='text-3xl font-bold text-center mt-10'>My Tourist Spots List</h3>
            {loading && <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div>}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10'>
                {
                    mySpotsList.map(spot => <UsersSpotCard key={spot._id} usersSpot={spot}></UsersSpotCard>)
                }
            </div>
        </div>
    );
};

export default UsersSpotsList;