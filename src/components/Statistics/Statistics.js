import React, { useContext } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css';

import { TopicsContext } from '../../layout/Main';

const Statistics = () => {
    const topics = useContext(TopicsContext);
    const allQuiz = topics.data;
    return (
        <div className='mt-5 py-5'>
            <h2 className="my-0 py-0 fw-bold display-5">Our quiz <span className="text-green">Statistics</span></h2>
            <p className='fs-4 mt-3 mt-md-1 p-2 p-md-5'>Best Resources to learn Statistics. Statistics is the study of the collection, analysis, interpretation, presentation, and organisation of data. Here are some stats about our provided topics.</p>

            <div className="d-block d-lg-flex m-3 m-md-3">
                <div className="bg-white rounded col-lg-4 mx-auto p-md-3 ">
                    <BarChart width={350} height={250} data={allQuiz}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </div>
                <div className="mt-3 mt-lg-0 bg-white rounded col-lg-4 mx-auto p-md-3">
                    <AreaChart width={350} height={250} data={allQuiz}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />

                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;