import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="pb-sm-5">
            <h2 className="mb-2 my-lg-5 fw-bold ">Frequently Asked Questions</h2>
            <div className="my-lg-3 my-1 w-75 mx-auto">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">What is the purpose of React Router?</h4>
                <p className="bg-dark p-3 rounded-3 mx-5">React Router enables "client side routing".Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information.</p>
            </div>
            <div className="my-lg-3 my-1 w-75 mx-auto">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">How does Context API work ?</h4>
                <p className="bg-dark text-start p-3 rounded-3 mx-5">Context provides a way to pass data through the component tree without having to pass props down manually at every level. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>

            <div className="my-lg-3 my-1 w-75 mx-auto">
                <h4 className="bg-light-navy p-2 rounded-3 mx-5">What is useRef used for ?</h4>
                <p className="bg-dark text-start p-3 rounded-3 mx-5">It is similar to useState. useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.</p>
            </div>
        </div>
    );
};

export default Blog;