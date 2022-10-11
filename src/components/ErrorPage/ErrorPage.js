import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import notfound from "../../assets/error-404.json";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div id="main">
                <div className="text-center bg-navy">
                    {/* <p className='display-1'>{error.status}</p>
                    <p className='display-3'>{error.statusText}</p> */}
                    <div className='w-50 mx-auto  my-5 my-lg-0 py-5 py-lg-0'><Lottie animationData={notfound} loop={true} /></div>
                    <div className='w-75 mx-auto my-5 my-lg-0 py-5 pt-lg-3 pb-lg-5'>
                        <p className='fs-4'>Oops! Looks like you're lost in a world of error. <br /> Please return back to reality by clicking the button below.</p>
                        <Link to="/"><button type="button" className="btn btn-outline-warning btn-lg ">Return Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;