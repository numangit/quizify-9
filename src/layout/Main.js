import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigate from '../components/Navigate/Navigate';
import './Main.css';

export const TopicsContext = createContext([]);

const Main = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <TopicsContext.Provider value={topics}>
            <div className='bg-navy'>
                <Navigate></Navigate>
                <Outlet></Outlet>
            </div>
        </TopicsContext.Provider>
    );
};

export default Main;