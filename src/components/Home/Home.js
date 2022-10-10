import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='pb-sm-5 py-5 mt-5 mt-md-0'>
            <Header></Header>
            <h1 className='text-center'>This is home</h1>
            <h2 className='fw-bold'>Quizi<span className='text-success'>.</span>fiy</h2>
        </div>
    );
};

export default Home;