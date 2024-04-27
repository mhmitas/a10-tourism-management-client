import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TouristSpotsContext } from '../../provider/TouristSpotsProveder';
import { AuthContext } from '../../provider/AuthProvider';

const AddTouristsSpot = () => {
    const { serverLink } = useContext(TouristSpotsContext)
    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data, event) => {
        if (user === null) {
            console.log('Age Sign in kore asun');
            return;
        }
        console.log(data)
        data.email = user.email
        fetch(`${serverLink}/tourist-spots`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    console.log('Tourist Spot added successfully')
                    event.target.reset()
                }
            })
    }

    return (
        <>
            <div className='lg:w-4/5 mx-auto my-20 bg-base-100 p-10 lg:p-20'>
                <h3 className='text-3xl font-bold text-center mb-8'>Add a Tourist Spot</h3>
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
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input
                                {...register("average_cost")}
                                type="text"
                                required
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
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                {...register("image")}
                                type="text"
                                defaultValue="https://i.ibb.co/YBpPX7j/travelars.png"
                                required
                                className="input input-bordered w-full col-span-2" />
                        </div>
                        <textarea {...register("short_description")} className="textarea textarea-bordered my-2 md:col-span-2" required placeholder="Short Description"></textarea>

                        <input
                            type="submit" value="Add" className='btn mt-2 btn-primary w-full md:col-span-2' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddTouristsSpot;