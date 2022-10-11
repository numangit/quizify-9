import React from 'react';
import { Link } from 'react-router-dom';
import './TopicCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopicCard = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        //tip: use col instead of w to get responsive width
        <div className="d-flex my-4 col-lg-7 col-12 mx-auto  bg-card text-white p-2 rounded-3">
            <img className="w-25 m-2" src={logo} alt="Card image" />
            <div className='mx-auto'>
                <p className="fs-3 my-1 py-0 fw-bold">{name}</p>
                <p className="d-none d-sm-block my-1 py-0">Practice and test your {name} by answering our quiz. The more you practice the better you get! </p>
                <p className=" my-2 py-0 "><small><span className="fw-semibold">Total Quiz : </span>{total}</small></p>
                <Link className="my-2 py-0 " ><button className="btn btn-outline-dark btn-sm rounded-pill fw-bolder">Get Started  <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
            </div>
        </div>
    );
};

export default TopicCard;