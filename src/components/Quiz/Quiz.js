import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = (props) => {
    console.log(props.props);
    const { question, id, correctAnswer, options } = props.props;


    return (
        <div className='py-2 py-md-4 my-2 my-md-4 col-10 col-md-8 col-lg-7 mx-auto'>

            <div className="d-flex justify-space-between mx-auto bg-quiz p-2 rounded col-12">
                <p className="py-0 my-0 fs-5 fw-semibold m-1">{question}</p>
                <p className="py-0 my-0 ms-auto text-end eye-icon"><small><FontAwesomeIcon icon={faEye} /></small></p>
            </div>
            <div>
                <div class="bg-dark p-2 text-start mt-2 btn-answer rounded">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label ms-2" for="flexRadioDefault1">{options[0]}</label>
                </div>
                <div class="bg-dark p-2 text-start mt-2 btn-answer rounded">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label ms-2" for="flexRadioDefault2">{options[1]}</label>
                </div>
                <div class="bg-dark p-2 text-start mt-2 btn-answer rounded">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label ms-2" for="flexRadioDefault2">{options[2]}</label>
                </div>
                <div class="bg-dark p-2 text-start mt-2 btn-answer rounded">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label ms-2" for="flexRadioDefault2">{options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Quiz;