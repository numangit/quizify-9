import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div id="main">
                <div class="text-center mt-5">
                    <p className='display-1'>{error.status}</p>
                    <p className='display-3'>{error.statusText}</p>
                    <div className='my-sm-5 w-75 mx-auto'>
                        <p className='fs-1'>Oops! Looks like you're lost in a world of error. Please return back to reality by clicking the button bellow.</p>
                        <Link to="/"><button type="button" class="btn btn-outline-primary btn-lg ">Return Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;