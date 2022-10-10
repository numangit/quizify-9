import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Main.css';

const Main = () => {
    return (
        <div className='bg-navy'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;