import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/favicon.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';









const Header = () => {
    
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/review'>My Review</Link></li>
                    <li className='font-semibold'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Log Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-purple-900 text-neutral-content  h-20 mb-12 p-12 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="">

                    <div className="avatar">
                        <div className="w-16 p-1 rounded-full">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-primary glass">Contact</button>
            </div>
        </div>
    );
};

export default Header;