import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ThemeControl from '../themeControl/ThemeControl';

const Navbar = () => {
    const { user, authLoading, signOutUser } = useContext(AuthContext)

    const routes = [
        { name: 'Home', path: "/", id: 1 },
        { name: 'All Tourist Spots', path: "/all-tourist-spots", id: 2 },
        { name: `My list`, path: "/users-spots-list", id: 3 },
        { name: 'Add Tourist Spot', path: "/add-tourists-spot", id: 4 },
    ]
    const mapedRoutes = routes.map(route => <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>)

    function handleSignOut() {
        signOutUser()
            .then(() => console.log('Sign out success'))
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-md *:z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" data-tooltip-id="my-tooltip" data-tooltip-content="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52">
                        {mapedRoutes}
                        {/* for small device */}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl md:text-2xl font-bold">RedKnot</Link>
                {/* <Link to="/" className="btn btn-ghost text-xl">ArcticTern</Link> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* for learge device */}
                    {mapedRoutes}
                </ul>
            </div>
            <div className="navbar-end mr-4">
                <ThemeControl ></ThemeControl>
                {authLoading ?
                    <span className="loading loading-ring loading-md"></span>
                    :
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img alt={user?.displayName && user.displayName} src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tY0hxsg/default-profile.jpg"}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-sm w-52 ">
                                <li><Link to="/profile"><button>Profile</button></Link></li>
                                <li><button onClick={handleSignOut}>Sign out</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to="/sign-in">
                                <button className='btn btn-sm btn-outline border-none btn-ghost font-semibold text-primary'>Sign in</button>
                            </Link>
                            <Link to="/sign-up">
                                <button className='btn btn-sm btn-ghost btn-outline font-semibold text-primary'>Sign up</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;