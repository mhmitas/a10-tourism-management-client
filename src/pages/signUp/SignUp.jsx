import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const { createUser } = useContext(AuthContext)

    function onSubmit(data) {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className=' max-w-md mx-auto p-14 my-20 bg-base-100 shadow-xl'>
                <h3 className='text-3xl font-semibold text-center mb-6'>Sign up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full '>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            // required
                            {...register("name")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            required
                            {...register("email")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            required
                            {...register("password")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            // required
                            {...register("photo-url")}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign up" />
                    </div>
                </form>
                <p className="mt-6">
                    Already have an account? Please
                    <Link to="/sign-in" className="link link-primary ml-2">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;