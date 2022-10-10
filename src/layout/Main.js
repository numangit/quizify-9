import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Main.css';

export const TopicsContext = createContext([]);

const Main = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <TopicsContext.Provider value={topics}>
            <div className='bg-navy'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </TopicsContext.Provider>
    );
};

export default Main;