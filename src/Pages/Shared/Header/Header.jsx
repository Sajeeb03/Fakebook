import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo (2).png';
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut();
        navigate("/user/login")
    }
    return (
        <div className="navbar bg-secondary h-12">
            <div className="navbar-start">

                <img src={logo} alt="" className='w-44' />

            </div>
            <div className='navbar-center mr-16'>
                <ul className='flex gap-12 text-white'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/media"><li>Media</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/message"><li>Messages</li></Link>

                    {
                        user?.uid ? <li onClick={handleSignOut}>Sign Out</li> : <Link to="/user/login"><li>Sign In</li></Link>
                    }

                </ul>
            </div>
            {/* <div className="flex-none gap-2 navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
            </div> */}
        </div>
    );
};

export default Header;