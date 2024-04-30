import React from 'react';
import { FaBusAlt, FaHotel, FaTaxi } from 'react-icons/fa';
import { FaCableCar, FaTicket, FaTrainSubway } from 'react-icons/fa6';
import { IoBoat, IoHome } from 'react-icons/io5';
import { MdOutlineFlight } from 'react-icons/md';

const HelpSection = () => {
    return (
        <div className='my-14'>
            <div className='my-4'>
                <h3 className='text-2xl font-bold'><strong>Travel Made Easy!</strong> Find everything you need - </h3>
                <p className='text-xl'>flights, hotels, activities, attractions, and more - all in one convenient place. Let's craft your dream trip together!</p>
            </div>
            <div className='flex flex-wrap gap-6 justify-center lg:justify-between bg-base-100 p-8'>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><MdOutlineFlight className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Flights</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><FaBusAlt className='text-8xl'></FaBusAlt></div>
                    <p className='text-xl font-bold'>Buses</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><FaTrainSubway className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Trains</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><IoBoat className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Ships</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><FaTaxi className='text-8xl'></FaTaxi></div>
                    <p className='text-xl font-bold'>Cabs</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><FaHotel className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Hotels</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><IoHome className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Homes</p>
                </div>
                <div className='flex flex-col justify-center hover:text-primary items-center'>
                    <div><FaTicket className='text-8xl' /></div>
                    <p className='text-xl font-bold'>Tickets</p>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;