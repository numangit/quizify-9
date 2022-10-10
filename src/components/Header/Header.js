import React from 'react';
import Lottie from "lottie-react";
import learn from "../../assets/learn.json";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="d-block align-items-center d-lg-flex flex-lg-row-reverse mt-lg-4">
            <div className='w-100 my-md-4'><Lottie animationData={learn} loop={true} /></div>
            <div className="mx-auto p-3 p-md-4 mt-lg-5">
                <h1 className='display-4 fw-bolder m-0'>Welcome to <span className="text-green">Quiz.ify</span> !</h1>
                <p className='fs-4 mt-3 mt-sm-4'>Welcome to the world’s largest quiz community. Play a quiz or create your own. Join a virtual or live event. Quizify yourself. </p>

                <Link to="blog"><button type="button" class="btn btn-outline-success btn-lg m-1 m-md-3">Learn More</button></Link>
            </div>
        </div>
    );
};

export default Header;