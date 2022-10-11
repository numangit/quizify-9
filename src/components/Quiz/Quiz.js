import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = (props) => {
    console.log(props.props);
    const { question, correctAnswer, options } = props.props;
    const notify = () => toast.info(correctAnswer, { position: "top-center", theme: "dark" });


    return (
        <div className='py-2 py-md-4 my-2 my-md-4 col-10 col-md-8 col-lg-7 mx-auto'>

            <div className="d-flex justify-space-between mx-auto bg-quiz p-2 rounded col-12">
                <p className="py-0 my-0 fs-5 fw-semibold m-1">{question}</p>
                <p onClick={notify} className="py-0 my-0 ms-auto text-end eye-icon"><small><FontAwesomeIcon icon={faEye} /></small></p>
                <ToastContainer />
            </div>
            <div>
                <label class="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for="flexRadioDefault1">
                    <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    {options[0]}
                </label>

                <label class="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for="flexRadioDefault2">
                    <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    {options[1]}
                </label>

                <label class="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for="flexRadioDefault3">
                    <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    {options[2]}
                </label>

                <label class="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for="flexRadioDefault4">
                    <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                    {options[3]}
                </label>
            </div>
        </div>
    );
};

export default Quiz;