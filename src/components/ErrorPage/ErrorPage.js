import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div id="main">
                <div class="text-center d-flex mt-5 justify-content-center">
                    <h1>{error.statusText} {error.status}</h1>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;