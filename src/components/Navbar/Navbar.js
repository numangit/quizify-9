import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoNav from './logo.png';
import './Navbar.css';

//navbar collapse is not working fix it!!!!!

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">
                        <img className="w-25 me-1 ms-lg-3" src={logoNav} alt="" />
                        <span className='fw-bolder fs-4'> Quiz<span className='text-success'>.ify</span></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item text-center">
                                <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="/topic">Topic</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="/statistics">statistics</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="/blog">Blogs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;