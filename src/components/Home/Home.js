import React, { useContext } from 'react';
import { TopicsContext } from '../../layout/Main';
import Header from '../Header/Header';

const Home = () => {
    const topics = useContext(TopicsContext);
    console.log(topics);
    return (
        <div className='pb-sm-5 py-5 mt-5 mt-md-0'>
            <Header></Header>
            <div>
                {
                    topics.data.map(topic => console.log(topic))
                }
            </div>
        </div>
    );
};

export default Home;