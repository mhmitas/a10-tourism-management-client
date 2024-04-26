import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const routes = [
        { name: 'Home', path: "/", id: 1 },
        { name: 'Add Tourists Spot', path: "/add-tourists-spot", id: 4 },
        { name: 'Home', path: "/", id: 2 },
        { name: 'Home', path: "/", id: 3 },
    ]
    const mapedRoutes = routes.map(route => <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>)

    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {mapedRoutes}
                        {/* for small device */}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold">RedKnot</Link>
                {/* <Link to="/" className="btn btn-ghost text-xl">ArcticTern</Link> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* for learge device */}
                    {mapedRoutes}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/RNs2wnC/profile-pic-random.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div>
                    <button className='btn btn-ghost font-bold text-primary'>Login</button>
                    <button className='btn btn-ghost font-bold text-primary'>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;