import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateSpot = () => {
    const loadedSpot = useLoaderData()
    const { serverLink } = useContext(TouristSpotsContext)
    const { image, tourist_spot_name, country_name, average_cost, short_description, location, seasonality, total_visitor_per_year, travel_time, } = loadedSpot

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        fetch(`${serverLink}/tourist-spots/${loadedSpot._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Tourist Spot Updated')
                }
            })
    }

    return (
        <div>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-10 lg:p-20'>
                <h3 className='text-3xl font-bold text-center mb-8'>Update This Spot</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=''
                >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input
                                {...register("tourist_spot_name")}
                                type="text"
                                required
                                defaultValue={tourist_spot_name}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input
                                {...register("country_name")}
                                type="text"
                                required
                                defaultValue={country_name}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Loacation</span>
                            </label>
                            <input
                                {...register("location")}
                                type="text"
                                required
                                defaultValue={location}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input
                                {...register("average_cost")}
                                type="number"
                                required
                                defaultValue={average_cost}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input
                                {...register("seasonality")}
                                type="text"
                                required
                                defaultValue={seasonality}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input
                                {...register("travel_time")}
                                type="text"
                                required
                                defaultValue={travel_time}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitor Per Year</span>
                            </label>
                            <input
                                {...register("total_visitor_per_year")}
                                type="text"
                                required
                                defaultValue={total_visitor_per_year}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                {...register("image")}
                                type="text"
                                required
                                defaultValue={image}
                                className="input input-bordered w-full col-span-2" />
                        </div>
                        <textarea {...register("short_description")} className="textarea textarea-bordered my-2 md:col-span-2" required defaultValue={short_description} placeholder="Short Description"></textarea>

                        <input
                            type="submit" value="Update" className='btn mt-2 btn-primary w-full md:col-span-2' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;