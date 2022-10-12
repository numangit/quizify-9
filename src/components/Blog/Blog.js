import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Lottie from "lottie-react";
import faq from "../../assets/faq.json";

const Blog = () => {
    return (
        <div className="my-lg-0 pb-sm-5 py-5 mt-5 mb-0 mt-md-0">
            <div className='mb-4 pb-3 my-md-0 py-md-0 col-8 col-md-5 col-lg-3 my-md-4 mx-auto'><Lottie animationData={faq} loop={true} /></div>
            <div>
                <h2 className="my-2 my-lg-4 fw-bold display-5 ">Frequently Asked Questions</h2>
                <p className='px-lg-0 px-3 fs-5 mb-1 mb-lg-5'>Below are few buring questions asked by our visiters :</p>
                <Accordion className="my-3 my-md-0 py-5 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the purpose of React Router?</Accordion.Header>
                        <Accordion.Body>React Router enables "client side routing". Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does Context API work ?</Accordion.Header>
                        <Accordion.Body>Context provides a way to pass data through the component tree without having to pass props down manually at every level. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is useRef used for ?</Accordion.Header>
                        <Accordion.Body> useRef is a hook in react with the help of which we can access a DOM element directly. It can be used to store a mutable value that does not cause a re-render when updated. useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;