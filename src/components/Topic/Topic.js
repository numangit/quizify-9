import React, { useContext } from 'react';
import { TopicsContext } from '../../layout/Main';
import Header from '../Header/Header';
import TopicCard from '../TopicCard/TopicCard';
import Container from 'react-bootstrap/Container';

const Topic = () => {
    const topics = useContext(TopicsContext);
    return (
        <div className='pb-sm-5 py-5 mt-5 mt-md-0'>
            <Container className="mt-3 mt-md-5">
                <h3 className='fw-semibold fs-3 my-5 '> Available topics to practice : </h3>
                {
                    topics.data.map(topic => <TopicCard key={topic.id} topic={topic}></TopicCard>)
                }
            </Container >
        </div>
    );
};

export default Topic;